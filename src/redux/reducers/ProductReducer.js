import React from 'react'
import ActionType from '../contents/action_type';
const InitialState = []
let proArr = [];
export const ProductReducer = (state = InitialState, { type, payload }) => {
        switch (type) {
        case 'SET_PRODUCT':
            proArr = payload        
            return payload;
            
        case "SET_FILTER_PRODUCT":
            let newState;
            const filterState =  proArr.filter((item, index, arr) => {
                return (item.categoryId === Number(payload))
            })
            if(payload == 'selected') {
                newState = proArr;
            } else {
                newState = filterState;
            }
            return newState;                          
        default:
            return state;
    }
}


export const SelectedProductsReducer = (state = {} , {type , payload}) => {
    switch (type) {
        case ActionType.SET_SELECTED_PRODUCT:

        return {...state , ...payload}
            
           
    
        default:
            return state ; 
    }
}
