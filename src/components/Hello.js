// import React from 'react'

// function Hello(props) {
//     console.log(props)
//     return (

//         <div>
//         <h3>{props.name} </h3>
//         <h5>{props.age}</h5>
//         <p>{props.city} </p>
//         </div>
//     )
// }

// // defaultProps goes here
// Hello.defaultProps = {name:"Ali", age:"35",city:"Duisburg"};


// export default Hello;



// props. is valid with function components but we have to write before (props)in function as a parameter



// // Destructuring 1st Way is more common

// import React from 'react'

// function Hello({name,age,city}) {

//     // ()icerisindeki props yerine props a ait olan objectlerin key lerini {} icerisinde yaziyoruz

//     return (
//         <div>
//         <h3>{name} </h3>
//         <h5>{age}</h5>
//         <p>{city} </p>
//         </div>
//     )
// }

// // defaultProps goes here
// Hello.defaultProps = {name:"Ali", age:"35",city:"Duisburg"};

// export default Hello;


// Destructuring 2nd Way

import React from 'react'

function Hello(props) {

    const {name,city,age}=props;

    // class da kullandigimiz yöntemin aynisinin function versiyonu

    // class components da const {name,age,city} = this.props;
    // function components da const {name,city,age}=props;

    return (
        <div>
        <h3>{name} </h3>
        <h5>{age}</h5>
        <p>{city} </p>
        </div>
    )
}

// defaultProps goes here
Hello.defaultProps = {name:"Ali", age:"35",city:"Duisburg"};

export default Hello;