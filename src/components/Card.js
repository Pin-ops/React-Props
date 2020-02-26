import React, { Component } from 'react';

class Card extends Component {

    render(){

        return(

            <div style= {{width:'200px',height:"300px",padding:"10px",margin:"20px",display:"inline-block"}}>

            <img style={imgStyle} src={this.props.src} alt="personImage" />
            <h2 style= {h2Style} > {this.props.person} </h2>
            <p> {this.props.infos} </p>
            </div>

        )
    }
}

const imgStyle={
    width:'150px',
    height:'150px',
    backgroundColor:'grey'
}

const h2Style={
    textAlign : 'center',
    color: 'blue'
}

export default Card;


// in return() section <div> and <fragment> are not always the same.
// return() kismindaki <div> ile <fragment> arasinda fark vardir.