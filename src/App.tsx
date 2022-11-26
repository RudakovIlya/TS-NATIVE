import React from 'react';
import './App.css';
import {splitIntoWords} from "./01_lesson-unit-test/01";
import {User} from "./06_callback/callback";


const sentence = 'Hello my friends!'
splitIntoWords(sentence);

function App() {
    return (
        <div className="App">
            <User/>
        </div>
    );
}

export default App;
