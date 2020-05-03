import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredients/BurgerIngredient';


const burger = (props) =>
{
    let tranformedIngredient = Object.keys(props.ingredients)
    .map(igKey =>{
        return [...Array(props.ingredients[igKey])]
        .map((_,i)=>{
            return <BurgerIngredient type={igKey} key={igKey+i} />
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(tranformedIngredient.length===0)
    tranformedIngredient =<p>Please start adding ingredients!</p>

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngredient}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}

export default burger;