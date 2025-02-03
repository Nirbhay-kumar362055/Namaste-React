import AboutClass from "./AboutClass";
import {Component} from "react";
class About extends Component{        // when the class based component invokes then first
                                       // constructor will called 
                                   // after render will call and then componentDidMount will
                                       // will be called
    constructor(props){
        super(props);
        console.log("parent class component constructor called");
    }

    render(){
        console.log("parent class component rendered");
        return(
            <div id="about">
                <h2>This is about us page</h2>
                <p>We're learning React from Namaste React</p>
                <AboutClass name={"Nirbhay kumar"} location = {"Bihar"}/>
            </div>
        )
    }

}

// const About = () => {
//     return(
//         <div id="about">
//             <h2>This is about us page</h2>
//             <p>We're learning React from Namaste React</p>
//             <AboutClass name={"Nirbhay kumar"} location = {"Bihar"}/>
//         </div>
//     )
// }

export default About;