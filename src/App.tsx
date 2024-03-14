import React, { useState } from 'react';

import './App.css';
import { ColorText } from './components/ColorText/ColorText';
import { Article } from './components/Article/Article';
import { IColorData } from './App.typings';

const DEFAULT_COLOR = {
    red: 0,
    blue: 0,
    green: 0,
    transparency: 100
};

const DEFAULT_BACKGROUNDCOLOR = {
    red: 255,
    blue: 255,
    green: 255,
    transparency: 100
};

function App() {
    const [color, setColor] = useState(DEFAULT_COLOR);
    const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BACKGROUNDCOLOR);

    const handleColor = (color: IColorData) => {
        setColor(color);
    }

    const handleBackgroundColor = (color: IColorData) => {
        setBackgroundColor(color);
    }

    return (
        <div className="App">
            <Article 
                color={color}
                backgroundColor={backgroundColor}
            />
            <p>Изменить цвет текста:</p>
            <ColorText onChange={handleColor} initialColor={DEFAULT_COLOR} />
            <p>Изменить фон текста:</p>
            <ColorText onChange={handleBackgroundColor} initialColor={DEFAULT_BACKGROUNDCOLOR} />
        </div>
    );
}

export default App;
