import React, { useState, useEffect } from 'react';
import PostDetail from '../components/PostDetail';
import Loader from '../components/Loader';

export default function PostDetailPage(props) {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = props.location.url
    ? props.location.url
    : props.location.search.replace('?', '');
  const path = props.location.pathname;
  console.log(url);
  console.log(props);

  useEffect(() => {
    function fetchData() {
      fetch(url)
        .then((results) => results.json())
        .then((data) => {
          setIssues(data.issues);
          setIsLoading(false);
        });
    }
    fetchData();
  }, []);
  return (
    <div className="post-detail-page">
      {isLoading && <Loader />}
      <h1>Issues</h1>
      {issues.map((item, i) => {
        return (
          <PostDetail
            key={i}
            url={item.url}
            date={item.date_issued}
            path={path}
            uid={item.date_issued}
          />
        );
      })}
    </div>
  );
}
