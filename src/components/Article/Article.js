import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Article.css';

export default class Article extends Component {
    constructor(props) {
        super(props)
        // Если состояние статьи определяется из вне, берем это значение
        this.state = {
            isOpen: this.props.defaultOpen
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
            <section>
                <p>{article.description}</p>
                <img src={article.urlToImage} alt=""/>
            </section>
        )

    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
        publishedAt: PropTypes.string.isRequired
    })
}