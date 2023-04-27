import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item)=> {
        return curNumber + item.amount;
    }, 0);

    // good way to add css styles by checking if variable is true or false
    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump: ''}`

    // use in useEffect to target changes in items on the cart and when we recognize a change, we add a "bump" css class to cart button.
    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        // remove the css class "bump" because we want to see the "bump" css class every time we add item to cart, 
        //and not only at the first time we add.
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return( 
    <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>
            {numberOfCartItems}
        </span>
    </button>
    )
}
export default HeaderCartButton