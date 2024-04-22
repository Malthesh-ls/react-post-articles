import React from 'react';
import Loading from '../components/common/Loading';
import Card from '../components/common/Card';
import useFetch from '../hooks/useFetch';
import Constants from '../config/constants';
import ErrorMessage from '../components/common/ErrorMessage';
import { mapArticles } from '../utils/mappers/mapArticles';

function Home() {
  const { data, loading, error } = useFetch(`${Constants.API.URL}?api-key=${Constants.API.KEY}`);

  return (
    <div>
      <div className="section">
        {loading && <Loading />}
        {error && data && !data.results && < ErrorMessage />}
        {data && <Card items={mapArticles(data.results)} />}
      </div>
    </div>
  );
}

export default Home;
