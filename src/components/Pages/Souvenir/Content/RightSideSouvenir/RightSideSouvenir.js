import React, { useEffect, useState } from 'react';
import ChartCompo from '../SouvenirSignature/ChartCompo';
import BiddingHistory from './BiddingHistory/BiddingHistory';
import SuperstarCard from './SuperstarCard/SuperstarCard';

const RightSideSouvenir = () => {

    return (
        <div>
            <ChartCompo />
            <SuperstarCard />
            <BiddingHistory />
        </div>
    );
};

export default RightSideSouvenir;