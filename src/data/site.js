// ALL CONTENT LIVES HERE. Edit freely. Items with confirmed:false are awaiting Paul's confirmation.
// Images: seeds below use random stock photos (picsum.photos). Swap img() in components/ui.jsx
// or put real files in /public.
export const contact = { phone: '07782 393720', email: 'paul.langshaw@iad.uk.com', company: 'iad UK' }

export const stats = [
  { to: 20, suffix: '+', label: 'Years in property', confirmed: false },
  { to: 5, prefix: '£', suffix: 'M+', label: 'Property portfolio', confirmed: false },
  { to: 50, suffix: '+', label: 'Properties purchased', confirmed: false },
  { to: 50, suffix: '+', label: 'Properties sold', confirmed: false },
]

// Services: put photos in public/images/services/ and set image: '/images/services/your-file.jpg'.
// Leave image empty ('') to keep the random placeholder photo.
export const services = [
  { id: 'selling', title: 'Selling Property', image: '/images/services/image1.png', seed: 'sell-house', text: 'Present, price and market your home to reach the right buyers, with clear communication at every step.' },
  { id: 'buying', title: 'Buying Property', image: '/images/services/image2.png', seed: 'buy-home', text: 'Find the right home with honest guidance on value, location and negotiation.' },
  { id: 'investment', title: 'Property Investment', image: '/images/services/image3.png', seed: 'invest-flat', text: 'Build or refine a portfolio using lessons from buy-to-let, holiday lets and serviced accommodation.' },
  { id: 'landlord', title: 'Landlord & Lettings Support', image: '/images/services/image4.png', seed: 'lettings-room', text: 'Practical help with letting, compliance, tenants and making the most of your rental.' },
  { id: 'advice', title: 'Property Advice', image: '/images/services/image5.png', seed: 'advice-desk', text: 'A clear, independent second opinion before you make a significant property decision.' },
]

// Properties: put photos in public/images/properties/ and set image: '/images/properties/your-file.jpg'
// (used on cards and the top of the detail page). gallery: ['/images/properties/a.jpg', ...] sets the
// detail-page photos. Leave them empty to keep the random placeholder photos.
export const properties = [
  { id: 'cotswold-manor', title: 'The Old Rectory', location: 'Cotswolds, Gloucestershire', mode: 'buy', price: 1250000, type: 'Country house', beds: 5, baths: 4, status: 'For sale', image: '/images/properties/p1.jpg', gallery: [], seed: 'cotswold', desc: 'A beautifully proportioned stone house set in mature gardens, with generous reception rooms and far-reaching countryside views.', features: ['Two acres of gardens', 'Period features throughout', 'Double garage', 'Open-plan kitchen'] },
  { id: 'chelsea-townhouse', title: 'Cadogan Mews', location: 'Chelsea, London', mode: 'buy', price: 2100000, type: 'Townhouse', beds: 3, baths: 3, status: 'Under offer', image: '/images/properties/p2.jpg', gallery: [], seed: 'chelsea', desc: 'A refined townhouse arranged over four floors, finished to a high specification in a quiet mews.', features: ['Roof terrace', 'Private parking', 'Underfloor heating', 'Lift access'] },
  { id: 'harrogate-detached', title: 'Beech House', location: 'Harrogate, North Yorkshire', mode: 'buy', price: 685000, type: 'Detached', beds: 4, baths: 2, status: 'For sale', image: '/images/properties/p3.jpg', gallery: [], seed: 'harrogate', desc: 'A light-filled family home close to excellent schools and the town centre.', features: ['South-facing garden', 'Home office', 'Garage', 'EPC rated B'] },
  { id: 'cheshire-villa', title: 'The Glass House', location: 'Cheshire', mode: 'buy', price: 1495000, type: 'Modern villa', beds: 6, baths: 5, status: 'For sale', image: '/images/properties/p4.jpg', gallery: [], seed: 'villa', desc: 'An architect-designed villa with full-height glazing, a cinema room and landscaped grounds.', features: ['Cinema room', 'Heated pool', 'Smart home system', 'Gated entrance'] },
  { id: 'manchester-apartment', title: 'Deansgate Penthouse', location: 'Manchester', mode: 'rent', price: 2450, type: 'Apartment', beds: 2, baths: 2, status: 'To let', image: '/images/properties/p5.jpg', gallery: [], seed: 'penthouse', desc: 'A luxury penthouse apartment with wraparound terrace and city skyline views.', features: ['Concierge', 'Secure parking', 'Terrace', 'Furnished option'] },
  { id: 'peak-cottage', title: 'Stonegate Cottage', location: 'Peak District, Derbyshire', mode: 'rent', price: 1650, type: 'Cottage', beds: 3, baths: 1, status: 'To let', image: '/images/properties/p6.jpg', gallery: [], seed: 'cottage', desc: 'A characterful stone cottage with a wood burner, a garden and moorland walks from the door.', features: ['Wood burner', 'Pet friendly', 'Private garden', 'Off-street parking'] }
]

