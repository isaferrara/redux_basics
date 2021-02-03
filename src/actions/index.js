export function setBalance(act, state, money){
        if(act=== 'WHITHDRAW_MONEY' ){
        console.log(state-money)
    return {
        type: 'WHITHDRAW_MONEY',
        money: state - money
        }
    }
    else{
        return {
            type: 'RETURN_MONEY',
            money: state + money
        }
    }
}

