import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonArticle = ({ theme }) => {

    const themeClass = theme || 'light'

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <div className="skeleton-profile">
                    <div>
                        <SkeletonElement type='avatar' />
                    </div>

                    <div>
                        <SkeletonElement type='title' />
                        <SkeletonElement type='time' />
                    </div>
                </div>
                <div>
                    <SkeletonElement type='text' />
                    <SkeletonElement type='text' />
                    <SkeletonElement type='thumbnail' />
                </div>

                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="d-flex col-md-4">
                        <SkeletonElement  type='like' />
                        <SkeletonElement  type='like' />
                        <SkeletonElement  type='like' />

                    </div>
                    <div className="col-md-4"></div>
                </div>
                {/* <SkeletonElement type='title'/>
                <SkeletonElement type='text'/>
                <SkeletonElement type='title'/>
                <SkeletonElement type='title'/> */}
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonArticle;