import React, { useState } from 'react'

function Movieform({ SetData }) {
  const [name, setMovieName] = useState();
  const [rating, setMovieRating] = useState();
  const [ratingError, setMovieRatingError] = useState(false);
  const [rawDuration, setMovieRawDuration] = useState();
  const [duration, setMovieDuration] = useState();
  const FetchedData = () => {
    if (name && rating && rawDuration) {
      const duratio = parseDuration(rawDuration);
      if (!duratio) {
        setMovieRatingError(true);
        return;
      }
      setMovieDuration(duratio);
      const newMovie = { name, rating, duration:duratio };
      SetData(newMovie)
    }
    return;
  };

  function parseDuration(input) {
    const numericValue = parseFloat(input);
    if (input.includes('h')) {
      return numericValue; // Duration is already in hours
    } else if (input.includes('m')) {
      return (numericValue / 60).toFixed(1); // Convert minutes to hours
    }

    return null; // Invalid input
  }

  const handleDurationChange = (e) => {
    const input = e?.target?.value;
    setMovieRawDuration(input);
    setMovieRatingError(false)
  };
  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={e => e.preventDefault()}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              onChange={(e) => setMovieName(e.target.value)}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input
              type='number'
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              onChange={(e) => setMovieRating(e.target.value)}
              max={100}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input
              type='text'
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              onChange={handleDurationChange}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {ratingError &&
            <div
              className='alert error mb-30'
              data-testid='alert'
            >
              Please specify time in hours or minutes (e.g. 2.5h or 150m)
            </div>
          }
          <div className='layout-row justify-content-end'>
            <button
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={FetchedData}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Movieform
