import React from 'react'
import { useParams, Link } from 'react-router-dom'
// import { API_ENDPOINT } from './context'
import useFetch from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()
  // console.log(id)
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  if (isLoading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          {' '}
          back to home
        </Link>
      </div>
    )
  }
  const {
    Poster: poster,
    Title: title,
    Genre: rate,
    Released: release,
    Plot: plot,
    BoxOffice: bo,
  } = movie
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h3> {rate}</h3>
        <h5>Release : {release}</h5>
        <h5>income : {bo}</h5>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
