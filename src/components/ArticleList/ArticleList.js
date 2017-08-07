import React, {Component} from 'react';
import Article from '../Article/Article';
import './ArticleList.css';

export default class ArticleList extends Component {
    render() {
        const articles = [
            {
                author: "Abhimanyu Ghoshal",
                title: "Googler’s anti-diversity manifesto highlights the need for diversity in tech",
                description: "&nbsp; Unlike most of us, people at Google had a less-than-relaxing weekend beca" +
                        "use of a document authored and shared widely within the company by a male employ" +
                        "ee. It was a 10-page ...",
                url: "https://thenextweb.com/google/2017/08/07/googlers-anti-diversity-manifesto-highl" +
                        "ights-the-need-for-diversity-in-tech/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/Google_ed.png",
                publishedAt: "2017-08-07T08:27:11Z"
            }, {
                author: "John Underkoffler",
                title: "3 things working on Minority Report’s UI taught me about business",
                description: "In the early 2000s, after building next-generation user interface systems at the" +
                        " MIT Media Lab and before founding my UI business, I had a brief stint as a scie" +
                        "nce and technology 'designer' ...",
                url: "https://thenextweb.com/contributors/2017/08/06/3-lessons-minority-report/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/minorityreport-e139" +
                        "8675023323.jpg",
                publishedAt: "2017-08-06T23:30:59Z"
            }, {
                author: "Rachel Kaser",
                title: "7 essential apps for anyone new to Android",
                description: "Whether you're a disillusioned Apple convert, or immigrating from an outdated Wi" +
                        "ndows phone, you might need help picking out your first batch of apps for your A" +
                        "ndroid device. The ...",
                url: "https://thenextweb.com/apps/2017/08/06/7-essential-apps-anyone-new-android/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/01/android.jpg",
                publishedAt: "2017-08-06T23:00:44Z"
            }, {
                author: "Carissa Lintao",
                title: "Here’s why VR will put movie theaters out of business",
                description: "Movie theaters are struggling to stay alive because popcorn costs more than admi" +
                        "ssion, Netflix exists, and no one wants to be surrounded by strangers. The alter" +
                        "native? Virtual reality. Before ...",
                url: "https://thenextweb.com/virtual-reality/2017/08/06/heres-why-vr-will-put-movie-th" +
                        "eaters-out-of-business/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/IMG00246-20101017-1" +
                        "101.jpg",
                publishedAt: "2017-08-06T20:30:50Z"
            }, {
                author: "Tristan Greene",
                title: "Get your brainstorm on with these mind-mapping apps for Android",
                description: "Mind maps are hierarchical diagrams presented in a way that help compartmentaliz" +
                        "e different aspects of a concept. You start with a central theme, idea, or goal," +
                        " and then add branches ...",
                url: "https://thenextweb.com/apps/2017/08/06/get-your-brainstorm-on-with-these-mind-ma" +
                        "pping-apps-for-android/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/mindjet-maps-1.png",
                publishedAt: "2017-08-06T19:00:12Z"
            }, {
                author: "Hamlet Batista",
                title: "How to win the SEO game when you don’t have time to play it",
                description: "SEO -- or search engine optimization -- is, like many things, too often taken fo" +
                        "r granted. The subtle nuances of SEO are often ignored with businesses all over " +
                        "the world incorrectly ...",
                url: "https://thenextweb.com/contributors/2017/08/06/win-seo-game-dont-time-play/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/How-to-Choose-an-SE" +
                        "O-Agency-in-NYC.jpg",
                publishedAt: "2017-08-06T16:30:07Z"
            }, {
                author: "TNW Deals",
                title: "Project Pro status awaits with this project management certification training fo" +
                        "r under $50",
                description: "If “The Apprentice” taught us nothing else, we at least learned that effective p" +
                        "roject management is the path to business success. It can even land you in the W" +
                        "hite House if you ...",
                url: "https://thenextweb.com/offers/2017/08/06/project-pro-status-awaits-with-this-pro" +
                        "ject-management-certification-training-for-under-50/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/1Pm6jaf-1.jpg",
                publishedAt: "2017-08-06T16:00:00Z"
            }, {
                author: "Patrick Panuncillon",
                title: "5 ways sentiment analysis can boost your business",
                description: "If someone was talking about you, would you bother to find out what they were sa" +
                        "ying? It could be yes or no for you. However, for businesses, there’s only one o" +
                        "ption -- it’s always ...",
                url: "https://thenextweb.com/contributors/2017/08/06/5-ways-sentiment-analysis-can-boo" +
                        "st-business/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/Slider-Sentiment-46" +
                        "8x340.png",
                publishedAt: "2017-08-06T12:30:35Z"
            }, {
                author: "Miles Klee",
                title: "This site is like Reddit for growing beards – but for guys with facial hair inse" +
                        "curities",
                description: "To the casual observer, perhaps, a beard or mustache is just something bristly o" +
                        "n one’s face, but for the men on Beard Board, it’s a “Journey,” or even a truste" +
                        "d friend. In ...",
                url: "https://melmagazine.com/growing-your-first-beard-is-hard-these-men-on-the-intern" +
                        "et-are-here-to-help-afa62660c50e",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/mel-1.jpeg",
                publishedAt: "2017-08-06T11:00:35Z"
            }, {
                author: "Emmanuel Nataf",
                title: "5 reasons why developing a writing routine could help you be a better entreprene" +
                        "ur",
                description: "When you’re a startup founder or an entrepreneur, you work under so much pressur" +
                        "e and have so many different issues to deal with, the thought of adding an extra" +
                        " activity to your plate ...",
                url: "https://thenextweb.com/contributors/2017/08/05/5-reasons-developing-writing-rout" +
                        "ine-help-better-entrepreneur/",
                urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/hands-coffee-cup-ap" +
                        "ple.jpg",
                publishedAt: "2017-08-05T23:30:05Z"
            }
        ];

        const articleElements = articles.map((article) => {
                return <div key={article.url} className="ArticleList__item">
                        <Article article={article}/></div>
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
}