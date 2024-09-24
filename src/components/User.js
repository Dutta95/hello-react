import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        // console.log(this.props.name + "constructor")
    }

    componentDidMount() {
        // console.log(this.props.name + "componentDidMount")
    }

    // componentDidUpdate(){
    //     console.log(this.state.name + "componentDidUpdate")
    // }

    render() {
        const { name, location } = this.props;
        // console.log(this.props.name + "render")
        return (
            <div>
                <div>{name}</div>
                <div>{location}</div>
            </div>
        )
    }
}

export default User;