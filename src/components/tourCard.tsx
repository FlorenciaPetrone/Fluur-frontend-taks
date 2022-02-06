import Icon from "./icon";
import TourDetailBadge from "./tourDetailBadge";
import { Tour } from "./toursSectionList";

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  const {
    imageCover,
    locations,
    maxGroupSize,
    name,
    price,
    ratingsAverage,
    ratingsQuantity,
    startDates,
    startLocation: { description },
    summary,
  } = tour;

  const startingDate = new Date(startDates[0]);

  return (
    <div className="tour-card">
      <img
        className="tour-card__img"
        src={`../../images/${imageCover.replace("jpg", "png")}`}
        alt="image"
      />
      <img
        className="tour-card__like-icon"
        src="../../icons/like.png"
        alt="like-icon"
      />
      <div className="tour-card__price">
        <p className="tour-card__price-label">{`$${price} / night`}</p>
      </div>
      <h3 className="tour-card__title">{name}</h3>
      <p className="tour-card__description">{summary}</p>
      <div className="tour-card__details">
        <TourDetailBadge
          icon={"../../icons/location.png"}
          label={description}
        />
        <TourDetailBadge
          icon={"../../icons/calendar.png"}
          label={startingDate.toLocaleDateString("en-EN", {
            month: "long",
            year: "numeric",
          })}
        />
        <TourDetailBadge
          icon={"../../icons/flag.png"}
          label={`${locations.length} stops`}
        />
        <TourDetailBadge
          icon={"../../icons/person.png"}
          label={`${maxGroupSize} people`}
        />
      </div>
      <div className="tour-card__footer">
        <p className="tour-card__footer-rating">{`Rating ${ratingsAverage} (${ratingsQuantity})`}</p>
        <p className="tour-card__footer-details">Details</p>
      </div>
    </div>
  );
};

export default TourCard;
