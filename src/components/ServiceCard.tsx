import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div
      className="
        rounded-2xl border border-gray-200 bg-white 
        dark:bg-[#1A1A1A] dark:border-gray-700
        p-6 shadow-sm hover:shadow-md transition-all duration-300
        hover:-translate-y-1
      "
    >
      <div
        className="
          mb-4 inline-flex h-10 w-10 items-center justify-center
          rounded-lg bg-amber-50 text-amber-700
          dark:bg-[#2a2a2a] dark:text-[#C6A45B]
        "
      >
        {icon}
      </div>

      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}
