//
import { View } from '../../components/atoms';
import { TheContainer } from '../../components/molecules';
import './Style.scss';


export default function AboutUs() {
    return (
        <TheContainer className='about-container'>
            <View className='title'> About Us </View>
            <View className='botton-line' />
            <View className='description'>
                With a vision to provide exotic veggies and fruits to each household, we strive hard for excellence, making our customers' money worth spending, keeping their eating habits in regular cheek.
                Living in an era, where saving time & health is equally important, out platform lies in lieu of both.
                Following the buyer driven approach, we constantly monitor the shift in shift in paradigm of continuously changing lifestyle & eating habits.
                This has not only affect the way we eat, but also the way we purchase.
                Directly collected from farmers, hygiene packing and cooking ready veggies at your doorstep with uncompromising quality and regular price
            </View>
        </TheContainer>
    )
}
