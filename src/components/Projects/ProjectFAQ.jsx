import { Disclosure } from "@headlessui/react"
import {
  MinusCircleIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline"

export default function ProjectFAQ({ faqs, title = "Frequently asked questions" }) {
  if (!faqs || faqs.length === 0) return null

  return (
    <>
      <h2 className="flex items-center gap-3">
        <span className="flex items-center gap-3">
          <span className="icon-container gray">
            <QuestionMarkCircleIcon />
          </span>
        </span>
        <span className="hidden sm:inline">{title}</span>
        <span className="sm:hidden">FAQ</span>
      </h2>
      <dl className="mt-16 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <Disclosure
            key={faq.question}
            as="div"
            className="pt-2 pb-7 first:pt-0 last:pb-0"
          >
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="">{faq.question}</span>
                    <span className="flex items-center h-8">
                      {open ? (
                        <MinusCircleIcon
                          className="h-6 w-6 text-gray-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusCircleIcon
                          className="h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="div" className="">
                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </>
  )
}
