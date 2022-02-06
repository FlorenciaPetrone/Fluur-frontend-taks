interface IconProps {
  type: "like" | "location" | "flag" | "calendar" | "person";
}

const Icon = ({ type }: IconProps) => {
  return (
    <div className="icon-container">
      <img src={`../../icons/${type}.png`} alt={`${type} icon`} />
    </div>
  );
};

export default Icon;
