import {DELETE_ARTICLE, SORT_ARTICLES} from '../constants';
import {articles as defaultArticles} from '../data';

export default(articles = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article._id !== payload.id)
        case SORT_ARTICLES:
            return articles.map(article => {
                article.visible = true

                // if(payload.field === null) return articles;
                // return article.type_of_material === payload.field
            })
    }

    return articles
}