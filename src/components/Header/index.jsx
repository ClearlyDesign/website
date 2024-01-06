import Nav from "../Nav"
import Logo from "../Logo"
import Link from "next/link"

const Header = ({ linkFromExternal = false }) => {
  return (
    <header>
      <div className="row-inner flex justify-between py-6">
        <Link href="/">
          <Logo />
        </Link>
        <Nav linkFromExternal={linkFromExternal} />
      </div>
    </header>
  )
}
export default Header
