import React from 'react';
import ChartCompo from '../SouvenirSignature/ChartCompo';
import BiddingHistory from './BiddingHistory/BiddingHistory';
import SuperstarCard from './SuperstarCard/SuperstarCard';

const RightSideSouvenirWithoutTime = () => {

    return (
        <div className=" mt-4">
            <ChartCompo />
            <SuperstarCard />
            <BiddingHistory />
        </div>
    );
};

export default RightSideSouvenirWithoutTime;