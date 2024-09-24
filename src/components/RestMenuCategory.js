import { useState } from "react";
import ItemList from "./ItemList";

const RestMenuCategory = ({data, show, setShowIndex}) => {
    const [showItems, setShowItems] = useState(show);
    const { title, itemCards} = data;

    return (
            <div className="p-4">
                <div className="p-4 w-auto bg-gray-200 space-x-96 hover:bg-gray-300 cursor-pointer flex" onClick={() => {
                    setShowIndex();
                    setShowItems(!showItems);
                }}>
                    <div>
                        <span>{title} ({itemCards.length})</span>
                    </div>
                    <span>⬇️</span>
                </div>
                <div className="border-b-black-900 pt-4 w-auto">
                    { show && showItems && (
                        itemCards.map((listItem) => (
                            <ItemList key={listItem.card.info.id} item={listItem.card}/>
                        ))
                    )}
                </div>
            </div>
    )
}

export default RestMenuCategory;