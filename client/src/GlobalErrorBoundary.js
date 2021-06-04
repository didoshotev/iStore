import React, { Component } from 'react'

class GlobalErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error in componentDidCatch', errorInfo)
    }

    render() {
        if(this.state.hasError) {
            return (
                <>
                    <h1>An Error Occured...</h1>
                    <p>Please try again later</p>
                </>
            )
        }
        return (
            this.props.children
        )
    }
}

export default GlobalErrorBoundary