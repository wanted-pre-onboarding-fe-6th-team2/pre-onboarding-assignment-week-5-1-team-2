import React, { useEffect, useState } from 'react';
import searchApiService from '@/api/search';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    const searchResults = async () => {
      const response = await searchApiService.getSearch({ keyword });
      setResults(response);
    };
    searchResults();
  }, [keyword]);
  return (
    <div>
      <input onChange={e => setKeyword(e.target.value)} />
      {results.map(result => (
        <div key={result.sickCd}>{result.sickNm}</div>
      ))}
    </div>
  );
};

export default Home;
