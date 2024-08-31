import {
    View, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const Create = (): JSX.Element =>{
    return (
        <KeyboardAvoidingView behavior='height' style={styles.conteiner}>
            <Header />
            <View style={styles.inputConteiner}>
                    <TextInput multiline style={styles.input} value='' />
            </View>
            <CircleButton>
                <Icon name='check' size={40} color='#ffffff' />
            </CircleButton>
        </KeyboardAvoidingView>
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

export default Create