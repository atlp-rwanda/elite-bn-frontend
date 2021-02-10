import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ProfileSkeleton = () => {
  return (
    <div className="col-start-3    row-start-2  col-end-13 p-4 md:p-12">
      <div className="card bg-white w-full rounded-sm items-center flex flex-col">
        <div className="imgs flex flex-col w-full items-center mb-4  ">
          <div className=" hidden md:flex">
            <Skeleton width={952} height={310} className="hidden md:block" />
          </div>
          <div>
            <Skeleton circle width={100} height={100} />
          </div>
        </div>
        <div className="info items-center ml-1  flex  flex-col">
          <Skeleton animation="wave" variant="text" width={100} height={30} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-7 justify-between  w-full items-center ">
          <div className="info mt-1 md:mt-4   items-center flex flex-col">
            <div className="flex-col flex">
              <Skeleton animation="wave" height={20} width={200} />
              <Skeleton animation="wave" height={20} width={200} />
            </div>
          </div>
          <div className="info mr-0 md:mr-0 items-center mt-2  pb-0 sm:pb-2  md:pb-2 flex  flex-col">
            <div className="flex-col flex">
              <Skeleton animation="wave" height={20} width={200} />
              <Skeleton animation="wave" height={20} width={200} />
            </div>
          </div>
          <div className="info mt-4 mr-0 md:mr-0 pr-0 items-center flex flex-col">
            <div className="flex-col flex">
              <Skeleton animation="wave" height={25} width={200} />
              <Skeleton animation="wave" height={25} width={200} />
            </div>
          </div>
        </div>
        <div className=" py-2 w-10/12 flex-col flex items-center ">
          <Skeleton animation="wave" height={35} width={100} />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
