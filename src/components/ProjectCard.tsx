interface ProjectCardProps {
  name: string
  type: string
  location: string
}

export default function ProjectCard({ name, type, location }: ProjectCardProps) {
  return (
    <div
      className="
        overflow-hidden rounded-2xl border border-gray-200 bg-white
        dark:bg-[#1A1A1A] dark:border-gray-700
        shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1
      "
    >
      <div
        className="
          relative h-44 w-full 
          bg-[url('/assets/project-placeholder.jpg')] bg-cover bg-center 
          dark:opacity-90
        "
      >
        <div
          className="
            absolute left-3 top-3 rounded bg-black/60 
            px-2 py-1 text-xs font-medium text-white
          "
        >
          Coming Soon
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{type}</p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">{location}</p>
      </div>
    </div>
  )
}
