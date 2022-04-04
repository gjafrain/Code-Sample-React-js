import { View, TouchableOpacity } from '../';

export default function RadioButton({ active = false, title = '', onPress }) {
    return (
        <TouchableOpacity className='radio-wrapper' onPress={onPress}>
            <View className={'outer ' + [active]}>
                <View className='inner' />
            </View>
            <View className='label'>{title}</View>
        </TouchableOpacity>
    )
}
