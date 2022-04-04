import { useState } from "react";
import { Text, View } from "..";

export default function TextInput({ className = '', label = 'Name', disabled = false, placeholder = "", autocomplete, name, type = 'text', value, onChange = () => { }, isSubmit, required = false }) {

    const [activeText, setActiveText] = useState(false);

    const onFocus = () => setActiveText(true)
    const onBlur = () => setActiveText(false)

    return (
        <View className={`custom-input ${(activeText || value) ? 'active-text' : ''} ${(required && isSubmit && !value) ? 'error' : ''}`}>
            <label>{label} {require ? <sup>*</sup> : <></>}</label>
            <input className={className}
                autoComplete={autocomplete}
                placeholder={placeholder}
                disabled={disabled}
                name={name}
                type={type}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                onChange={onChange} />
            {required && isSubmit && !value && <Text>Required.</Text>}
        </View>
    )
}
