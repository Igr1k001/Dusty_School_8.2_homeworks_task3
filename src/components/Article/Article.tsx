import React from 'react';

import './Article.css';

import { cnArticle } from './Article.classname';
import { IColorData } from '../../App.typings';

export interface IArticleProps {
    color: IColorData;
    backgroundColor: IColorData;
}

export const Article: React.FC<IArticleProps> = ({ color, backgroundColor }) => {
    return (
        <div 
            className={cnArticle()}
            style={{ 
                color: `rgba(
                    ${color.red},
                    ${color.blue},
                    ${color.green},
                    ${color.transparency / 100}
                )`,
                backgroundColor: 
                    `rgba(
                    ${backgroundColor.red}, 
                    ${backgroundColor.green}, 
                    ${backgroundColor.blue}, 
                    ${backgroundColor.transparency / 100}
                    )`
             }}
        >
            <h1 className={cnArticle('Header')}>Тяни и крась</h1>
            <p className={cnArticle('Paragraph')}>В качестве пропсов компонент должен принимать четыре пропса начального значения цвета, который предлагается настроить.</p>
        </div>
    );
}
