// creating class based component
import React from "react";
class AboutClass extends React.Component{

    //recieving props
    constructor(props){
        super(props); // must
    }
    render(){
        return(
            <div>
                <h2>Name: {this.props.name}</h2> {/* this keyword must be used*/}
                <h3>Made using class based component</h3>
            </div>
        )
    }
};
export default AboutClass;