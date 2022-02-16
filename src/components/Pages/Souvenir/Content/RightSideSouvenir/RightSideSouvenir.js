import React from 'react';
import ChartCompo from '../SouvenirSignature/ChartCompo';
import BiddingHistory from './BiddingHistory/BiddingHistory';
import RemainingTimeSouvenir from './RemainingTimeSouvenir/RemainingTimeSouvenir';
import SuperstarCard from './SuperstarCard/SuperstarCard';

const RightSideSouvenir = () => {

    return (
        <div>
            <RemainingTimeSouvenir />
            <ChartCompo />
            <SuperstarCard />
            <BiddingHistory />
        </div>
    );
};

export default RightSideSouvenir;