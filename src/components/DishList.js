import React from 'react'
import dishes from '../dishes'
import Dish from './Dish'

const DishList = () => {
    return (
        <div>


        {dishes.map(dish=> <Dish dish = {dish}/>)}


            {/* <><img className ="image" src = {dish.image}/>
             <p>{dish.name} ...... {dish.price}</p>
             </>)} */}

        {/* <img className = "image" alt = {dishes[2].name} src= {dishes[2].image} />
        <p>{dishes[2].name}</p>
        <p>{dishes[2].price}</p> */}
        
        </div>
    )
}

export default DishList
