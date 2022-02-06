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
  const sortByName = (a: Tour, b: Tour) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  const sortByStartingDate = (a: Tour, b: Tour) => {
    const dateA = new Date(a.startDates[0]).getMonth();
    const dateB = new Date(b.startDates[0]).getMonth();

    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="tour-list">
      {tours &&
        tours.length &&
        tours
          .sort(sortByName)
          .sort(sortByStartingDate)
          .map((t) => <TourCard key={t.id} tour={t} />)}
    </div>
  );
};

export default ToursSectionList;
