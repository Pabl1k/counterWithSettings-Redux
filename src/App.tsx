import React from 'react';
import './App.css';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";

export const App = () => {
    return (
        <div>
            <CounterDisplay/>
            <CounterSettings/>
        </div>
    )
}