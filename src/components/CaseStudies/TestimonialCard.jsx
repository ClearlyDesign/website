import Image from "next/image"

export default function TestimonialCard({ quote, author, title, category, avatar }) {
  return (
    <section className="my-16 md:my-24">
      <figure className="bg-gray-50 border border-gray-200/50 flex flex-col gap-6 rounded-2xl px-6 py-10 text-center md:gap-8 md:px-8 md:py-12 lg:p-14 not-prose">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-blue-600">{category}</span>
          <blockquote className="text-xl/7 text-gray-900 tracking-tight md:text-2xl/8 not-prose">
            <p dangerouslySetInnerHTML={{ __html: `“${quote}”` }} />
          </blockquote>
        </div>
        <figcaption className="flex justify-center">
          <div className="flex items-center gap-4">
            <Image
              src={avatar}
              alt={author}
              width={52}
              height={52}
              className="rounded-full bg-gray-100 border border-gray-300/50"
            />
            <div className="flex flex-col">
              <p className="text-md not-prose font-medium text-left text-gray-900">
                {author}
              </p>
              <cite className="text-sm not-prose text-gray-600 not-italic">{title}</cite>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
