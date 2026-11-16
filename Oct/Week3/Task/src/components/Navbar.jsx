import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user/101?name=Salil&age=20&city=Bhubaneswar">User</Link>
    </nav>
  )
}

export default Navbar