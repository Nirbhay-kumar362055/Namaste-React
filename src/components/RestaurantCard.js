
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurantCard">
      <img
        alt="cardLogo"
        className="cardLogo"
        src={resData.imageUrl}
      ></img>
      <h3 className="title">{resData.restaurantName}</h3>
      <p className="cusine">{resData.restaurantCuisine.join(", ")}</p>
      <p className="rating">{resData.avgRating}⭐</p>
      <p>{resData.deliveryTime}</p>
    </div>
  );
};

export default RestaurantCard;