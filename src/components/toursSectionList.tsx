import TourCard from "./tourCard";

interface TourLocation {
  description: string;
}

export interface Tour {
  id: string;
  duration: number;
  imageCover: string;
  maxGroupSize: number;
  name: string;
  price: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  startLocation: TourLocation;
  startDates: Array<string>;
  summary: string;
  locations: Array<TourLocation>;
}
const tours: Array<Tour> = require("../utils/tours.json");

const ToursSectionList = () => {
  return (
    <div className="tour-list">
      {tours &&
        tours.length &&
        tours.map((t) => <TourCard key={t.id} tour={t} />)}
    </div>
  );
};

export default ToursSectionList;
