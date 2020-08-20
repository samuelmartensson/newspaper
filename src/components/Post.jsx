import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({ title, url, id }) {
  return (
    <div className="post">
      <div className="post__info-wrap">
        <Link
          to={{ pathname: `/paper/${id}`, search: url, url: url }}
          className="post__title"
        >
          {title}
        </Link>
      </div>
    </div>
  );
}
