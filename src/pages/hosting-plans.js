import Footer from "@/components/Footer"
import PageHeader from "@/sections/PageHeader"

const Home = () => {
  return (
    <div>
      <PageHeader
        title="Hosting"
        description={`Select a hosting plan, or <a href="https://billing.stripe.com/p/login/4gw2a08DS97udagbII" target="_blank" class="border-b-2 border-gray-700 hover:text-white hover:border-lime-400">manage</a> an existing plan.`}
      />
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1P7JBSGnwWDJd4RQ1u5KNsGb"
        publishable-key="pk_live_51IimEYGnwWDJd4RQUJXl76fyfEPQmnbV69RZ1nfhLgW9eLyHq67CXwAr5ZWLvBNPei1rJaOJhYwJLQh267HUtopE00Au6M9SWz"
      ></stripe-pricing-table>
      <div className="h-24 bg-[#000034]"></div>
      <Footer />
    </div>
  )
}
export default Home
