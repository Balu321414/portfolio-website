import React from 'react';
import { marked } from 'marked';

const MarkdownPost = ({ content }) => {
  const createMarkup = () => {
    return { __html: marked(content) };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default MarkdownPost;
