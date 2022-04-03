import React, { useEffect, useState } from 'react'
import { Market } from '../../../../DummyData'
import AuctionsTab from './AuctionsTab'
import axios from 'axios';

const AuctionMap = () => {


  const [product,setProduct] = useState([]);

    useEffect(()=>{
        axios.get('/api/auction-product/all').then((res)=>{
            if(res.data.status === 200){
                setProduct(res.data.product);
                console.log("From test",res.data.product)
            }
        })
    },[])


  return (
    <>
      {product.map((u) => (
            <AuctionsTab key={u.id} user={u} />
            ))}
    </>
  )
}

export default AuctionMap
