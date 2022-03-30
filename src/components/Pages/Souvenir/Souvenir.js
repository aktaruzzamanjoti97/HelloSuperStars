import React, { useEffect, useState } from 'react'
import Navigation from '../../Header/Navigation';
import RightSideSouvenir from './Content/RightSideSouvenir/RightSideSouvenir';
import souvenirImage from '../../../images/Souvenir/souvenir.png';
import CR7Souvenir from './Content/CR7Souvenir';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Souvenir = (props) => {
  
  
  const [AuctionProduct,setProduct] = useState([]);

  useEffect(()=>{
    const product_id = props.match.params.product_id;

    axios.get(`/api/user/getStarAuctionProduct/${product_id}`).then((res)=>{
        if(res.data.status === 200){
            setProduct(res.data.product);
            console.log("From star Data",res.data.product)
        }
    })
  },[props.match.params.product_id])

return (
  
<>
  <Navigation />
  
  <div className="container mt-3">
    {AuctionProduct.map((product)=>(
      <>
        <img src={`http://localhost:8000/${product.banner}`} className="img-fluid w-100 CR7Cover coverHeight " alt="" />
        <div className="row justify-content-between">

          <CR7Souvenir key={product.id} data={product}/>
          
          <div className="col-md-4">
            <RightSideSouvenir key={product.id} data={product}/>
          </div>

        </div>
    </>
    ))}
  </div>

</>
)
}

export default Souvenir