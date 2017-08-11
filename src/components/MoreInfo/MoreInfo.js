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
        const {info, clickHandler, isOpen} = this.props;
        return (
            <div className="MoreInfo">
                <button onClick={clickHandler}>{this.state.buttonText}</button>
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
        if (!isOpen) 
            return false;
        
        return (
            <section className="MoreInfo__body">
                <p>Word count: {this.props.info.word_count}</p>
                <p>Type: {this.props.info.type_of_material}</p>
            </section>
        )

    }
}

export default toggleOpen(MoreInfo)
