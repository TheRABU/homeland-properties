import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

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
      <div>
        <Helmet>
          <title>View Details</title>
        </Helmet>
        <h2 className="text-center text-3xl">Details not found</h2>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>View Details </title>
      </Helmet>
      <h2 className="text-center text-3xl">View Details of {id}</h2>

      <div>
        <p>Estate Title: {selectedProduct.estate_title}</p>
        <p>Description: {selectedProduct.description}</p>
        <p>Price: {selectedProduct.price}</p>
        <p>Status: {selectedProduct.status}</p>
        <p>Area: {selectedProduct.area}</p>
        <p>Location: {selectedProduct.location}</p>
        <p>Facilities: {selectedProduct.facilities?.join(", ")}</p>
      </div>
    </div>
  );
};

export default ViewDetails;
