// creating class based component
import React from "react";
class AboutClass extends React.Component{

    //recieving props
    constructor(props){
        super(props); // must

        // this.state = { // state variable in class based component
        //     // we can create as many state variables as we want
        //     college : "GNE", // first variable and its value is GNE
        //     count : 0
        //     //we can create more variables like this college : "GNE" , age : 20
        // }

        this.state = {
            userInfo: {
                id: null,
                name: "Abhay kumar",
                Repository:"3"
            }
        }

    }
    async componentDidMount(){
        const response = await fetch( "https://api.github.com/users/Nirbhay-kumar362055");
        const data = await response.json();
        this.setState ({
            userInfo: {
                id: data.id,
                name: data.name,
                Repository:data.public_repos
            }
        })
    }

    render(){
        // const {name , location} = this.props; // destructuring props
        // const {college ,count} = this.state; // destructioring state variable
        const{name,public_repos,id} = this.state.userInfo;
        return(
            <div className="class-based">
                <h2>Id: {id}</h2>
                <h2>Name: {name}</h2> {/* this keyword must be used*/}
                <h2>Repository: {public_repos}</h2>
                <h3>Made using class based component</h3>
            </div>
        )
    }
};
export default AboutClass;