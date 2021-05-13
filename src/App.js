import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import paginate from './utils'
function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  function handlePage(indx) {
    setPage(indx)
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1
      if (newPage > data.length - 1) {
        newPage = 0
      }
      console.log(newPage, data.length);
      return newPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  return <main>
    <div className="section-title">
      <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {followers.map(follower => {
          return <Follower key={follower.id} {...follower} />
        })}
      </div>
      {!loading && <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>Prev</button>
        {data.map((item, index) => {
          return <button key={index} className={`${index === page ? "page-btn active-btn" : "page-btn "}`} onClick={() => handlePage(index)}> {index + 1}</button>
        })}
        <button className="next-btn" onClick={nextPage}>Next</button>

      </div>}
    </section>
  </main>
}
export default App
