import { TextArea } from 'semantic-ui-react';
import { View } from '../../../components/atoms';

export default function AdditionalNote() {
    return (
        <View className='additional-note-wrapper'>
            <View className='title'>Additional-Note</View>
            <View className='additional-note-textarea'>
                <TextArea rows={4} placeholder='Enter something here ...' />
            </View>
        </View>
    )
}
