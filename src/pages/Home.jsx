import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Img, Zoom, Reveal, Counter, Btn, Wrap, PropertyCard } from '../components/ui.jsx'
import { stats, services, properties, testimonials } from '../data/site.js'
import Portrait from '../components/Portrait.jsx'

export default function Home() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 7000); return () => clearInterval(t) }, [])
  const t = testimonials[i]
  return (
    <>
      <header className="relative flex min-h-svh items-end text-white">
        <motion.div className="absolute inset-0" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: 'easeOut' }}>
          <img
  src="/images/header.png"
  alt="Luxury British property"
  className="h-full w-full object-cover"
/></motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-char/85 via-char/25 to-char/45" />
        <Wrap className="relative pb-16 pt-40">
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} className="max-w-[12ch] text-6xl sm:text-8xl lg:text-[9rem]">A Different Perspective on Property.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.25 }} className="my-6 max-w-xl text-lg text-champ">Paul Langshaw has bought, sold and let property for over two decades. Today he helps buyers, sellers and landlords with iad UK.</motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.45 }} className="flex flex-wrap gap-4">
            <Btn to="/properties" solid>Explore Properties</Btn><Btn to="/about" light>Discover Paul’s Story</Btn></motion.div>
        </Wrap>
      </header>

      <section className="py-24 lg:py-32"><Wrap className="grid items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <Reveal><Portrait /></Reveal>
        <Reveal><h2 className="mb-6 text-5xl sm:text-6xl">Experience Built Over Time.</h2>
          <p className="mb-4 max-w-[60ch] leading-8">Paul’s career spans buy-to-let, residential sales, lettings, holiday lets, serviced accommodation and social housing. That range means advice that looks at the whole picture, not just the next transaction.</p>
          <p className="mb-8 max-w-[60ch] leading-8">He is a property professional with iad UK, and a believer that good advice starts with listening.</p>
          <Btn to="/about">Read More About Paul</Btn></Reveal>
      </Wrap></section>

      <section className="bg-char py-20 text-ivory"><Wrap>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => <div key={s.label} className="border-l border-bronze pl-5">
            <b className="block font-serif text-5xl font-medium sm:text-7xl"><Counter {...s} /></b><span className="text-sm text-grey">{s.label}</span></div>)}
        </div>
        <p className="mt-10 text-xs text-grey">Awaiting Paul’s confirmation before publishing. Edit these in src/data/site.js.</p>
      </Wrap></section>

      <section className="py-24 lg:py-32"><Wrap>
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6"><h2 className="text-5xl sm:text-6xl">Property, from every angle.</h2><Btn to="/services">All Services</Btn></Reveal>
        <div className="grid gap-5 lg:grid-cols-6">
          {services.map((s, n) => <Reveal key={s.id} className={n === 0 ? 'lg:col-span-3 lg:row-span-2' : 'lg:col-span-3'}>
            <Link to="/services" className={`relative block text-white ${n === 0 ? 'h-[420px] lg:h-full lg:min-h-[640px]' : 'h-[320px]'}`}>
              <Zoom className="absolute inset-0"><Img src={s.image} seed={s.seed} w={1200} h={900} alt="" /></Zoom>
              <div className="absolute inset-0 bg-gradient-to-t from-char/85 to-transparent" />
              <div className="absolute bottom-0 p-6"><h3 className="text-3xl">{s.title}</h3><p className="mt-2 max-w-md text-sm text-champ">{s.text}</p></div></Link></Reveal>)}
        </div>
      </Wrap></section>

      <section className="bg-champ py-24 lg:py-32"><Wrap>
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6"><h2 className="text-5xl sm:text-6xl">Featured properties.</h2><Btn to="/properties">View All</Btn></Reveal>
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <PropertyCard p={properties[0]} ratio="aspect-[16/10]" className="lg:col-span-7" />
          <PropertyCard p={properties[1]} className="lg:col-span-5" />
          <PropertyCard p={properties[2]} className="lg:col-span-4" />
          <PropertyCard p={properties[3]} ratio="aspect-[16/10]" className="lg:col-span-8" />
        </div>
        <p className="mt-8 text-xs text-char/60">Sample listings with random images and invented details.</p>
      </Wrap></section>

      <section className="py-24 lg:py-32"><Wrap>
        <div key={i} className="min-h-[300px] max-w-4xl">
          <motion.blockquote initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="relative pt-14 font-serif text-3xl italic leading-tight sm:text-5xl">
            <span className="absolute -top-4 -left-1 font-serif text-9xl not-italic text-bronze" aria-hidden>“</span>{t.quote}
            <cite className="mt-6 block font-sans text-sm not-italic text-char/65">{t.name}, {t.category}</cite></motion.blockquote></div>
        <div className="mt-8 flex gap-2">{testimonials.map((_, n) => <button key={n} aria-label={`Review ${n + 1}`} onClick={() => setI(n)} className={`h-[3px] w-10 ${n === i ? 'bg-bronze' : 'bg-grey'}`} />)}</div>
        <div className="mt-8"><Btn to="/testimonials">All Reviews</Btn></div>
      </Wrap></section>

      <section className="relative flex min-h-[80vh] items-center text-white">
        <div className="absolute inset-0"><Img seed="modern-architecture" alt="" /></div><div className="absolute inset-0 bg-char/50" />
        <Wrap className="relative"><Reveal><h2 className="mb-8 max-w-[14ch] text-6xl sm:text-8xl">Your Next Property Chapter Starts Here.</h2><Btn to="/contact" solid>Contact Paul</Btn></Reveal></Wrap>
      </section>
    </>
  )
}
