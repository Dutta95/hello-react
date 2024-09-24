const Contact = () => {
    return (
        <div>
            <div className="flex">
                <h1 className="p-4 mt-1 font-bold">Contacts:</h1>
                <form className="p-4">
                    <input type="text" placeholder="Name" className="border border-blue-900 rounded-md pl-1"/>
                    <input type="text" placeholder="Message" className="border border-blue-900 rounded-md pl-1"/>
                    <button type="submit" className="ml-2 p-1 bg-blue-950 text-white rounded-md">
                        Submit
                    </button>
                </form>
            </div>
            <div className="mt-20">
                <div className="flex m-2">
                    <label>Call/Whatsapp:</label>
                    <label className="px-2">{" "}</label>
                    <p>7891990086</p>
                </div>
                <div className="flex m-2">
                    <label>Email:</label>
                    <label className="px-2">{" "}</label>
                    <p>prasundutta538@gmail.com</p>
                </div>
                <div className="flex m-2">
                    <label>Alternate_Email:</label>
                    <label className="px-2">{" "}</label>
                    <p>duttaprasun538@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;