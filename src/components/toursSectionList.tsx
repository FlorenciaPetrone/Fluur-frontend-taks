interface TourLocation {
  description: string;
}

interface Tour {
  id: string;
  duration: number;
  imageCover: string;
  maxGroupSize: number;
  name: string;
  price: number;
  sartLocation: TourLocation;
  startDates: Array<string>;
  summary: string;
  locations: Array<TourLocation>;
}
const tours: Array<Tour> = require("../utils/tours.json");

const ToursSectionList = () => {
  return (
    <div className="tour-list">
      {tours && tours.length && tours.map((t) => <h1>{t.name}</h1>)}
    </div>
  );
};

export default ToursSectionList;
