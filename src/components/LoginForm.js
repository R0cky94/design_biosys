import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, loginUser, passwordChanged} from '../Actions';
import {Card} from "./common/Card";
import {CardSection} from "./common/CardSection";
import {Input} from "./common/Input";
import {Button} from "./common/Button";
import {Spinner} from "./common/Spinner";

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const {username, password} = this.props;
        this.props.loginUser({username, password});
    }

    onLoading() {
        if (this.props.loading) {
            return <Spinner/>
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>

        )
    }


    render() {
        return (
            <Card>
                <CardSection >
                    <Input
                        label={'Username'}
                        placeHolder={'enter username'}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={'Password'}
                        placeHolder={'enter password'}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.textStyle}>{this.props.error}</Text>
                </View>

                <CardSection>
                    {this.onLoading()}
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    },
    cardSectionStyle:{
        marginTop: 30
    }
});

function mapStateToProps(state) {
    return {
        username: state.AuthReducer.username,
        password: state.AuthReducer.password,
        loading: state.AuthReducer.loading,
        error: state.AuthReducer.error,
        user: state.AuthReducer.user
    };
}

export default connect(mapStateToProps,
    {emailChanged, passwordChanged, loginUser})(LoginForm);