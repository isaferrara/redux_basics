import React from 'react'
import {store} from './store'
import {setBalance} from './actions'
import render from './index.js'

function ButtonGroup ({amount}) {
    return <div>
         {amount.map((money, i)=>(
             <button
             data-amount={money}
             key={i}
             onClick={withrawMoney}
             >
                ${money}
             </button>
         ))}
     </div>

 }

function withrawMoney(e){
    const money = e.target.dataset.amount;
    store.subscribe(render);
    store.dispatch(setBalance(store.getState().actiony, store.getState().money, Number(money)));

}

export default ButtonGroup