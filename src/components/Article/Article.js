import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            headline: PropTypes.shape({
              main: PropTypes.string.isRequired  
            }),
            web_url: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            pub_date: PropTypes.string.isRequired,
            word_count: PropTypes.number.isRequired
        }),

        isOpen: PropTypes.bool
    }

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    render() {
        const {article} = this.props
        return (
            <div className="Article">
                <h3 onClick={this.toggleArticle}>{article.headline.main}</h3>
                {this.getBody()}
            </div>

        );
    }
    /**
     * Открываем/прячем статью
     *
     * @memberof Article
     */
    toggleArticle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    /**
     * Получаем тело статьи в зависимости от текущего стейта
     *
     * @memberof Article
     */
    getBody = () => {
        const {article} = this.props
        if (!this.state.isOpen) 
            return false;
        
        return (
            <section className="Article__body">
                <a href={article.web_url}>{article.source}</a>
                <p>Public date: {article.pub_date}</p>
                <p>Word count: {article.word_count}</p>
            </section>
        )

    }
}
