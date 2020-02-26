import React, { Component } from 'react'

class Welcome extends Component {
    render() {

        // Destructuring

        // class tipi componentlarda render dan hemen sonra component isimlerini tanimlayip kisa yoldan kullanabiliriz

        const {name,age,city} = this.props;

        // console.log(this.props);

        return (

            <div>

            <h3>{name} </h3>
            <h5>{age}</h5>
            <p>{city} </p>

            </div>
        )
    }
}

// defaultProps goes here

Welcome.defaultProps = {name:"Penny", age:"28",city:"Berlin"};


export default Welcome;



// this.props is valid only with "class components" ex.{this.props.name}