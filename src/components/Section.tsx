import { PropsWithChildren } from 'react'

interface SectionProps extends PropsWithChildren {
  id?: string
  title?: string
  subtitle?: string
  className?: string
}

export default function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}


