import React, {Component} from 'react';
import Article from '../Article/Article';
import './ArticleList.css';
import {articles} from '../../data'
export default class ArticleList extends Component {
        state = {
                openArticleId: null
        }

        render() {
                // const articles = articles;
                console.log(articles)

                const articleElements = articles.map((article) => {
                        return <div key={article._id} className="ArticleList__item">
                                
                                {<Article article={article} isOpent="false"/>}
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

        // toggleOpenArticle = (id) => {
        //         this.setState({
        //                 openArticleId = id
        //         })
        // }
}