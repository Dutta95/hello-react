import { useParams } from "react-router-dom";
import ShimmerJS from "./Shimmer-ui";
import useFetchRestData from "../utils/useFetchRestData";
import RestMenuCategory from "./RestMenuCategory";
import { useState } from "react";

const RestComp = () => {
    const[showIndex, setShowIndex] = useState(0);
    const params = useParams();
    const fetchedRestData = useFetchRestData(params.restId);
    const restData = fetchedRestData?.cards[2]?.card?.card?.info;
    const categories = fetchedRestData?.cards[fetchedRestData?.cards?.length - 1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => card.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    

    return (
        <>
            {!restData ? <ShimmerJS /> : (
                <div className="text-center">
                    <div className="py-8">
                        <h1 className="font-bold text-lg">{restData?.name}</h1>
                        <div className="rest-detailed-container">
                            <h3>{restData?.avgRating+`(${restData?.totalRatingsString})`+"  "+ restData?.costForTwoMessage}</h3>
                            <h3>{restData?.cuisines.join(", ")}</h3>
                            <h4>{`Outlet: ${restData?.areaName}`}</h4>
                            <h4>{restData?.sla?.slaString}</h4>
                            <p>{restData?.sla?.lastMileTravelString}</p>
                        </div>
                    </div>
                    <div className="categories px-96">
                        {
                            categories.map((card, index) => {
                                return <RestMenuCategory 
                                                  key={card.card.card.title} 
                                                  data={card?.card?.card}
                                                  show={index === showIndex ? true : false}
                                                  setShowIndex={() => setShowIndex(index)}
                                        />
                            })
                        }
                    </div>
                </div>
            )}
        </>
    )
}

export default RestComp;