import ActionType from '../contents/action_type'

export const SetProducts = (Products) => {
    return {
        type:ActionType.SET_PRODUCT,
        payload:Products,
    }
}

export const SetselectedProducts = (Products) => {
    return {
        type:ActionType.SET_SELECTED_PRODUCT,
        payload:Products,
    }
}


export const selectedCategory = (id) => {
    return {
        type: ActionType.SET_FILTER_PRODUCT,
        payload: id
    }
}

