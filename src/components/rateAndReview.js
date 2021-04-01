import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiFillStar} from 'react-icons/ai';
import Footer from './Footer/Footer';
import { fetchReviews, saveReview, fetchRatings, saveRating } from '../store/actions/rateAndReview';

function RateAndReview() {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [rating, setRating] = useState([]);
  const [review, setReview] = useState('');
  const [mounted, setMounted] = useState(false);
  const [accommodationId, setaccommodationId] = useState(0);
  const dispatch = useDispatch();
  const getReviews = useSelector((state) => state.reviews);
  const getRatings = useSelector((state) => state.ratings);
  useEffect(() => {
    const getReviews = async () => {
      const allReviews = fetchReviews()(dispatch);
    };
    const getRatings = async () => {
      const allRatings = fetchRatings()(dispatch);
    };
    getReviews();
    getRatings();
  },[mounted]);
  useEffect(() => {
    setReviews(getReviews);
  }, [getReviews]);
  useEffect(() => {
    setRatings(getRatings);
  }, [getRatings]);
  const onSubmitRating = () =>{
    const body = {accommodationId,rating}
    saveRating(body)(dispatch)
  }
  const onClickRating = (rate) => {
    setRating(rate)
    onSubmitRating()
  }
  const onChange = (e) => {
    const { value } = e.target;
    setReview(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const body = { accommodationId, review };
    saveReview(body)(dispatch);
  };

  return (
    <div className="text-center">
      <div>
        <div className="bg-blue-900 w-full h-28"></div>
        <h4 className="my-4">The Lion Hotel, North Adelaide, Sout Austraria</h4>
      </div>
      <div className="my-10">
        <h6 className="mb-4">Rate Accomodation</h6>
        <div className="flex w-full justify-center">
          <span className="mr-1 cursor-pointer text-yellow-500 text-2xl" onClick={()=>{onClickRating(1)}}><AiFillStar /></span>
          <span className="mr-1 cursor-pointer text-yellow-500 text-2xl" onClick={()=>{onClickRating(2)}}><AiFillStar /></span>
          <span className="mr-1 cursor-pointer text-yellow-500 text-2xl" onClick={()=>{onClickRating(3)}}><AiFillStar /></span>
          <span className="mr-1 cursor-pointer text-yellow-500 text-2xl" onClick={()=>{onClickRating(4)}}><AiFillStar /></span>
          <span className="mr-1 cursor-pointer text-yellow-500 text-2xl" onClick={()=>{onClickRating(5)}}><AiFillStar /></span>
        </div>
      </div>
      <div className="w-full">
        <form className="flex flex-col sm:w-11/12 w-6/12 m-auto mb-20" onSubmit={onSubmit}>
          <textarea onChange={onChange} className="h-32 shadow-md p-2"/>
          <button type="submit" className="my-2 py-3 bg-blue-600 text-white rounded-sm">Submit your review</button>
        </form>
      </div>
      <div className="mb-20 w-full">
        <h3 className="font-semibold mb-4">User reviews</h3>
        {reviews.map((singleReview) => (
          <div className="rounded-sm border border-blue-300 p-4 sm:w-11/12 w-4/12 text-left m-auto mb-4" key={singleReview.id}>
            <div>
              <span className="font-semibold mr-1">Sarah</span>
              <span className="text-xs">2:43pm</span>
            </div>
            <p>
              {singleReview.review}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default RateAndReview;
