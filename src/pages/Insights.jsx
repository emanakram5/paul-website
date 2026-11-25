import { Link, useParams } from 'react-router-dom'
import { PageHero, Img, Zoom, Reveal, Wrap, Btn } from '../components/ui.jsx'
import { posts } from '../data/site.js'

export function Insights() {
  const [first, ...rest] = posts
  const Card = ({ p, big }) => <Reveal className={big ? 'lg:col-span-2' : ''}><Link to={`/insights/${p.slug}`} className="block">
    <Zoom className={big ? 'aspect-[16/8]' : 'aspect-[16/10]'}><Img seed={p.seed} w={1600} h={900} alt="" /></Zoom>
    <p className="mt-4 text-sm text-bronze">{p.category} · {p.date}</p>
    <h3 className={`mt-1 ${big ? 'text-5xl' : 'text-3xl'}`}>{p.title}</h3><p className="mt-2 max-w-[60ch] text-sm leading-7">{p.excerpt}</p>
    <span className="mt-3 inline-block border-b border-bronze text-sm">Read more</span></Link></Reveal>
  return (
    <>
      <PageHero title="Insights." sub="Sample articles. Replace with Paul’s own writing in src/data/site.js." seed="architecture-magazine" />
      <section className="py-20"><Wrap className="grid gap-x-8 gap-y-16 lg:grid-cols-2"><Card p={first} big />{rest.map((p) => <Card key={p.slug} p={p} />)}</Wrap></section>
    </>
  )
}

export function Article() {
  const p = posts.find((x) => x.slug === useParams().slug)
  if (!p) return <Wrap className="py-40"><h1 className="mb-6 text-5xl">Article not found.</h1><Btn to="/insights">Back to Insights</Btn></Wrap>
  return (
    <>
      <PageHero title={p.title} sub={`${p.category} · ${p.date}`} seed={p.seed} />
      <Wrap className="max-w-3xl py-20">{p.body.map((t, i) => <p key={i} className="mb-6 text-lg leading-9">{t}</p>)}<Btn to="/insights">Back to Insights</Btn></Wrap>
    </>
  )
}
