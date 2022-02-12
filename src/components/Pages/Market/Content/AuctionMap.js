import React from 'react'
import { Market } from '../../../../DummyData'
import AuctionsTab from './AuctionsTab'

const AuctionMap = () => {
  return (
    <>
      {Market.map((u) => (
            <AuctionsTab key={u.id} user={u} />
            ))}
    </>
  )
}

export default AuctionMap
