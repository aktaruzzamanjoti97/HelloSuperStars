import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const LoadingSkeleton = () => {
  return (
      <>
          {[1, 2].map(data =>
            
            
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="col-md-6 mb-4 ">
              <div className="rounded" >
              <Skeleton width="100%" height={200}/>

                  <div className="bg-dark py-3 px-2">
               
                      <Skeleton width="50%" height={30}/>
                      <Skeleton width="70%" className='' height={20}/>
                               
                </div>
              </div>

          </div>
        </SkeletonTheme>
            
            )}
    </>
  )
}

export default LoadingSkeleton
