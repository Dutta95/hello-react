import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Username",
                location: "Location"
            }
        }
        // console.log("Parent constructor");
    }

    async componentDidMount() {
        const github_user_data = await fetch("https://api.github.com/users/Dutta95");
        const json_data = await github_user_data.json();
        console.log(json_data);
        // console.log("Parent componentDidMount")
        this.setState({
            name: this.state.userInfo.name = json_data.name,
            location: this.state.userInfo.location = json_data.location
        })
    }

    componentDidUpdate(){
        // console.log("Parent componentDidUpdate")
    }

    componentWillUnmount() {
        // console.log("Parent componentWillUnmount");
    }

    render() {
        const {name, location} = this.state.userInfo;
        // console.log("Parent render")
        return (
                <div>
                    <h1>About</h1>
                    <p>This is Prasun Dutta sharpening his react skills for now /n I'm a 30 years old guy from West Bengal trying to run as as fast as possible. I wish I could run as fast as The Flash but anyway....</p>
                    <span>Hello, <UserContext.Consumer>{(data) => <span>{data.loggedInUser}</span>}</UserContext.Consumer></span>
                    <User name={name} location={location} />
                </div>
        )
    }
}

export default About;