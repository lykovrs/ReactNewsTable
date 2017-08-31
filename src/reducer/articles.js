import {DELETE_ARTICLE, SORT_ARTICLES, CLEAR_SORT} from '../constants';
import {articles as defaultArticles} from '../data';

export default(articles = defaultArticles, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article._id !== payload.id)
        case SORT_ARTICLES:
            return articles.map(article => {
                if (article.type_of_material === payload.field) {
                    article.show = true
                } else {
                    article.show = false
                }
                return article
            })
        case CLEAR_SORT:
            return articles.map(article => {
                article.show = true
                return article
            })

        default:
            return articles
    }
}