import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to Home Page!</p>
      <Link to="/user/101?name=Salil&age=20&city=Bhubaneswar">
        Go to User Page
      </Link>
    </div>
  )
}

export default Home