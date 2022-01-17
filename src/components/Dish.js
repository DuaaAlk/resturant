import React from 'react'
import dishes from '../dishes'

const Dish = ({dish}) => {
    return (
        <div>
        <img className ="image" src = {dish.image}/>
        <p>{dish.name} ...... {dish.price}</p>
        </div>
    )
}

export default Dish
