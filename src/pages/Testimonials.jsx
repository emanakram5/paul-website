import { PageHero, Reveal, Wrap, Btn } from '../components/ui.jsx'
import { testimonials } from '../data/site.js'

export default function Testimonials() {
  return (
    <>
      <PageHero title="Kind words." sub="Only genuine reviews will appear here. Placeholders are labelled." seed="happy-new-home" />
      <section className="py-24"><Wrap className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t, n) => <Reveal key={n} delay={n * 0.08}><figure className="h-full bg-champ p-10">
          <span className="font-serif text-8xl leading-none text-bronze" aria-hidden>“</span>
          <blockquote className="font-serif text-3xl italic leading-snug">{t.quote}</blockquote>
          <figcaption className="mt-6 text-sm text-char/65">{t.name} · {t.category}<br />{t.date} · {t.source}</figcaption></figure></Reveal>)}
      </Wrap>
      <Wrap className="mt-16"><Btn to="/contact" solid>Work with Paul</Btn></Wrap></section>
    </>
  )
}
