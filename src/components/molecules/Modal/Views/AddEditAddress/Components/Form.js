import { Button, TextInput, View } from '../../../../../atoms';

export default function Form({ isSubmit, onChange, state }) {
    return (
        <>
            <View className='input-wrap'>
                <View className='textbox-wrapper house-number'>
                    <TextInput name='houseNumber' label="House/Plot Number" onChange={onChange} value={state.houseNumber} required isSubmit={isSubmit} />
                </View>
                <View className='textbox-wrapper  landmark'>
                    <TextInput name='landmark' label="Landmark" onChange={onChange} value={state.landmark} required isSubmit={isSubmit} />
                </View>
            </View>
            <View className='textbox-wrapper'>
                <TextInput name='address' label="Full Address" onChange={onChange} value={state.address} required isSubmit={isSubmit} />
            </View>
            <View className='input-wrap'>
                <View className='textbox-wrapper zipcode'>
                    <TextInput name='pincode' label="Pincode/Zipcode" onChange={onChange} value={state.pincode} required isSubmit={isSubmit} />
                </View>
                <View className='textbox-wrapper phone'>
                    <TextInput name='phone' label="Delivery Contact Number" onChange={onChange} value={state.phone} required={false} isSubmit={isSubmit} />
                </View>
            </View>
            <View className='address-option-wrapper'>
                {['Home', 'Work', 'Other'].map((x, i) => {
                    return (
                        <Button key={i} className={"address-option slide-button-primary " + (state.type === x ? "active" : '')}
                            onPress={() => onChange({ target: { name: 'type', value: x } })}
                            showIcon size={"md"} label={x} icon={x} iconBefore
                        />
                    )
                })}
            </View>
        </>
    );
}
