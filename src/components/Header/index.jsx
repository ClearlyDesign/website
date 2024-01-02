import Nav from "../Nav"
import Logo from "../Logo"
import Link from "next/link"

const Header = () => {
  return (
    <header className="row-wrapper">
      <div className="row-inner flex justify-between py-6">
        <Link href="/">
          <Logo />
        </Link>
        <Nav />
      </div>
    </header>
  )
}
export default Header
