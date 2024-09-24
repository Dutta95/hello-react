import { useEffect, useState } from "react"

const useFetchRestData = (restId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4740589&lng=77.084657&restaurantId=${restId}`
            )
            const jsonData = await data.json();
            setRestInfo(jsonData.data);
        }
        fetchData();
    }, [])

    return restInfo;
}

export default useFetchRestData;