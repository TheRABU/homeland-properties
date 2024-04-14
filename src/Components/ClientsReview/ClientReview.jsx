import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const ClientReview = () => {
  const [clientReview, setClientReview] = useState([]);
  useEffect(() => {
    fetch("/client-review.json")
      .then((res) => res.json())
      .then((data) => setClientReview(data));
  }, []);
  return (
    <section className=" dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
        {clientReview.map((eachReview) => (
          <ReviewCard key={eachReview.id} eachReview={eachReview} />
        ))}
      </div>
    </section>
  );
};

export default ClientReview;
