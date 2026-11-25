import { useMemo, useState } from 'react'
import { PageHero, PropertyCard, Wrap } from '../components/ui.jsx'
import { properties } from '../data/site.js'

const field = 'border-b border-grey bg-transparent py-2 text-sm outline-none focus:border-bronze'
export default function Properties() {
  const [f, setF] = useState({ q: '', mode: 'all', type: 'all', beds: 0, max: '', status: 'all' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const types = [...new Set(properties.map((p) => p.type))]
  const statuses = [...new Set(properties.map((p) => p.status))]
  const list = useMemo(() => properties.filter((p) =>
    p.location.toLowerCase().includes(f.q.toLowerCase()) && (f.mode === 'all' || p.mode === f.mode) &&
    (f.type === 'all' || p.type === f.type) && p.beds >= +f.beds && (!f.max || p.price <= +f.max) &&
    (f.status === 'all' || p.status === f.status)), [f])
  return (
    <>
      <PageHero title="Properties." sub="Sample listings with invented details and random images." seed="luxury-homes-row" />
      <section className="py-16"><Wrap>
        <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-6">
          <input aria-label="Search by location" placeholder="Search location" value={f.q} onChange={set('q')} className={`${field} col-span-2 lg:col-span-1`} />
          <select aria-label="Buy or rent" value={f.mode} onChange={set('mode')} className={field}><option value="all">Buy or rent</option><option value="buy">Buy</option><option value="rent">Rent</option></select>
          <select aria-label="Property type" value={f.type} onChange={set('type')} className={field}><option value="all">Any type</option>{types.map((t) => <option key={t}>{t}</option>)}</select>
          <select aria-label="Bedrooms" value={f.beds} onChange={set('beds')} className={field}><option value={0}>Any bedrooms</option>{[2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}+ bedrooms</option>)}</select>
          <input aria-label="Maximum price" type="number" placeholder="Max price (£)" value={f.max} onChange={set('max')} className={field} />
          <select aria-label="Status" value={f.status} onChange={set('status')} className={field}><option value="all">Any status</option>{statuses.map((s) => <option key={s}>{s}</option>)}</select>
        </div>
        {list.length ? <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">{list.map((p) => <PropertyCard key={p.id} p={p} ratio="aspect-[16/10]" />)}</div>
          : <p className="py-20 text-center">No properties match those filters. Try widening your search.</p>}
      </Wrap></section>
    </>
  )
}
