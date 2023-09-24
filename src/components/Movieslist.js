import React from 'react';

function Movieslist({ movieList }) {
  return (
    <section>
      {movieList.length>0&&
      <ul className='styled w-100 pl-0' data-testid='moviesList'>
{movieList
  .sort((a, b) => b.duration - a.duration) // Sort in descending order by duration
  .map((data, index) => (
    <li
      key={index}
      className='flex slide-up-fade-in justify-content-between'
      style={{ borderBottom: '2px solid var(--primary-color)' }}
    >
      <div className='layout-column w-40'>
        <h3 className='my-3'>{data.name}</h3>
        <p className='my-0'>Ratings: {data.rating}/100</p>
      </div>
      <div className='layout-row my-auto mr-20'>
        <p className='justify-content-end'>{data.duration} Hrs</p>
      </div>
    </li>
  ))}

      </ul>
}
    </section>
  );
}

export default Movieslist;
