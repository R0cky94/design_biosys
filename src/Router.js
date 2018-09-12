import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Activity from './components/Activity';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>

                <Scene key="main">
                    <Scene key="activity" component={Activity} title="Activity"/>
                </Scene>

            </Scene>
        </Router>

    );
};
export default RouterComponent;