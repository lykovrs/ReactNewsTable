import {INCREMENT, DELETE_ARTICLE, SORT_ARTICLES, CLEAR_SORT} from '../constants';

export function increment() {
    return {type: INCREMENT}
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE, 
        payload: {id}
    }
}

export function sortArticles(field) {
    return {
        type: SORT_ARTICLES,
        payload: {field}
    }
}

export function clearSorting() {
    return {
        type: CLEAR_SORT
    }
}