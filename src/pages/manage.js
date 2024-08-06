import { ArrowUpRightIcon } from "@heroicons/react/16/solid"

const Manage = () => {
  return (
    <div className="grid place-content-center h-screen">
      <a
        href="https://billing.stripe.com/p/login/4gw2a08DS97udagbII"
        className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 inline-flex items-center"
      >
        Manage Clearly Design Subscription{" "}
        <ArrowUpRightIcon className="w-5 h-5 text-green-300 ml-1" />
      </a>
    </div>
  )
}
export default Manage

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://billing.stripe.com/p/login/4gw2a08DS97udagbII",
      permanent: false,
    },
  }
}
