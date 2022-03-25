import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './styles'
import { CATEGORIES } from '../../constants/categories'
import CategoryGrid from '../../components/categories/category-grid/index'

const Home = ({ navigation  }) => {
    const handleSelectCategory = (category) => {
        navigation.navigate('Category', { id: category.id, name: category.name })
    }
    const renderItem = ({ item }) => <CategoryGrid item={item} onSelected={handleSelectCategory} />

    return (
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}

export default Home