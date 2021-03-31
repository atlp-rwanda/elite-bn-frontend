import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer/Footer';
import { fetchReviews, saveReview, fetchRatings, saveRating } from '../store/actions/rateAndReview';
import {AiFillStar} from 'react-icons';

function RateAndReview() {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState([]);
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
      <div>
        <h6>Rate Accomodation</h6>
        <div className="flex w-full justify-center">
          <span className="mr-1">
            <i>react icon</i>
          </span>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <textarea onChange={onChange} className="h-32 shadow-sm p-2 w-10/12 sm:w-6/12 m-auto"/>
          <button type="submit" className="bg-blue-800 text-white rounded-sm w-10/12 sm:w-6/12 m-auto">Submit your review</button>
        </form>
      </div>
      <div>
        <h3 className="font-semibold mb-4">User reviews</h3>
        {reviews.map((review) => (
          <div className="rounded-sm border border-blue-300 p-4 w-10/12 sm:w-6/12 text-left" key={review.id}>
            <div>
              <span className="font-semibold mr-1">Sarah</span>
              <span className="text-xs">2:43pm</span>
            </div>
            <p>
              {review.review}
            </p>
          </div>
        ))}
      </div>
      <Footer />
      )
    </div>
  );
}

export default RateAndReview;
