import classes from './MealsForm.module.css';
import { useContext } from 'react';
import CartContext from '../store/cart-context';

import Card from '../UI/Card';
import MealItemForm from './MealItemForm';
const MealsForm = props => {
    const cartCtx = useContext(CartContext);
    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            price: props.price,
            amount: amount,
            name: props.name
        });
    };
    return(
        <Card>
            <div className={classes.meals}>
                <div>
                    <h2 className={classes.name}>{props.name}</h2>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>${props.price}</div>
                </div>
                <div >
                    <MealItemForm id = {props.id} onAddAmount={addToCartHandler} />
                </div>
            </div>
        </Card>
    );
};

export default MealsForm;