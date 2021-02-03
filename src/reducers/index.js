export default (state, action)=>{
    console.log(action);
    switch (action.type){
        case "WHITHDRAW_MONEY":
            return{
                ...state,
                money: action.money,
                actiony: action.type
            }
        case "RETURN_MONEY":
            return {
                ...state,
                money: action.money,
                actiony: action.type

            }
        default:
            return state
    }
}

