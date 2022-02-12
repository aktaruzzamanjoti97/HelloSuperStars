import React from 'react'
import { Market } from '../../../../DummyData'
import MarketPlaceTab from './MarketPlaceTab'

const MarketMap = () => {

return (
<>

  {Market.map((u) => (
  <MarketPlaceTab key={u.id} user={u} />
  ))}
</>
)
}

export default MarketMap