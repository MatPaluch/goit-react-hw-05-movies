import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "./fetchApi";

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState();

  useEffect(() => {
    const fetch = async () => {
      await fetchReviews(id).then((res) => setReview(res.data.results));
    };
    fetch();
  }, []);

  return (
    <>
      {review?.length > 1 ? (
        review.map((review) => {
          return (
            <ul key={review.id}>
              <li>
                <b>Author: {review.author}</b>
                <p>{review.content}</p>
              </li>
            </ul>
          );
        })
      ) : (
        <p>There is no reviews at this moment</p>
      )}
    </>
  );
};
export default Reviews;
