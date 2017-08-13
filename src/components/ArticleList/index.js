import React, {Component, PropTypes} from 'react';
import Article from '../Article/index';
import './style.css';
import Select from 'react-select';

import accordion from '../../decorators/accordion';
class ArticleList extends Component {
        state = {
                selection: null
        }

        selectValue = (val) => {
                this.setState({
                        selection: val
                })
        }

        render() {
                const {articles} = this.props;
                const options = articles.map(article => {
                        return {value: article._id, label: article.snippet}
                })


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

export default accordion(ArticleList);