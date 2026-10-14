import Card from './Card'
import Home from './Home'
import About from './About'

function App() {
  let products = [
    {
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      title: 'Headphones',
      desc: 'Wireless headphones with clear sound'
    },
    {
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      title: 'Smart Watch',
      desc: 'Smart watch with fitness features'
    },
    {
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      title: 'Sports Shoes',
      desc: 'Comfortable shoes for everyday use'
    }
  ]

  return (
    <div>
      <Home />
      <About />

      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  )
}

export default App