import { View } from "../../../../../atoms";

export default function AutoComplete({ autocompleteInput, inOurDeliveryArea, autoCompleteText, isSubmit }) {
    return (
        <View className='textbox-wrapper googleautocomplete'>
            <label>Area/Locality</label>
            <input ref={autocompleteInput} autoComplete="off" placeholder="Eg. Sector or Park View Regidency" />
            {
                !inOurDeliveryArea && autoCompleteText ? <span className='error'>
                    Sorry we don't deliver here yet. Please select another city/area.
                </span> : !autoCompleteText && isSubmit ? <span className='error'>Please select your Area/Locality</span> : ''
            }
        </View>
    )
}
