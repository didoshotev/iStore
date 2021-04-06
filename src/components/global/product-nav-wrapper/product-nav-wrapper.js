import React, { Component } from 'react'
import { withRouter } from 'react-router';

class ProductNavWrapper extends Component {

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}

export default withRouter(ProductNavWrapper)