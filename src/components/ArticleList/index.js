import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';
import './style.css';
import Select from 'react-select';
import {connect} from 'react-redux';
import {deleteArticle, sortArticles, clearSorting} from '../../AC';

import accordion from '../../decorators/accordion';
class ArticleList extends Component {
        static propTypes = {
                articles: PropTypes.array
        }

        state = {
                selection: null
        }

        selectValue = (val) => {
                this.setState({selection: val})

                val
                        ? this
                                .props
                                .sortArticles(val.value)
                        : this
                                .props
                                .clearSorting()

        }

        /**
         * Удаляет статью
         *
         * @memberof Article
         */
        deleteArticle = id => action => {
                this
                        .props
                        .deleteArticle(id)
        }

        render() {
                const {articles} = this.props;
                const articleTypes = {};
                articles.forEach(article => {
                        articleTypes[article.type_of_material] = null
                });

                const options = [];

                for (var key in articleTypes) {
                        if (articleTypes.hasOwnProperty(key)) {
                                options.push({label: key, value: key});
                        }
                }

                const articleElements = articles.map((article) => {
                        return <div key={article._id} className="ArticleList__item">

                                {< Article
                                article = {
                                        article
                                }

                                onDelete = {
                                        this.deleteArticle(article._id)
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
                                <div className="ArticleList__select">
                                        <Select
                                                value={this.state.selection}
                                                name="form-field-name"
                                                options={options}
                                                onChange={this.selectValue}/>
                                </div>

                                <div className="ArticleList__body">
                                        {articleElements}
                                </div>
                        </div>

                );
        }

}

export default connect(null, {deleteArticle, sortArticles, clearSorting})(accordion(ArticleList))
