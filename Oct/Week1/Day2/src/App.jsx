import About from './About'
import './App.css'
import Home from './Home'
import Product from './Product'

function App() {

  let a=10;

  return (
    <div>
      Hello

      <div>
        Welcome
      </div>

      <Home v={a}  str={"this is my string"} arr={[1,2,3]} obj={{name:'xyz',age:40}}/>
      <About/>

      <Product
  product_title="INFINIX GT 30 5G"
  description="This is a mobile phone"
  price={21000}
/>

<Product
  product_title="VIVO Y100"
  description="This is a mobile phone"
  price={20000}
/>

    </div>
  )
}

export default App;