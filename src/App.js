import './App.css';
import { useSelector } from "react-redux"

function App() {
  const product = useSelector((state) => state.allProducts.products)

  console.log(product)
  return (
    <div className="App">
      {product.map((productData) => (
        <div key={productData.id}>
          <h1>{productData.title}</h1>
          <p>{productData.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
