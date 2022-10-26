import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams()
  // console.log(id)
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    if (response === 'false') {
      setError({ show: true, msg: data.Error })
      setIsLoading(false)
    } else {
      setMovie(data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id])

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
