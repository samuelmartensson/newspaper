import React, { useState, useEffect } from 'react';
import PostDetail2 from '../components/PostDetail2';
import Loader from '../components/Loader';

export default function PostDetailPage(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = props.location.url
    ? props.location.url
    : props.location.search.replace('?', '');
  const path = props.location.pathname;
  console.log(props);
  useEffect(() => {
    function fetchData() {
      fetch(url)
        .then((results) => results.json())
        .then((data) => {
          setData(data.pages);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="post-detail-page">
      {isLoading && <Loader />}
      <h1>Pages</h1>
      {data.map((item, i) => {
        return (
          <PostDetail2
            key={i}
            url={item.url}
            path={path}
            uid={item.sequence}
            nr={item.sequence}
          />
        );
      })}
    </div>
  );
}
