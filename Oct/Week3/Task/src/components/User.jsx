import { useParams, useSearchParams } from 'react-router-dom'

function User() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()

  return (
    <div>
      <h2>User Page</h2>
      <p>User ID: {id}</p>

      <h3>Query Values</h3>

      {Array.from(searchParams.entries()).map(([key, value]) => (
        <p key={key}>{key}: {value}</p>
      ))}
    </div>
  )
}

export default User