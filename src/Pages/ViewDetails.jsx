import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  const detail = useLoaderData();

  useEffect(() => {
    for (let i = 0; i < detail.length; ++i) {
      const p = detail[i];
      if (p.id === parseInt(id, 10)) {
        setSelectedProduct(p);
        break;
      }
    }
  }, [detail, id]);

  if (!selectedProduct) {
    return (
      <div className="h-screen">
        <Helmet>
          <title>View Details</title>
        </Helmet>
        <h2 className="text-center text-3xl">Details not found</h2>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>View Details </title>
      </Helmet>
      <div className="min-h-screen px-10 md:px-0">
        <div className="text-center mt-10">
          <Link to="/">
            <button className="btn btn-secondary">Go Back</button>
          </Link>
        </div>

        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 my-10 mx-auto">
          <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
              <div className="badge badge-secondary">
                {selectedProduct.status}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="https://source.unsplash.com/random/480x360/?4"
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
                <span>Area: {selectedProduct.area}</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-600">
                  {selectedProduct.estate_title}
                </h3>
              </a>
              <p className="leading-snug dark:text-gray-600">
                {selectedProduct.description}
              </p>
              <p className="text-xl font-semibold text-black">
                {selectedProduct.price}
              </p>

              <div className="badge badge-accent">
                {selectedProduct.segment_name}
              </div>

              <div>
                <h1>Location: {selectedProduct.location}</h1>
                <p>Facilities: {selectedProduct.facilities?.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
