import React, {Component} from "react";

class Button extends Component{
    handleClick = (e) =>{

        console.log(e);
        console.log(e.target);

        console.log(`${e.target.innerHTML} is clicked`);
        //e.target= button
    }
    render () {
        return (

            // when we want to add an attribute to a button we write the button event name= {this.function_name}
            // onClick={this.function_name}

            <button
            onClick={this.handleClick}
            style={{padding:"10px 20px", margin:"0 10px"}} > {this.props.text}</button>
            )

    }
}

// defaultProps goes here
Button.defaultProps = {text:"I am a button"};

export default Button;
