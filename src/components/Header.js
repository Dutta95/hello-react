import { useContext, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    const userContext = useContext(UserContext);
    const selector = useSelector(data => data.cart.items)
    
    return (
        <div className='flex justify-between bg-blue-200 shadow-md m-2'>
            <div className='logo-container'>
                <img 
                  className='w-40' 
                  src={CDN_URL} 
                />
            </div>
            <div className='nav-items'>
                <ul className="flex p-10 m-8">
                    <li className="px-4">
                        Status: {onlineStatus ? "✅" : "🛑"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/About">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/Contact">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/Groceries">Grocery</Link>
                    </li>
                    <li className="px-4 font-semibold">
                        <Link to="/Cart">Cart({selector.length})</Link>
                    </li>
                    <button className="px-4" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>
                        {btnName}
                    </button>
                    <li>Hello, {userContext.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;