import { PageHero, Reveal, Btn, Wrap, EnquiryForm } from '../components/ui.jsx'
import { contact } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <PageHero title="Contact Paul." sub="Tell him what you’re planning and he’ll get back to you." seed="front-door-home" />
      <section className="py-24"><Wrap className="grid gap-16 lg:grid-cols-[2fr_3fr]">
        <Reveal><h2 className="mb-6 text-4xl">Get in touch</h2>
          <p className="mb-1">{contact.phone}</p><p className="mb-8">{contact.email}</p>
          <div className="flex flex-wrap gap-3"><Btn href={`tel:${contact.phone.replace(/\s/g, '')}`} solid>Call Paul</Btn><Btn href={`mailto:${contact.email}`}>Email Paul</Btn></div></Reveal>
        <Reveal><EnquiryForm /></Reveal>
      </Wrap></section>
    </>
  )
}
