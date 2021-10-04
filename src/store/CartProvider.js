import CartContext from "./cart-context";
import {useReducer} from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state,action)=> {
    if(action.type === "ADD_ITEM"){
        let itemToUpdateIndex = state.items.findIndex((item) => item.id === action.item.id);
        let itemToUpdate = state.items[itemToUpdateIndex]
        let updatedItem;
        let updatedItems;
        if(itemToUpdate) {
            updatedItem = {
                ...itemToUpdate,
                amount: itemToUpdate.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[itemToUpdateIndex] = updatedItem;
        } else {
            updatedItem = {...action.item}
            updatedItems = state.items.concat(updatedItem);
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE_ITEM'){
        let itemToUpdateIndex = state.items.findIndex((item) => item.id === action.item.id);
        let itemToUpdate = state.items[itemToUpdateIndex];

        let updatedItems = [...state.items];
        let updatedTotalAmount = 0
        let updatedItem = {
            ...itemToUpdate,
            amount: itemToUpdate.amount - 1
        }
        if(updatedItem.amount === 0){
           updatedItems = updatedItems.filter((item)=>{
            return item.id !== itemToUpdate.id
           })
           updatedTotalAmount = state.totalAmount - updatedItem.price
        }else {
            updatedTotalAmount = state.totalAmount - updatedItem.price;
            updatedItems[itemToUpdateIndex] = updatedItem;
        }
        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount > 0 ? updatedTotalAmount : 0
        }
    }

    if(action.type === 'CLEAR') {
        return defaultCartState;
    }
    
    return defaultCartState
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = item => {
        dispatchCartAction({type:'ADD_ITEM',item:item})
    };
    const removeItemFromCartHandler = item => {
        dispatchCartAction({type:"REMOVE_ITEM", item:item})
    };
    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR'})
    }
    const cartContext = {
        items: cartState.items, 
        totalAmount: cartState.totalAmount ,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider