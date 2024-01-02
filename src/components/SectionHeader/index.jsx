const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center max-w-[900px] mx-auto space-y-2">
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <p className="text-gray-500 text-xl">{description}</p>
    </div>
  )
}
export default SectionHeader
