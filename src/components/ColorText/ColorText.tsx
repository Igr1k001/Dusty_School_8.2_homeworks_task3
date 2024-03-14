import React, { ChangeEvent, useState } from 'react';

import './ColorText.css';

import { cnColorText } from './ColorText.classname';
import { ColorName, IColorData } from '../../App.typings';

export interface IColorTextProps {
    onChange: (color: IColorData) => void
    initialColor: IColorData;
}

export const ColorText: React.FC<IColorTextProps> = ({ onChange, initialColor }) => {
    const [color, setColor] = useState<IColorData>(initialColor);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newColor = { ...color };

        const name = event.target.name as ColorName;

        newColor[name] = Number(event.target.value);

        setColor(newColor);
        onChange(newColor);
    }

    return (
        <div>
            <div className={cnColorText()}>
                <input style={{ accentColor: 'red' }} value={color.red} type="range" name="red" min="0" max="255" onChange={handleChange}/>
                <input style={{ accentColor: 'green' }} value={color.green} type="range" name="green" min="0" max="255" onChange={handleChange}/>
                <input style={{ accentColor: 'blue' }} value={color.blue} type="range" name="blue" min="0" max="255" onChange={handleChange}/>
                <input style={{ accentColor: 'black' }} value={color.transparency} type="range" name="transparency" min="0" max="100" onChange={handleChange}/>
            </div>
        </div>
    );
}
