import React,{useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
const [movieList,setMovieList]=useState([]);
const [filterdList,setFilteredList]=useState([]);
const [noResultFound,setNoResultFound]=useState(false);
const SetData =  (data) =>{
  const length=movieList.length+1;
  setMovieList((prevMovieList) => [
    ...prevMovieList,
    data, // Append the new movie to the existing list
  ]);

    setFilteredList((prevMovieList) => [
      ...prevMovieList,
      data, // Append the new movie to the existing list
    ]);
}
const SeacrhData = (value) =>{
  if(value?.length>=2)
  {
    const sortedMovies=movieList.filter((res=>res?.name?.toLowerCase().includes(value.toLowerCase())));
    setFilteredList(sortedMovies);
    if(!sortedMovies.length)
    {
      setNoResultFound(true);
    }else{
      setNoResultFound(false);

    }
  }else{
    setFilteredList(movieList)
    if(!movieList.length)
    {
      setNoResultFound(true);
    }else{
      setNoResultFound(false);
    }
  }
}

console.log("movieList",movieList);
console.log("movieList",filterdList);
  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform SetData={SetData} movieList={movieList}/>
        </div>
        <div className='layout-column w-30'>
          <Search SeacrhData={SeacrhData}/>
          <Movieslist movieList={filterdList}/> 
          {noResultFound&&
          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
}
        </div>
      </div> 
    </div>
  )
}

export default App;
