import { Fragment } from 'react';
import classes from './MealsList.module.css';

import MealsForm from './MealsForm';

const MEALS_LIST = [
    {id: '1',
     name: 'Normal Rice',
     price: '70.99',
     description: 'Normal Food Item'
       },
    {id: '2',
    name: 'Fried Rice',
    price: '100.50',
    description: 'Taste and Healthy'
},

    {id: '3',
    name: 'Chiken Rice',
    price: '150.45',
    description: 'Healthy and Energy'
}]

const MealsList = () => {
    return(
        <Fragment>
            <section>
            <ul className={classes.unorder}>
                {MEALS_LIST.map(meal=> <MealsForm key = {meal.id} id={meal.id} name={meal.name} price={meal.price} description={meal.description} />)}
            </ul>
            </section>
            </Fragment>
    );
};

export default MealsList;

