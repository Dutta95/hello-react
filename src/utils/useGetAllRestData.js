import { useState, useEffect } from "react"

const useGetAllRestData = () => {
    const [restaurentList, setRestList] = useState([]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4740589&lng=77.084657&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const jsonData = await data.json();
        setRestList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setFilteredRestList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return restaurentList;
}

export default useGetAllRestData;