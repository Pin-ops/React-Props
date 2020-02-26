import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Button from './components/Button';
import Card from './components/Card';



// import images from assets folder
// degisken atayip src karsiliginda bu deiskenleri kullaniyoruz
import img1 from './assets/man.png';
import img2 from './assets/woman.png';


// img lari puclic icerisine bir img klasorü acip oraya atarak da import edebiliriz. "/" public klasörü anlamina gelir. "/images/img-ismi"


function App() {
  return (
<div>
      <Card src={img1} person ="Ali Durmaz" infos="Product Manager"/>
      <Card src={img2} person ="Melanie Cevr" infos="Team Manager"/>
      <Card src={'/images/man2.png'} person="John Cooper" infos="Personal Manager"/>

      <Welcome name="Pinar" age="25" city="Cologne" />
      <Welcome/>

      <hr/>

      <Hello name="Hilmi" age="32" city="Hamburg"/>
      <Hello/>


      <hr/>

      <Button text="Read More"/>
      <Button/>

      <hr/>

</div>
  );
}

export default App;


// component styles are not defined here. they can be only in components own js.