import CartContext from "./cart-context";

const CartProvider = (props) => {

    const addItemToCartHandler = item => {};

    const removeItemToCartHandler = id => {};

    const CartContext = {
       items: [], 
       totalAmount: 0,
       addItem: addItemToCartHandler,
       removeItem: removeItemToCartHandler,
    }

    return <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
};


export default CartProvider;