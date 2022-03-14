import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Market } from '../../../../DummyData'
import MarketPlaceTab from './MarketPlaceTab'

const MarketMap = () => {
  const [data, setMarketplace] = useState([]);
  useEffect(() => {
    axios.get('/api/user/marketplace/all').then((res) => {
      if (res.status === 200) {
        setMarketplace(res.data.data);
        console.log('data ',res.data.data);
      }
    });

  }, []);

return (
<>

  {data.map((u) => (
  <MarketPlaceTab key={u.id} user={u} />
  ))}
</>
)
}

export default MarketMap