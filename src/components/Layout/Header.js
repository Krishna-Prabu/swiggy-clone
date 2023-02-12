import classes from './Header.module.css';
import { Fragment  } from 'react';
import mealImage from '../image/images.jpg';
import CartButton from './CartButton';

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h2>Meals Time</h2>
                <CartButton onClick={props.onClick} />
            </header>
            <div className={classes['images']}>
                <img src={mealImage} alt='a alternative images' />
            </div>
        </Fragment>

    );
};

export default Header;