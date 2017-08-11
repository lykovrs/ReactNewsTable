import React, {Component} from 'react';
import Article from '../Article/Article';
import './ArticleList.css';
import {articles} from '../../data'
export default class ArticleList extends Component {
        state = {
                openArticleId: null
        }

        render() {

                const articleElements = articles.map((article) => {
                        return <div key={article._id} className="ArticleList__item">

                                {< Article
                                article = {
                                        article
                                }
                                isOpen = {
                                        article._id === this.state.openArticleId
                                }
                                toggleHandler = {
                                        this.toggleOpenArticle(article._id)
                                }
                                />}
                        </div>
                })

                return (
                        <div className="ArticleList">
                                <h2 className="ArticleList__header">ArticleList</h2>
                                <div className="ArticleList__body">
                                        {articleElements}
                                </div>
                        </div>

                );
        }
        /**
         * Если кликаем по заголовку новости,
         * остальные новости закрываются,
         * при двойном клике новости меняет состояние
         *
         * @memberof ArticleList
         */
        toggleOpenArticle = openArticleId => ev => {
                ev && ev.preventDefault()
                if (openArticleId === this.state.openArticleId) {
                        this.setState({openArticleId: null})
                } else {
                        this.setState({openArticleId})
                }

        }
}