export default function Star(props) {
  let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
  console.log("over here");
  return (
    <img
      src={`../images/${starIcon}`}
      className="card--favorite"
      alt="star"
      onClick={props.handleClick}
    />
  );
}
