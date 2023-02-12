
import { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import MealsList from './MealsList';
import classes from './Meals.module.css';

const Meals = () => {
    return(
        <Fragment>
            <div className={classes.meals}>
                
                   <MealsSummary />
                
                    <MealsList />
                
            </div>
        </Fragment>
    );
};

export default Meals;