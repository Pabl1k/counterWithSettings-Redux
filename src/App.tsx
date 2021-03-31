import React from 'react';
import s from './App.module.css';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";

export const App = () => {
    return (
        <div className={s.app}>
            <div className={s.container}>
                <CounterSettings/>
            </div>
            <div className={s.container}>
                <CounterDisplay/>
            </div>


        </div>
    )
}

//<Route path='/display'
//                    render={() => <CounterDisplay/>}/>
//             <Route path='/settings'
//                    render={() => <CounterSettings/>}/>