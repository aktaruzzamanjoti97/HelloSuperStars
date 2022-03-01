import React from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./Right/LiveNow/LiveContent.css";
import './RightSkeleton.css';

const RightSideSkeliton = () => {
  return (
      <>

        <SkeletonTheme baseColor="#202020" highlightColor="#444"> 

          <div className="bg-dark round my-3 sketon-container">
            
            <Skeleton width={100} className="mx-3 mt-3" height={19}/>

            <div className="d-flex p-2">
              <Skeleton className="m-2 sklion-item"/>
              <Skeleton className="m-2 sklion-item"/>
              <Skeleton className="m-2 sklion-button" />
            </div>

          </div>

        </SkeletonTheme>
  </>
  )
}

export default RightSideSkeliton
