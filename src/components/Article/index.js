import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import MoreInfo from '../MoreInfo';
import Moment from 'react-moment';

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            headline: PropTypes.shape({main: PropTypes.string.isRequired}),
            web_url: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            pub_date: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired
        }),
        onDelete: PropTypes.func,
        isOpen: PropTypes.bool,
        toggleHandler: PropTypes.func
    }

    render() {
        const {article, toggleHandler, isOpen} = this.props

        return (
            <div className="Article">
                <h3 className="Article__header" onClick={toggleHandler}>{article.headline.main}</h3>
                <button onClick={this.props.onDelete}>Delete item</button>
                {this.getBody(isOpen)}
                

            </div>

        );
    }
    /**
     * Оптимизация перестроения компонена
     *
     * @param {any} nextProps
     * @param {any} nextState
     * @returns
     * @memberof Article
     */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isOpen !== nextProps.isOpen;
    }

    /**
     * Получаем тело статьи в зависимости от текущего стейта
     *
     * @memberof Article
     */
    getBody = (isOpen) => {
        const {article} = this.props
        if (!isOpen) 
            return false;
        
        return (
            <section className="Article__body">
                <a href={article.web_url}>{article.source}</a>
                <p>Public date: <Moment format="YYYY/MM/DD">{article.pub_date}</Moment></p>

                <MoreInfo info={article}/>
            </section>
        )

    }
} 

export default Article
