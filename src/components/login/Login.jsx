import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Form from './Form';
import { login } from '../../services/PedidoYaApi';
import { getAccountInformation } from '../../redux/User/actions.js';



class Login extends Component {
    state = {
        loginData: {
            userName: '',
            password: '',
        },
        searching: false,
        invalidCredentials: false
    }

    handlerChanges = (data) => {
        this.setState(prevState => ({
            loginData: { ...prevState.loginData, [data.att]: data.value }
        }))
    }


    render() {
        return (
            <Form
                handlerChanges={(data) => { this.handlerChanges(data) }}
                searching={this.state.searching}
                invalidCredentials={this.state.invalidCredentials}
                goIn={() => {
                    this.setState({ searching: true })
                    login(this.state.loginData)
                        .then(result => {
                            console.log('resultado', result)
                            this.setState({ searching: false })
                            if (result === 200 && sessionStorage.getItem('userToken') !== '') {
                                this.props.getAccountInformation().then(result => {
                                    if (result === 200) {
                                        this.props.history.push({
                                            pathname: "/search",
                                            state: {
                                                previousPage: window.location.pathname,
                                            }
                                        });
                                    }
                                })
                            } else if (result.data.code === 'USR_INVALID_CREDENTIALS') {
                                this.setState({ invalidCredentials: true })
                            }
                        })
                }} />
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    getAccountInformation,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));