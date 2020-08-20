import React from 'react';
import { Link } from 'react-router-dom';

export default function PostDetail({ url, path, uid, nr }) {
  return (
    <div className="post post-detail">
      <div className="post__info-wrap">
        <p>{url}</p>
        <Link
          to={{ pathname: `${path}/${uid}`, search: url, url: url }}
          className="post__title"
        >
          {nr}
        </Link>
      </div>
    </div>
  );
}
