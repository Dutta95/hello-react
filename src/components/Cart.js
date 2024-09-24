import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((data) => data.cart.items)
    const dispatch = useDispatch();
    return (
        <div className="text-center">
                <h1 className="font-bold p-8">Cart</h1>
                <button 
                     className="mb-20 bg-slate-400 rounded-md"
                     onClick={() => {
                        if (cartItems.length !== 0) {
                            dispatch(clearCart())
                        } else return
                     }}
                >
                    Clear cart
                </button>
            {
                !cartItems.length ? <div>Your Cart is empty!</div> : (
                    cartItems.map((item, index) => {
                        return (
                            <div key={item.info.id}>
                                    {item.info.name}{" "}:{"  "}{item.info.price ? item.info.price/100 : item.info.defaultPrice/100}
                                    <button 
                                         className=" bg-slate-600 mx-4 my-3 w-4 text-white"
                                         onClick={() => dispatch({
                                            type: removeItem,
                                            payload: index
                                         })}
                                    >
                                        -
                                    </button>
                            </div>
                        )
                    })
                )
            }
            {
                cartItems.length !== 0 && (
                    <div className="pt-16">
                        <span>Total: {" "}</span>
                        {
                            cartItems.reduce((acc, item) => acc+= item.info.price ? item.info.price/100 : item.info.defaultPrice/100, 0)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Cart;