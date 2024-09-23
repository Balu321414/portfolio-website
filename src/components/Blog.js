import React, { useState, useEffect } from 'react';
import MarkdownPost from './MarkdownPost';

const Blog = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('/markdown/post1.md')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }, []);

  return (
    <div className="blog-post">
      <h2>Latest Blog Post</h2>
      {markdownContent ? <MarkdownPost content={markdownContent} /> : <p>Loading...</p>}
    </div>
  );
};

export default Blog;
