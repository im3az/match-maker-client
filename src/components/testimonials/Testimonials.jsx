import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://match-maker-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <section className="my-8 bg-gray-100 text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">

          <h2 className="text-5xl font-bold text-center text-gray-900">
          What our customers are saying about us
        </h2>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="flex flex-col max-w-sm mx-4 my-6 shadow-lg"
            >
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  {review.successStory}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-600 text-gray-50">
                <img
                  src={review.coupleImage}
                  alt=""
                  className="object-cover object-center w-24 h-24 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 "
                />
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.reviewStar}
                  className="mx-auto my-2"
                  readOnly
                />
                <p className="text-sm uppercase">
                  Marriage data: {review.marriageDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
