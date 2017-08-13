import React, {Component, PropTypes} from 'react';
import Article from '../Article/Article';
import './ArticleList.css';
import Select from 'react-select';

import accordion from '../../decorators/accordion';
class ArticleList extends Component {

        render() {
                const {articles} = this.props;
                const items = {};
                const result = [];

                // Считаем типы материалов по колличеству и уникальности
                articles.forEach((item) => {
                        if (item.type_of_material in items) {
                                items[item.type_of_material] += 1;
                        } else {
                                items[item.type_of_material] = 1;
                        }
                })

                for (let key in items) {
                        result.push({value: key, label: key})
                }

                function logChange(val) {
                        console.log("Selected: " + JSON.stringify(val));
                }
       
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
                                <div className="ArticleList__select">
                                        <Select value="News" name="form-field-name" options={result} onChange={logChange}/>
                                </div>

                                <div className="ArticleList__body">
                                        {articleElements}
                                </div>
                        </div>

                );
        }

}

export default accordion(ArticleList);