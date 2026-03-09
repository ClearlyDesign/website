import Head from "next/head"

/**
 * Renders a JSON-LD script tag for schema.org structured data.
 * @param {object} data - Schema object (will be JSON.stringified)
 */
export default function JsonLd({ data }) {
  if (!data) return null
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  )
}
