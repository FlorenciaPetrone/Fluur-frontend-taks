import ToursSectionHeader from "../components/toursSectionHeader";
import ToursSectionList from "../components/toursSectionList";

const ToursSection = () => {
  return (
    <div className="tour-container">
      <ToursSectionHeader />
      <ToursSectionList />
      <p
        className="tour-container__button"
        onClick={() => console.log("View All Tours")}
      >
        View All Tours
      </p>
    </div>
  );
};
export default ToursSection;
