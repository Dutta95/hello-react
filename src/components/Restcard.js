import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const RestCard = ({rest}) => {
    const { id, name, cuisines, cloudinaryImageId, avgRating, sla } = rest.info;
    const userContext = useContext(UserContext);
    return (
        <Link to={`/restaurant/${id}`}>
            <div key={id} className='res-card p-4 m-4 w-[200px] bg-gray-100'>
                <img
                    className="res-logo"
                    alt='res-logo' 
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} 
                />
                <h3 className="font-bold py-2 text-lg">{name}</h3>
                <h4>{cuisines.map(item => item.concat(", "))}</h4>
                <h4>{avgRating}</h4>
                <h4>{`${sla?.deliveryTime} minutes`}</h4>
                <h4>Hello, {userContext.loggedInUser}</h4>
            </div>
        </Link>
    )
}

export default RestCard;

export const forHighlyRated = (RestCard) => {
    return (props) => {
        return (
            <>
                <label className="absolute bg-red-400 pt-4 pl-4">Highly rated</label>
                <RestCard {...props}/>
            </>
        )
    }
}
