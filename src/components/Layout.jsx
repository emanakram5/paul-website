import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Wrap } from './ui.jsx'
import { contact } from '../data/site.js'

const links = [['/', 'Home'], ['/about', 'About'], ['/properties', 'Properties'], ['/services', 'Services'], ['/testimonials', 'Reviews'], ['/insights', 'Insights'], ['/contact', 'Contact']]

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [pathname])
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-30 py-4 text-white transition-colors ${solid || open ? 'bg-char/90 backdrop-blur' : ''}`}>
        <Wrap className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-wide">Paul Langshaw</Link>
          <button className="border border-white/50 px-3 py-1 text-sm lg:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
          <div className="hidden gap-8 text-sm lg:flex">
            {links.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `transition hover:text-[#d8c3a5] ${isActive ? 'text-[#d8c3a5]' : 'text-white/90'}`}>{l}</NavLink>)}
          </div>
        </Wrap>
        {open && <Wrap className="flex flex-col gap-4 pb-4 pt-6 lg:hidden">{links.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</Wrap>}
      </nav>
      <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>{children}</motion.main>
      <footer className="bg-char py-12 text-ivory">
        <Wrap className="flex flex-wrap justify-between gap-8">
          <div><p className="font-serif text-3xl">Paul Langshaw</p><p className="text-sm text-grey">Property professional, {contact.company}</p></div>
          <div className="text-sm leading-7"><a className="text-[#d8c3a5]" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a><br /><a className="text-[#d8c3a5]" href={`mailto:${contact.email}`}>{contact.email}</a></div>
          <div className="text-sm leading-7 text-grey">{links.slice(1).map(([to, l]) => <Link key={to} to={to} className="mr-4 hover:text-white">{l}</Link>)}</div>
        </Wrap>
      </footer>
    </>
  )
}
