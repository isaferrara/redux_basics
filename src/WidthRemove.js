import React from 'react'
import {store} from './store'
import {setAction, setBalance} from './actions'
import render from './index.js'

const WidthRemove = ({actions}) => {
    return (
        <div>
            {actions.map((action, i)=>(
                <button
                data-act={action==='widthraw'?'WHITHDRAW_MONEY': 'RETURN_MONEY'}
                key={i}
                onClick={changeAction}
                >
                {action}
                </button>
            ))}


        </div>
    )
}
export default WidthRemove

function changeAction(e){
    const act = e.target.dataset.act;
    store.dispatch(setBalance(act, store.getState().money, null));
}