import React ,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Productsfetch } from '../features/productsSlice'
import { addtoCart } from '../features/cartSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {iteams,loading}= useSelector(state=>state.products)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  useEffect(() => {
    dispatch(Productsfetch())
  }, []);

  const handleaddToCart=(product)=>{
    dispatch(addtoCart(product))
      navigate("/cart")   
  }
  
  return (
    <div className='home-container'>
      {loading? <p>loading....</p>:<>
        <h2>New Arrivals</h2>
        <div className="products">
        {iteams?.map(product=><div key={product.id} className='product'>
          <h3>{product.name}</h3>
          <img src={product.image} alt="product" />
          <div className="details">
            <span>{product.desc}</span>
            <span className='price'>₹{product.price}</span>
          </div>
          <div>
          <button onClick={()=>handleaddToCart(product)}>Add To Cart</button>
          </div>
         
        </div>)}
        </div>        
      </>
      }
      
    </div>
  )
}

export default Home
