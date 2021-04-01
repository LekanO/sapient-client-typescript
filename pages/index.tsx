import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import Users from './users';

import QUERY_NAMES from '../query/namesQuery.graphql';

interface Props {

}


const Home: React.FC <Props> = () => {

  const { data, loading, error } = useQuery(QUERY_NAMES);

  const [names, setNames] = useState([data])

  useEffect(() => {
    if(data) {
      setNames(data)
    }
  }, [])
 

  // make sure all data is loaded
  if (loading) {
    return <p className="ui container center header" style={{textAlign: 'center', margin: '20px'}}>loading...</p>;
  }


  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  // if all good return data
  return (
    <div className="ui container">
      <h1 className="ui container center header" style={{textAlign: 'center', margin: '20px'}}>Names</h1>
      <div>
        <div className="ui four stackable cards">
          {data.name.map((n) => (
            <div className="card" key={n.name}>
                <div className="content">
                    <div className="center aligned header"> </div>
                    <div className="center aligned description" style={{ color: '#8B0000', }}>
                        <span><b>{n.name}</b></span>
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author" style={{ color: '#8B0000' }}>
                        <span> <p> {n.address1}</p></span>
                        <span> <p> {n.address2}</p></span>
                        <span> <p> {n.city}</p></span>
                        <span> <p> {n.country}</p></span>
                        <span> <p> {n.zip_code}</p></span>
                        <span> <p> {n.email}</p></span>
                        <span> <p> {n.tel}</p></span>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home