import {View, TextInput, StyleSheet} from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const Edit = (): JSX.Element =>{
    return (
        <View style={styles.conteiner}>
            <Header />
            <View style={styles.inputConteiner}>
                    <TextInput multiline style={styles.input} value={'買い物\nリスト'} />
            </View>
            <CircleButton>
                <Icon name='check' size={40} color='#ffffff' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    inputConteiner: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24
    }
})

export default Edit


