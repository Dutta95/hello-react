import { itemImg_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({item}) => {
    const dispatch = useDispatch();
    
    return (
        <div className="border-b-4 text-left flex h-40">
            <div className=" w-9/12 pt-4">
                <div className="font-medium">
                    {item?.info?.name}
                </div>
                <div>
                ₹ {item?.info?.price ? item?.info?.price /100 : item?.info?.defaultPrice/100}
                </div>
                <p className="font-extralight text-sm">{item?.info?.description}</p>
            </div>
            <div className="w-3/12 p-6">
                <button 
                     className="bg-black text-white m-2 rounded-xl"
                     onClick={() => dispatch({
                        type: addItem,
                        payload: item
                     })}
                >
                    Add +
                </button>
                <img 
                     alt="" 
                     className="w-9/12 rounded-md"
                     src={item?.info?.imageId ? itemImg_URL+item?.info?.imageId : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxmFsoJttFu9YiFr5vKr6HK1dgcc4cXki8A&s"} 
                />
                
            </div>
        </div>
    )
}

export default ItemList;