import React, { useCallback, useState } from 'react';
import { View, Text, TextInput } from '../';
// 
import Styles from './Style';

export default function CustomInput({ label = '', name = '', value = '', editable = true, type = "default", required = false, errorMsg = 'Required', onChange = () => { }, submitted = true }) {

    const [inputFocus, setInputFocus] = useState(false);

    const activeInput = inputFocus ? Styles.activeInputLabel : value ? Styles.activeInputLabel : {},
        error = required && submitted && !value ? Styles.error : null;

    const onChangeText = (text) => {
        onChange(name, text)
    }

    return (
        <View style={[Styles.inputBox, editable ? {} : Styles.disableText]}>
            <Text numberOfLines={1} style={[Styles.label, activeInput]}>{label} {required ? <Text>*</Text> : <></>}</Text>
            <TextInput style={[Styles.input, inputFocus && Styles.activeInput, error]}
                editable={editable}
                name={name}
                keyboardType={type}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                value={value} onChangeText={onChangeText} />
            {error ? <Text style={Styles.errorText}>{errorMsg}</Text> : <></>}
        </View>
    )
}
