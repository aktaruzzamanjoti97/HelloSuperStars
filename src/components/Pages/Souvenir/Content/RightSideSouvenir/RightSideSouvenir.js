import React from 'react';
import ChartCompo from '../SouvenirSignature/ChartCompo';
import BiddingHistory from './BiddingHistory/BiddingHistory';
import RemainingTimeSouvenir from './RemainingTimeSouvenir/RemainingTimeSouvenir';
import SuperstarCard from './SuperstarCard/SuperstarCard';

const RightSideSouvenir = ({data}) => {

    return (
        <div>
            <RemainingTimeSouvenir AuctionData={data}/>
            <ChartCompo AuctionData={data}/>
            <SuperstarCard AuctionData={data}/>
            <BiddingHistory AuctionData={data}/>
        </div>
    );
};

export default RightSideSouvenir;