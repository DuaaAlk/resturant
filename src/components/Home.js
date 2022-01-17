import React from 'react'
import Menu from './Menu';

const Home = () => {
    console.log("Home.js ");

    return (
        <div className = "title"> 
        <img className = "image"
        src = "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2020/01/1mnbcgftdrefw23.jpg"
        alt = "Ratatiolli Resturant" />
        <h1>Welcome to Rattatiolli</h1>
        <h2>French Cousine</h2>
      
        <Menu/> 

    </div>
    )
}

export default Home
