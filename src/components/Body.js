import { useContext, useEffect, useState } from "react";
import ShimmerJS from "./Shimmer-ui";
import Restcard from "./Restcard";
import { forHighlyRated } from "./Restcard";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [restaurentList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState(null);
    const [searchText, setSearchText] = useState("");

    const HigherRated = forHighlyRated(Restcard);
    const userContext = useContext(UserContext);
    const { setUserName } = userContext;

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4740589&lng=77.084657&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const jsonData = await data.json();
        setRestList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
            <div className='body'>
                <div className="filter flex p-2 m-2">
                    <div className="search">
                        <input 
                            type="text" 
                            className="border border-solid border-black" 
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button className="p-2 py-0 bg-gray-400 m-2"
                                onClick={() => {
                                    const searchedList = restaurentList.filter(rest => rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
                                    setFilteredRestList(searchedList);
                                }}
                        >Search</button>
                    </div>
                    <button className="p-2 py-0 bg-fuchsia-200 m-2 mx-10" 
                            onClick={() => {
                                const filteredList = restaurentList.filter((rest) => rest.info.avgRating >= 4.5)
                                setFilteredRestList(filteredList);
                            }}
                    >
                        Top Rated Restaurents
                    </button>
                    <div className="search">
                        <label className="pr-2">User</label>
                        <input 
                            type="text" 
                            className="border border-solid border-black pl-1" 
                            onChange={(e) => setUserName(e.target.value || "Prasun")}
                        />
                    </div>
                </div>
                {!restaurentList?.length ? <ShimmerJS /> : (
                    <div className="flex flex-wrap">
                    {filteredRestList?.map((restaurent) => {
                        return (
                            <div key={restaurent.info.id}>
                                {restaurent?.info?.avgRating >= 4.5 ? (
                                    <HigherRated  rest={restaurent}/>
                                ) : (
                                    <Restcard  rest={restaurent} />
                                )}
                            </div>
                        )
                    })}
                </div>
                )}
            </div>
    )
}

export default Body;