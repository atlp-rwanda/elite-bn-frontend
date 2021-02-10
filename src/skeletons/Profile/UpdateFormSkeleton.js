import React from 'react';
import Skeleton from 'react-loading-skeleton';

const UpdateFormSkeleton = () => {
  return (
    <div className="grid grid-cols-1 items-center  ">
      <div className="bg-white w-s rounded-sm  m-12 flex flex-col p-4 md:p-12 mb-6 ">
        <Skeleton width={150} height={40} />
        <div className="w-full  flex mt-5 ">
          <div>
            <Skeleton width={400} height={45} />
          </div>
          <div className="ml-8">
            <Skeleton width={400} height={45} />
          </div>
        </div>
        <div className="w-full  flex mt-10 ">
          <div>
            <Skeleton width={400} height={45} />
          </div>
          <div className="ml-8">
            <Skeleton width={400} height={45} />
          </div>
        </div>
        <div className="controlInput w-full mt-10 mb-6 ">
          <Skeleton width={835} height={45} />
        </div>
        <Skeleton width={150} height={40} />
      </div>
    </div>
  );
};

export default UpdateFormSkeleton;
