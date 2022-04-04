import React from 'react';
import { Text, TouchableOpacity, View } from '../';
// 
import { Icon } from '../Icon';
import { WHITE } from '../../../styles/colors';

export default function Button({ label, loader = false, showIcon = false, icon, size, iconBefore = false, className = "", iconText = "", onPress = () => { } }) {
    return (
        <TouchableOpacity onPress={onPress} className={`custom-buttom ${className} ${(loader && "loader")}`}>
            {loader ?
                <Icon loader={loader} /> :
                <>
                    {iconBefore ? showIcon && <Icon loader={loader} name={icon} size={size} imageStyle={{ tintColor: WHITE }} /> : <></>}
                    <Text>{label}</Text>
                    {iconBefore ? <></>
                        : showIcon && <View className='dFlex alignCenter'>{iconText}<Icon loader={loader} name={icon} size={size} imageStyle={{ tintColor: WHITE }} /></View>}
                </>
            }
        </TouchableOpacity>
    )
}
