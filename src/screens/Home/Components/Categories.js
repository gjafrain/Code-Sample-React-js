import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, TouchableOpacity, ActivityIndicator, View } from '../../../components/atoms';
// REDUX
import { fetchAllCategories } from '../../../redux/modules/category/action';
import { Localize } from '../../../utils/common';


export default function Categories({ dispatch, handleActiveCategory, activeCategoryId }) {

    const [categories, setCategories] = useState([]),
        { fetchCategoryProductsPending } = useSelector(state => state.product);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = () => {

        const onSuccess = ({ data }) => {
            setCategories(data)
        }
        const onFail = (err) => { }
        dispatch(fetchAllCategories({ onSuccess, onFail }))
    }

    return (
        <View className='categories-section-sticky'>
            <View className="categories-section">
                <TouchableOpacity onPress={() => handleActiveCategory("")} className={"category-title slide-button-gray-light " + (activeCategoryId === "" ? 'active' : '')}>
                    <Text>{Localize(global.consts.ALL_VEGITABLES_FRUITS)}</Text> {(fetchCategoryProductsPending && activeCategoryId === "") ? <ActivityIndicator /> : ''}
                </TouchableOpacity>
                {categories.map((x, i) => {
                    return (
                        <TouchableOpacity onPress={() => handleActiveCategory(x.id)} key={i}
                            className={"category-title slide-button-gray-light " + (activeCategoryId === x.id ? 'active' : '')}>
                            <Text>{Localize(x.name)}</Text>
                            {/* {(fetchCategoryProductsPending && activeCategoryId === x.id) ? <ActivityIndicator /> : ''} */}
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}
