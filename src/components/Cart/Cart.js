import { useContext } from 'react'
import styles from './Cart.module.css'
import Modal from '../UI/Model'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {

    const cartCtx =  useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {

    };

    const cartItemAddHandler = (item) => {

    };

    const cartItems = <ul className={styles['cart-items']}>
        {
        cartCtx.items.map(item=> 
        <CartItem key={item.id} 
        name={item.name} 
        amount={item.amount} 
        price={item.price} 
        onAdd={cartItemAddHandler.bind(null, item)} 
        onRemove={cartItemRemoveHandler.bind(null, item.id)}>
        </CartItem>
        )
        }
    </ul>
    return (
    <Modal onHideCart={props.onHideCart}>
        {cartItems} 
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>
    )

}

export default Cart