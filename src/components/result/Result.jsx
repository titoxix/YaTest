import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultUI from './ResultUI'
import { getSearchInformation } from '../../redux/Search/selector'

class Result extends Component {
    state = {}

    render() {
        return (
         <ResultUI
         {...this.props}/>
        )
    }
}

const mapStateToProps = state => ({
    searchInformation: getSearchInformation(state),
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Result);