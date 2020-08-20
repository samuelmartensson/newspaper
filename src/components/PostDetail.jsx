import React from 'react';
import { Link } from 'react-router-dom';

export default function PostDetail({ url, date, path, uid }) {
  return (
    <div className="post post-detail">
      <div className="post__info-wrap">
        <Link
          to={{ pathname: `${path}/${uid}`, search: url, url: url }}
          className="post__title"
        >
          {url}
        </Link>
        <p>{date}</p>
      </div>
    </div>
  );
}
