import React from 'react'
import Article from './Article';

export default function ArticleList(props) {
    const articles = props.posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date || "January 1, 1970"}
          preview={post.preview}
        >
            
        </Article>
      ));
    
      return (
        <main>
          {articles}
        </main>
      );
    }