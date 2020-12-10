import React,{createContext, useContext, useState, useReducer, useEffect } from 'react'
//import  from '../CartItems'
import cartItem from '../Data'
import AppReducer from '../Reducers/AppReducer'
const url = 'https://course-api.com/react-useReducer-cart-project'
export const cartContext = createContext()

const initialState = {
    loading : false,
    cart: cartItem,
    amount:0,
    total:0
}
function ContextProvider(props) {
    const [state, dispatch] = useReducer(AppReducer,initialState)
    return (
        <cartContext.Provider value={{...state}}>
           {props.children} 
          
           
        </cartContext.Provider>
    )
}
//custom context
export const useGlobalContext = ()=>{
        return useContext(cartContext)
}

export default ContextProvider
