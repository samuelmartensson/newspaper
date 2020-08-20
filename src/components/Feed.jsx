import React, { useState, useEffect } from 'react';
import Post from './Post';
import Loader from './Loader';

export default function Feed() {
  const [data, setData] = useState([]);
  const [newspapers, setNewspapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://chroniclingamerica.loc.gov/newspapers.json')
      .then((results) => results.json())
      .then((json) => {
        setData(json);
        setNewspapers(json.newspapers);
        setIsLoading(false);
        document.querySelector('.feed').classList.add('fade-in');
      });
  }, []);
  return (
    <div className="feed">
      {isLoading && <Loader />}
      {newspapers.map((item, i) => {
        if (i <= 10) {
          return (
            <Post key={i} title={item.title} url={item.url} id={item.lccn} />
          );
        }
        return null;
      })}
    </div>
  );
}
