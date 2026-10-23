import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product/101?name=iPhone&price=79999&color=Black">
        Product
      </Link>
      <Link to="/old-home">Redirect</Link>
    </nav>
  )
}

export default Navbar