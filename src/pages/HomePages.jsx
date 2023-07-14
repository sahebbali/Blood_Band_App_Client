import React from 'react'
import Layout from '../components/shared/Layout/Layout';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';

const HomePages = () => {
  const {error, loading} = useSelector((state)=>state.auth)
  return (
   <>
    
    <Layout>
    {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>Home Page</h1>
        </>
      )}
    </Layout>
   </>
  )
}

export default HomePages
