import { Img, Reveal, Btn, Wrap, PageHero } from '../components/ui.jsx'
import Portrait from '../components/Portrait.jsx'
import { timeline } from '../data/site.js'

const areas = ['Buy-to-let', 'Property sales', 'Lettings', 'Holiday lets', 'Serviced accommodation', 'Social housing']

export default function About() {
  return (
    <>
      <PageHero title="The story behind the advice." sub="A career built across every corner of the property market." seed="english-countryside-home" />
      <section className="py-24"><Wrap className="grid items-start gap-12 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <Reveal><Portrait className="aspect-[4/5] lg:sticky lg:top-28" /></Reveal>
        <Reveal><h2 className="mb-6 text-5xl sm:text-6xl">Hello, I’m Paul.</h2>
          <p className="mb-4 max-w-[60ch] leading-8">Placeholder introduction. Paul’s own words go here, in src/pages/About.jsx. Awaiting Paul’s confirmation.</p>
          <p className="mb-4 max-w-[60ch] leading-8">Paul currently works with iad UK, helping people buy, sell, invest in and let property.</p>
          <h3 className="mb-4 mt-10 text-3xl">Experience across the market</h3>
          <ul className="grid max-w-md grid-cols-2 gap-x-6 gap-y-2 text-sm">{areas.map((a) => <li key={a} className="border-b border-bronze/40 py-2">{a}</li>)}</ul>
        </Reveal>
      </Wrap></section>
      <section className="relative h-[60vh]"><Img seed="architecture-interior" alt="" /></section>
      <section className="py-24"><Wrap>
        <Reveal><h2 className="mb-12 text-5xl sm:text-6xl">Career timeline.</h2></Reveal>
        <ol className="max-w-3xl border-l border-bronze">{timeline.map((t) => <Reveal key={t.year}><li className="mb-10 pl-8">
          <h3 className="text-3xl">{t.year}</h3><p className="mt-1 leading-7">{t.text}</p></li></Reveal>)}</ol>
      </Wrap></section>
      <section className="bg-char py-24 text-ivory"><Wrap className="grid gap-12 lg:grid-cols-2">
        <Reveal><h2 className="mb-4 text-4xl">Community.</h2><p className="max-w-[55ch] leading-8 text-champ">Placeholder: Paul’s community involvement. Awaiting Paul’s confirmation.</p></Reveal>
        <Reveal><h2 className="mb-4 text-4xl">Philosophy and values.</h2><p className="max-w-[55ch] leading-8 text-champ">Placeholder: Paul’s approach to honest, long-term property advice. Awaiting Paul’s confirmation.</p></Reveal>
      </Wrap></section>
      <section className="py-24"><Wrap className="text-center"><Reveal><h2 className="mb-8 text-5xl">Let’s talk property.</h2><Btn to="/contact" solid>Contact Paul</Btn></Reveal></Wrap></section>
    </>
  )
}
