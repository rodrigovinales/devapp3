import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { PRODUCTS } from '../../constants/products'
import CategoryProducts from '../../components/categories/category-products'
import LoaderSpinner from '../../components/Loader'
import { useSelector, useDispatch, connect } from 'react-redux'
import { filteredProducts, selectProduct } from '../../store/actions/product.action'




const Category = ({ navigation, route }) => {
    // const { id } = route.params;
    // const selectedCategory = PRODUCTS.filter(product => product.category === id);

    const dispatch = useDispatch();
    const categoryProduct = useSelector(state => state.products.filteredProducts);
    const selectedCategory = useSelector(state => state.categories.selectedCategory);

    const handleSelectCategory = (product) => {
        dispatch(selectProduct(product.id));
        navigation.navigate('Product', { name: product.name })
    }
    const renderItem = ({ item }) => <CategoryProducts item={item} onSelected={handleSelectCategory} />

    let content;

    const [Loader, setLoader] = useState(false)

    content = <LoaderSpinner visible={!Loader} />

    useEffect(() => {
        setTimeout(() => {
            content = setLoader(true)
        }, 2000);
    }, []);

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id));
    }, [])


    return (
        <View style={styles.container}>
            {content}
            <FlatList
                data={categoryProduct}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>

    )
}

export default connect()(Category)