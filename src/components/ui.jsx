import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, animate } from 'framer-motion'

// Random stock photos. Change this one function to use your own images.
export const img = (seed, w = 1600, h = 900) => `https://picsum.photos/seed/${seed}/${w}/${h}`

// Pass `src` to use a real image (e.g. '/images/services/selling.jpg'); otherwise a random photo from `seed`.
export const Img = ({ src, seed, w, h, alt = '', className = '', eager }) => (
  <img src={src || img(seed, w, h)}alt={alt} loading={eager ? 'eager' : 'lazy'} className={`h-full w-full object-cover ${className}`} />
)

export const Zoom = ({ children, className = '' }) => (
  <div className={`group overflow-hidden ${className}`}>
    <div className="h-full transition-transform duration-[1200ms] ease-out group-hover:scale-105">{children}</div>
  </div>
)

export const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}>
    {children}
  </motion.div>
)

export function Counter({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{prefix}{n}{suffix}</span>
}

export const Btn = ({ to, href, children, solid, light, className = '' }) => {
  const cls = `inline-block border border-bronze px-7 py-3.5 text-sm font-medium transition-colors duration-300 ${
    solid ? 'bg-bronze text-white hover:bg-white hover:text-char' : `hover:bg-bronze hover:text-white ${light ? 'text-white' : 'text-char'}`} ${className}`
  return href ? <a href={href} className={cls}>{children}</a> : <Link to={to} className={cls}>{children}</Link>
}

export const Wrap = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
)

export const PageHero = ({ title, sub, seed }) => (
  <header className="relative flex min-h-[60vh] items-end text-white">
    <div className="absolute inset-0"><Img seed={seed} eager alt="" /></div>
    <div className="absolute inset-0 bg-gradient-to-t from-char/85 via-char/30 to-char/50" />
    <Wrap className="relative pb-14 pt-40">
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-[16ch] text-5xl sm:text-7xl">{title}</motion.h1>
      {sub && <p className="mt-5 max-w-xl text-lg text-champ">{sub}</p>}
    </Wrap>
  </header>
)

// Frontend-only: opens the visitor's email app with the message filled in.
export function EnquiryForm({ types = ['General enquiry', 'Buying', 'Selling', 'Investment', 'Lettings', 'Advice'], extra = '' }) {
  const [sent, setSent] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\n${extra}\n\n${f.message}`
    window.location.href = `mailto:paul.langshaw@iad.uk.com?subject=${encodeURIComponent(f.type)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  const field = 'w-full border-b border-grey bg-transparent py-3 outline-none focus:border-bronze'
  return (
    <form onSubmit={submit} className="grid gap-6">
      <label className="grid gap-1 text-sm">Enquiry type
        <select name="type" className={field}>{types.map((t) => <option key={t}>{t}</option>)}</select></label>
      <label className="grid gap-1 text-sm">Name<input required name="name" className={field} /></label>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">Email<input required type="email" name="email" className={field} /></label>
        <label className="grid gap-1 text-sm">Phone<input name="phone" type="tel" className={field} /></label>
      </div>
      <label className="grid gap-1 text-sm">Message<textarea required name="message" rows={4} className={field} /></label>
      <div><button className="border border-bronze bg-bronze px-7 py-3.5 text-sm font-medium text-white transition hover:bg-char">Send enquiry</button>
        {sent && <p className="mt-3 text-sm text-bronze">Your email app should open with the message ready to send.</p>}</div>
    </form>
  )
}

export const PropertyCard = ({ p, ratio = 'aspect-[4/5]', className = '' }) => (
  <Reveal className={className}>
    <Link to={`/properties/${p.id}`} className="block">
      <Zoom className={`${ratio} relative`}>
        <Img src={p.image} seed={p.seed} w={1400} h={1000} alt={`${p.title}, ${p.location}`} />
        <span className="absolute left-4 top-4 bg-char/80 px-3 py-1 text-xs text-white">{p.status}</span>
      </Zoom>
      <div className="flex flex-wrap items-baseline justify-between gap-2 pt-4">
        <div><h3 className="text-3xl">{p.location}</h3>
          <p className="text-sm text-char/65">{p.type} · {p.beds} beds · {p.baths} baths</p></div>
        <p className="font-serif text-2xl text-bronze">£{p.price.toLocaleString('en-GB')}{p.mode === 'rent' ? ' pcm' : ''}</p>
      </div>
    </Link>
  </Reveal>
)
