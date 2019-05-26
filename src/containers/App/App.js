import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import LogInPage from "../LogInPage";
import connect from "react-redux/es/connect/connect";
import Redirect from "react-router-dom/es/Redirect";
import Layout from "../../components/Layout/Layout";
import { MuiThemeProvider} from '@material-ui/core/styles';
import {createGenerateClassName, jssPreset} from '@material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import RegistrationPage from "../RegistrationPage";
import FeedPage from "../FeedPage";
import ProfilePage from "../ProfilePage";
import PostPage from "../PostPage";


const generateClassName = createGenerateClassName();
const jss = create(jssPreset());


function App() {

    const SwitchRoutes = (
        <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/feed"/>
            )}/>
            <Route path="/login" component={LogInPage}/>
            <Route path="/registration" component={RegistrationPage}/>
            <Route path="/feed" component={FeedPage}/>
            <Route path="/profile/:id" component={ProfilePage}/>
            <Route path="/post/:id" component={PostPage}/>
        </Switch>
    );


    return (

        <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider >
            <Layout children={SwitchRoutes}/>
        </MuiThemeProvider>
        </JssProvider>
    );
}

export default withRouter(connect()(App));



