import { useState } from "react";
import "./index.css";
const data =[
  {
  ProductImage:"data:image/jpeg;base64,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",
  ProductName :"Dell",
  ProductPrice:50000,
  Rating:9.2
},
{
  ProductImage:"https://m.media-amazon.com/images/I/716KdetNajL._AC_UF1000,1000_QL80_.jpg",
  ProductName :"hp",
  ProductPrice:55000,
  Rating:9.3
},
{
  ProductImage:"https://5.imimg.com/data5/DE/DA/QN/SELLER-32244351/lenovo-laptop.jpg",
  ProductName :"lenovo",
  ProductPrice:45000,
  Rating:9.0
},
{
  ProductImage:"https://m.media-amazon.com/images/I/41ZJJLODSAL.jpg",
  ProductName :"apple",
  ProductPrice:75000,
  Rating:9.5
},
{
  ProductImage:"https://cdn1.smartprix.com/rx-iOxCmNtRN-w1200-h1200/OxCmNtRN.jpg",
  ProductName :"Acer",
  ProductPrice:33000,
  Rating:8.8
},
{
  ProductImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uWvhKnbq20W2tBJ--tTcA0AeJ10FLjnHSg&usqp=CAU",
  ProductName :"Samsung",
  ProductPrice:32500,
  Rating:8.5
},
{
  ProductImage:"https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UF1000,1000_QL80_.jpg",
  ProductName :"Asus",
  ProductPrice:35000,
  Rating:8.9
},
{
  ProductImage:"https://www.laptopcloseout.ca/media/catalog/product/cache/1610c96c2e926a963a728685453084df/2/3/230936748.jpg",
  ProductName :"Toshiba",
  ProductPrice:25000,
  Rating:8
}
];

function App() {
  const[cartCount, setCount] = useState(0);
      // setCount(cartCount+1)
      // setCount(cartCount-1)
  return(
    <div className="App">
    
      <div>
        <nav className="nave">
        <h4>Start Bootstrap</h4>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Shop</h4>
        <h3 className="cart">Cart {cartCount}</h3>
        
        </nav>
        {/* <nav><b>Home</b></nav> */}
      </div>
      <div className="product">
        {data.map((prop,idx)=>(
    <ProductCart
    key={prop.idx}
    ProductImage={prop.ProductImage}
    ProductName={prop.ProductName}
    ProductPrice={prop.ProductPrice}
    Rating={prop.Rating}
    cartCount={cartCount}
    setCount ={setCount}
    />
    ))}
    </div>
    </div>
  );
}
  
export default App;

function ProductCart({ProductImage,ProductName,
  ProductPrice,Rating,cartCount,setCount}){
  const[show, setshow] = useState(true)
  const handleAddToCart=()=>{
    setshow(!show);
    setCount(cartCount + 1);
  };
  const handleRemoveCart=()=>{
    setshow(!show);
    setCount(cartCount-1);
  };
  return (
    <div className="card">
      <img
      src={ProductImage}
      alt="ProductImage"
      />
    <div>
      <p><b>{ProductName}</b></p>
    <p>Rs.{ProductPrice}</p>
    <p>{Rating}</p>
   </div>
   
   {show ? (
   <button style={{backgroundColor:"green",border:"none",color:"white"}} 
   onClick={handleAddToCart}>Add to cart</button>
   ):(
    <button style={{backgroundColor:"green",border:"none",color:"white"}} 
    onClick={handleRemoveCart}>Remove cart</button>)}
    
    </div>
  );
}

