import React from 'react';

export default(Component) => class Accordion extends Component {

    state = {
        openId: null
    }
    render() {
        return <Component
            {...this.props}
            {...this.state}
            toggleHandler={this.toggleOpen}
            openId={this.state.openId}/>
    }

    toggleOpen = openId => ev => {
        ev && ev.preventDefault()
        if (openId === this.state.openId) {
            this.setState({openId: null})
        } else {
            this.setState({openId})
        }

    }
}