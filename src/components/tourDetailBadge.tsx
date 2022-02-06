interface TourDetailBadgeProps {
  icon: string;
  label: string;
}

const TourDetailBadge = ({ icon, label }: TourDetailBadgeProps) => {
  return (
    <div className="tour-badge">
      <img className="tour-badge__img" src={icon} alt="icon" />
      <p className="tour-badge__label">{label}</p>
    </div>
  );
};

export default TourDetailBadge;
