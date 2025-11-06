import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<string>('')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('Thanks! We will get back to you soon.')
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
          <input className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-600 focus:outline-none" required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-600 focus:outline-none" required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
          <input className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-600 focus:outline-none" required />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
        <textarea rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-amber-600 focus:outline-none" required />
      </div>
      <button type="submit" className="rounded-md bg-amber-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-700">
        Send Message
      </button>
      {status && <p className="text-sm text-green-700">{status}</p>}
    </form>
  )
}


