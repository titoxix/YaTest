import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchUI from './SearchUI'
import { getUserName } from '../../redux/User/selectors'
import { getCurrentLocation } from '../../redux/General/selectors'
import { updateSearchInformation } from '../../redux/Search/actions.js'

class Search extends Component {
    state = {
        lat: undefined,
        lng: undefined,
        searching: false
    }


    render() {
        return (
            <SearchUI
                {...this.props}
                {...this.state}
                onMarkerDragEnd={(coord) => {
                    const { latLng } = coord;
                    this.setState({ lat: latLng.lat(), lng: latLng.lng() })
                }}
                search={() => {
                    this.setState({ searching: true })
                    let latLng = undefined
                    if (this.state.lat === undefined) {
                        latLng = {
                            lat: this.props.currentLocation.lat,
                            lng: this.props.currentLocation.lng
                        }
                    } else {
                        latLng = {
                            lat: this.state.lat,
                            lng: this.state.lng
                        }
                    }
                    this.props.updateSearchInformation(latLng).then(result => {
                        this.props.history.push({
                            pathname: "/results",
                            state: {
                                previousPage: window.location.pathname,
                            }
                        });
                    })
                }}
            />
        )
    }
}

const mapStateToProps = state => ({
    userName: getUserName(state),
    currentLocation: getCurrentLocation(state)
});

const mapDispatchToProps = {
    updateSearchInformation,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Search));