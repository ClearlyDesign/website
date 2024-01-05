const SectionHeader = ({
  title,
  description,
  titleStyles,
  descriptionStyles = "text-gray-500 text-xl",
}) => {
  return (
    <div className="text-center max-w-[900px] mx-auto space-y-2 mb-16">
      <h2 dangerouslySetInnerHTML={{ __html: title }} className={titleStyles} />
      <p className={descriptionStyles}>{description}</p>
    </div>
  )
}
export default SectionHeader
