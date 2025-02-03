import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";

const Body = () => {
  //local state variable - super powerful

  // Never write useState() inside conditional, loop, or function. Because it creates inconsistency. Also never write useState() outside of the functional component because it throws error. 
  // Good way is write useStat() inside the component and at the top of functional component.
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  const [filteredRes, setFilteredRes] = useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnlineStatus();

  // if no dependency array as second parameter in useEffect(), then useEffect will be called on every rendering of the component
  // if dependency array is an empty array, then useEffect() will be called only for initial rendering of the component.
  // if the dependency array has any dependency(i.e., any state variable), then useEffect will be called only when dependency is updated. Also for initial rendering.
  // No matter whatever is the second parameter of useEffect(), useEffect() will always be called for initial rendering of the component.
  useEffect(() => {
    // fetchData();
  }, []);

  if(isOnline === false){
    return (
      <div>
        <h1>Garib aadmi Internet lagwaoo</h1>
      </div>
    );
  }

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.900965&lng=75.8572758&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
  //   );

  //   const json = await data.json();
  //   // console.log(json.data?.cards[2]?.card?.card?.info); //optional chaining is used

  //   // setListOfRestaurants(json);
  // };

  // conditional rendering - A rendering based on some condition.
  /* if(listOfRestaurants.length === 0){
    return (<h1>Loading...</h1>); // this is a bad way for UX that's why we use shimmer UI
  } */
  //replacing above code by ternary operator below with return keyword

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body" className="">
      <div id="search_bar" className="flex py-2 ">
        <input
          className="mx-2 border-2 border-gray-200 rounded-md"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);            
          }}
        ></input>
        <button className="mx-1 px-3 bg-gray-100 rounded-md" onClick={() => {

          const filteredListOfRestaurants123 = listOfRestaurants.filter((res)=>res.restaurantName.toLowerCase().includes(searchText.toLowerCase()));
          console.log(filteredListOfRestaurants123);

          setFilteredRes(filteredListOfRestaurants123);

        }}>
          Search
        </button>
      </div>
      <button
        className="py-3 mx-2 px-1.5 my-1 bg-gray-100 rounded-md hover:bg-gray-200" 
        onClick={() => {
          filteredRestaurantList = restaurantList.filter(
            (res) => res.avgRating > 4,
          );
          setListOfRestaurants(filteredRestaurantList);
        }}
      >
        Top rated restaurants
      </button>

      <div id="restaurantCardContainer " className="flex flex-wrap">
        {filteredRes.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.restaurantId}
              resData={restaurant}
            />
          );
        })}
        {/* follow the consistency of code. Using both individual attributes to pass props and obj will give you error. So use either one. */}
      </div>
    </div>
  );
};

export default Body;
