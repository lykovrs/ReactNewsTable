import React, {Component} from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../../decorators/toggleOpen'

class MoreInfo extends Component {
    static propTypes = {
        info: PropTypes.shape({word_count: PropTypes.number.isRequired, type_of_material: PropTypes.text}),

        isOpen: PropTypes.bool,
        clickHandler: PropTypes.func
    }

    state = {
        buttonText: 'Show more information'
    }

    render() {
        const {info, isOpen} = this.props;
        return (
            <div className="MoreInfo">
                <button onClick={this.changeState}>{this.state.buttonText}</button>
                {this.getBody(isOpen)}
            </div>
        );
    }

    /**
     * Получаем дополнительную информацию в зависимости от текущего стейта
     *
     * @memberof MoreInfo
     */
    getBody = (isOpen) => {
        const {info} = this.props;
        if (!isOpen) 
            return false;
        
        return (
            <section className="MoreInfo__body">
                <p>Word count: {info.word_count}</p>
                <p>Type: {info.type_of_material}</p>
            </section>
        )

    }

    changeState = () => {
        const {clickHandler, isOpen} = this.props;
        clickHandler();
        if (isOpen) {
            this.setState({buttonText: 'Show more information'})
        } else {
            this.setState({buttonText: 'Hide more information'})
        }
    }
}

export default toggleOpen(MoreInfo)
