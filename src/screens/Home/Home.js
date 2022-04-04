import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, } from '../../components/atoms';
import { TheContainer } from '../../components/molecules';
import Categories from './Components/Categories';
import Products from './Components/Products';
//
import './Style.scss';


export default function Home() {
    const dispatch = useDispatch(),
        contextRef = useRef(),
        [activeCategoryId, setActiveCategoryId] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleActiveCategory = (id = '') => {
        setActiveCategoryId(activeCategoryId === id ? "" : id)
    }

    return (
        <TheContainer className='categoryPageWrapper'>
                <View className="pageWrapper">
                    <Categories dispatch={dispatch} activeCategoryId={activeCategoryId} handleActiveCategory={handleActiveCategory} />
                    <Products dispatch={dispatch} activeCategoryId={activeCategoryId} />
                </View>
        </TheContainer>
    )
}
