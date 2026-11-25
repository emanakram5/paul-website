import { Link, useParams } from 'react-router-dom'
import { Img, Zoom, Reveal, Wrap, EnquiryForm, PropertyCard, Btn } from '../components/ui.jsx'
import { properties } from '../data/site.js'

export default function PropertyDetail() {
  const { id } = useParams()
  const p = properties.find((x) => x.id === id)
  if (!p) return <Wrap className="py-40 text-center"><h1 className="mb-6 text-5xl">Property not found.</h1><Btn to="/properties">Back to Properties</Btn></Wrap>
  const gallery = p.gallery?.length ? p.gallery.map((src) => ({ src, key: src })) : [1, 2, 3, 4].map((n) => ({ seed: `${p.seed}-${n}`, key: n }))
  const similar = properties.filter((x) => x.id !== p.id && x.mode === p.mode).slice(0, 2)
  return (
    <>
      <header className="h-[75vh] pt-0"><Img src={p.image} seed={p.seed} eager alt={p.title} /></header>
      <Wrap className="py-16">
        <Link to="/properties" className="text-sm text-bronze">Back to properties</Link>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-5xl sm:text-7xl">{p.title}</h1><p className="mt-2">{p.location}</p></div>
          <p className="font-serif text-4xl text-bronze">£{p.price.toLocaleString('en-GB')}{p.mode === 'rent' ? ' pcm' : ''}</p></div>
        <p className="mt-4 text-sm">{p.type} · {p.beds} bedrooms · {p.baths} bathrooms · {p.status}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {gallery.map((g, n) => <Zoom key={g.key} className={`aspect-[16/10] ${n === 0 ? 'sm:col-span-2 sm:aspect-[16/8]' : ''}`}><Img src={g.src} seed={g.seed} w={1600} h={1000} alt={`${p.title} photo ${n + 1}`} /></Zoom>)}
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[3fr_2fr]">
          <Reveal><h2 className="mb-4 text-4xl">About this property</h2><p className="mb-8 max-w-[60ch] leading-8">{p.desc}</p>
            <h3 className="mb-3 text-2xl">Key features</h3>
            <ul className="mb-10 grid gap-2 sm:grid-cols-2">{p.features.map((x) => <li key={x} className="border-b border-bronze/40 py-2 text-sm">{x}</li>)}</ul>
            <h3 className="mb-3 text-2xl">Floor plan</h3><p className="mb-10 text-sm">Floor plan available on request.</p>
            <h3 className="mb-3 text-2xl">Location</h3>
            <iframe title={`Map of ${p.location}`} loading="lazy" className="h-80 w-full border-0" src={`https://www.google.com/maps?q=${encodeURIComponent(p.location)}&output=embed`} /></Reveal>
          <Reveal><div className="bg-champ p-8"><h2 className="mb-6 text-3xl">Arrange a viewing</h2>
            <EnquiryForm types={['Viewing request', 'More information']} extra={`Property: ${p.title}, ${p.location}`} /></div></Reveal>
        </div>
        {similar.length > 0 && <><h2 className="mb-8 mt-24 text-4xl">Similar properties</h2>
          <div className="grid gap-8 md:grid-cols-2">{similar.map((s) => <PropertyCard key={s.id} p={s} ratio="aspect-[16/10]" />)}</div></>}
      </Wrap>
    </>
  )
}
