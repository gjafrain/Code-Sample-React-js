import React from 'react';
import { View } from '../../atoms';
// STYLE 
import './Style.scss';

export default function Conainer({ children, container = {}, className = '' }) {
    return (
        <View className={className + " container"} style={{ ...container }}>
            {children}
        </View>
    )
}
