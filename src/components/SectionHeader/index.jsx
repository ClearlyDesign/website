const SectionHeader = ({ title, description, titleStyles }) => {
  return (
    <div className="text-center max-w-[900px] mx-auto space-y-2 mb-16">
      <h2 dangerouslySetInnerHTML={{ __html: title }} className={titleStyles} />
      <p className="text-gray-500 text-xl">{description}</p>
    </div>
  )
}
export default SectionHeader
