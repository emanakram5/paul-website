import { PageHero, Img, Zoom, Reveal, Btn, Wrap } from '../components/ui.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return (
    <>
      <PageHero title="Services." sub="Five ways Paul can help." seed="property-keys-handover" />
      {services.map((s, n) => <section key={s.id} id={s.id} className={n % 2 ? 'bg-champ' : ''}>
        <Wrap className={`grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-20 ${n % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <Reveal><Zoom className="aspect-[4/5]"><Img src={s.image} seed={s.seed} w={1200} h={1500} alt={s.title} /></Zoom></Reveal>
          <Reveal><h2 className="mb-5 text-5xl sm:text-6xl">{s.title}</h2><p className="mb-8 max-w-[50ch] leading-8">{s.text}</p><Btn to="/contact" solid>Enquire</Btn></Reveal>
        </Wrap></section>)}
    </>
  )
}
