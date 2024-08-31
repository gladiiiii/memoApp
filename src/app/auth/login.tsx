import {
    View, Text, TextInput, StyleSheet
} from 'react-native'

import Header from '../../components/Header'

const LogIn = (): JSX.Element =>{
    return (
        <View style={styles.conteiner}>
            <Header />
            <View>
                <Text>Log In</Text>
                <TextInput value='Email address' />
                <TextInput value='Password' />
                <View>
                    <Text>Submit</Text>
                </View>
                <View>
                    <Text>Not registere?</Text>
                    <Text>Sign up here!</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    }
})

export default LogIn