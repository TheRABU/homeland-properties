import { Link } from "react-router-dom";

const EachCard = ({ eachCardData }) => {
  const { estate_title, image, location, description, id } = eachCardData;

  return (
    <article className="flex flex-col dark:bg-gray-50">
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-52 dark:bg-gray-500"
          src={image}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <Link
          to={`/details/${id}`}
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline dark:text-blue-600"
        >
          View Details
        </Link>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {estate_title}
        </h3>
        <p>{description}</p>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span>June 1, 2020</span>
          <span>2.1K views</span>
        </div>
      </div>
    </article>
  );
};

export default EachCard;
