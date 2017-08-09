import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            urlToImage: PropTypes.string.isRequired,
            publishedAt: PropTypes.string.isRequired
        })
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
                <h3 onClick={this.toggleArticle}>{article.title}</h3>
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
                <a href={article.url}>{article.description}</a>
                <img src={article.urlToImage} alt=""/>
            </section>
        )

    }
}
