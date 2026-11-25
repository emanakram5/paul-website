import { useState } from 'react'
// Put Paul's photo at /public/paul.jpg. Until then a neutral placeholder shows (never a random person).
export default function Portrait({ className = 'aspect-[4/5]' }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={`relative overflow-hidden bg-champ ${className}`}>
      {ok ? <img src="/images/paul.jpg" alt="Paul Langshaw" onError={() => setOk(false)} className="h-full w-full object-cover" />
        : <div className="flex h-full items-center justify-center p-6 text-center text-sm text-char/60">Add Paul’s photo as public/paul.jpg</div>}
    </div>
  )
}
