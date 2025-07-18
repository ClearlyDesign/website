import Header from "../../components/Header"

const PageHeader = ({ title, description }) => {
  return (
    <div className="row-wrapper bg-gradient-to-b from-indigo-950 to-[#000034]">
      <div className="row-inner">
        <Header linkFromExternal={true} />
        <div className="pt-12 pb-20 text-center">
          <h1 className="text-white">{title}</h1>
          <p
            className="text-2xl text-gray-400 mt-5"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  )
}
export default PageHeader
