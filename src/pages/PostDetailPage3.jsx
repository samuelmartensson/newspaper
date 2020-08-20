import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

export default function PostDetailPage(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = props.location.url
    ? props.location.url
    : props.location.search.replace('?', '');
  const id = props.location.id;

  useEffect(() => {
    function fetchData() {
      fetch(url)
        .then((results) => results.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        });
    }
    fetchData();
  }, [id]);
  return (
    <div className="post-detail-page">
      {isLoading && <Loader />}
      <h1>PDF</h1>
      <p>
        <a href={data.pdf}>PDF</a>
      </p>
    </div>
  );
}
