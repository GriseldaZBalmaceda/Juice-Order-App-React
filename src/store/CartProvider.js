import CartContext from "./cart-context";
import {useReducer} from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state,action)=> {
    let updatedItems = undefined;
    if(action.type === "ADD_ITEM"){
        const itemToUpdate = state.items.find((item) => {
                return item.id === action.item.id
        })
        if(itemToUpdate) {
           updatedItems =  state.items.map((item)=>{
                if(item.id === action.item.id){
                    item.amount = item.amount +  action.item.amount;
                }
                return item;
            })
        } else {
            updatedItems = state.items.concat(action.item);
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = item => {
        dispatchCartAction({type:'ADD_ITEM',item:item})
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type:"REMOVE_ITEM", id:id})
    };
    const cartContext = {
        items: cartState.items, 
        totalAmount: cartState.totalAmount ,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider