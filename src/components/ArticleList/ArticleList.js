import React, {Component, PropTypes} from 'react';
import Article from '../Article/Article';
import './ArticleList.css';
import {articles} from '../../data';
import accordion from '../../decorators/accordion';
class ArticleList extends Component {

        render() {

                const articleElements = articles.map((article) => {
                        return <div key={article._id} className="ArticleList__item">

                                {< Article
                                article = {
                                        article
                                }

                                isOpen = {
                                        article._id === this.props.openId
                                }
                                toggleHandler = {
                                        this
                                                .props
                                                .toggleHandler(article._id)
                                }

                                />}
                        </div>
                })

                return (
                        <div className="ArticleList">
                                <h2 className="ArticleList__header">Articles</h2>
                                <div className="ArticleList__body">
                                        {articleElements}
                                </div>
                        </div>

                );
        }

}

export default accordion(ArticleList);