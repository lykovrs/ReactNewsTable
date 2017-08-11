import React, {Component} from 'react';

export default(Component) => class ToggleContainer extends Component {

    state = {
        isOpen: null
    }
    render() {
        return <Component
            {...this.props}
            {...this.state}
            clickHandler={this.toggleOpen}
            isOpen={this.state.isOpen}/>
    }

    /**
     * Если кликаем по заголовку новости,
     * остальные новости закрываются,
     * при двойном клике новости меняет состояние
     *
     * @memberof ItemList
     */
    toggleOpen = ev => {
        ev && ev.preventDefault()

        this.setState({
            isOpen: !this.state.isOpen
        })

    }
}