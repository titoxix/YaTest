import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getUserName } from '../../redux/User/selectors'
import { getCurrentLocation } from '../../redux/General/actions'

import HomeLayout from './Home-layout'
import Login from '../login/Login'
import Search from '../search/Search'
import Result from '../result/Result'



class Home extends Component {



    render() {
        this.props.getCurrentLocation();
        return (
            <HomeLayout
                {...this.props}
                login={sessionStorage.getItem('userToken') !== null ? true : false}
                logout={() => {
                    sessionStorage.removeItem('userToken');
                    sessionStorage.removeItem('userName');
                    window.location.href = "/";
                }}
            >
                <BrowserRouter >
                    <Switch>
                        <Route exact path="/" component={Login} />
                        {sessionStorage.getItem('userToken') !== null ?
                            <Route path={"/search"} component={Search} />
                            : null}
                        {sessionStorage.getItem('userToken') !== null ?
                            <Route path="/results" component={Result} />
                            : null}

                        <Route path="*" component={Login} />
                    </Switch>
                </BrowserRouter>
            </HomeLayout>
        )
    }
}

const mapStateToProps = state => ({
    userName: getUserName(state),
});

const mapDispatchToProps = {
    getCurrentLocation
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);