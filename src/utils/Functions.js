import React from 'react';
import ArticleListCard from '../components/ArticleListCard';

 export const articleListFunc = articles.map((article) => {
    return (
        <ArticleListCard id={article.article_id} title={article.title} author={article.author} topic={article.topic} date={article.created_at} votes={article.votes} 
        commentCount={article.comment_count} body={article.body} articleImage={article.article_img_url} />
    );
});
