
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-2 p-2 border-2 border-gray-200 rounded-md">
      <img

        alt="cardLogo"
        className="w-[250px] h-[200px] object-cover"
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