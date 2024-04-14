import EachCard from "./EachCard";
import "animate.css";
import { useLoaderData } from "react-router-dom";

const EstateSection = () => {
  const cardData = useLoaderData();
  // const [cardData, setCardData] = useState([]);
  // useEffect(() => {
  //   fetch("/estate-data.json")
  //     .then((res) => res.json())
  //     .then((data) => setCardData(data));
  // }, []);
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold ">Categories</h2>

          <p className="font-serif text-sm dark:text-gray-600">
            Find your suitable category based on your needs
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((eachCardData) => (
            <EachCard key={eachCardData.id} eachCardData={eachCardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstateSection;