export const testimonials = [
  {
    quote: 'The team provided excellent communication throughout the buying process. They were professional, helpful and always available to answer our questions.',
    name: 'Verified Buyer',
    category: 'Buyer',
    date: 'Add review date',
    source: 'Client feedback — pending verification'
  },
  {
    quote: 'Managing our property was made much easier. The team kept us informed, handled our queries promptly and made the entire process straightforward.',
    name: 'Verified Landlord',
    category: 'Landlord',
    date: 'Add review date',
    source: 'Client feedback — pending verification'
  },
  {
    quote: 'The selling process was handled professionally from start to finish. Communication was clear, and we appreciated the support at every stage.',
    name: 'Verified Seller',
    category: 'Seller',
    date: 'Add review date',
    source: 'Client feedback — pending verification'
  },
];

export const posts = [
  { slug: 'market-update', title: 'The UK property market: what to watch next', date: '10 Nov 2026', category: 'Market updates', seed: 'market', excerpt: 'A plain-English look at the trends that matter to buyers, sellers and landlords.', body: ['Sample article. Replace this text with Paul’s own writing.', 'Each string in this array renders as a paragraph on the article page.'] },
  { slug: 'investment-basics', title: 'Five questions to ask before your first buy-to-let', date: '22 Oct 2026', category: 'Investment advice', seed: 'btl', excerpt: 'Yield, void periods, compliance and exit: the basics that shape a sound purchase.', body: ['Sample article. Replace this text with Paul’s own writing.'] },
  { slug: 'selling-tips', title: 'Preparing your home for sale', date: '3 Oct 2026', category: 'Selling tips', seed: 'stage', excerpt: 'Small changes that help buyers picture themselves in your home.', body: ['Sample article. Replace this text with Paul’s own writing.'] },
  { slug: 'buying-guide', title: 'A first-time buyer’s guide to the process', date: '15 Sep 2026', category: 'Buying guides', seed: 'keys', excerpt: 'From offer to completion, what happens and when.', body: ['Sample article. Replace this text with Paul’s own writing.'] },
  { slug: 'landlord-rules', title: 'Landlord responsibilities, simplified', date: '29 Aug 2026', category: 'Landlord information', seed: 'landlord', excerpt: 'The essentials every landlord should have covered.', body: ['Sample article. Replace this text with Paul’s own writing.'] },
]

// Timeline entries are placeholders awaiting Paul's confirmation.
export const timeline = [
  { year: 'Early career', text: 'Placeholder: first steps in property. Awaiting Paul’s confirmation.' },
  { year: 'Investor years', text: 'Placeholder: building a buy-to-let portfolio. Awaiting Paul’s confirmation.' },
  { year: 'Expanding', text: 'Placeholder: holiday lets, serviced accommodation and social housing. Awaiting Paul’s confirmation.' },
  { year: 'Today', text: 'Property professional with iad UK, advising buyers, sellers and landlords.' },
]
