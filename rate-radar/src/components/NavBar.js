import movieReel from './../imgs/movieReel.svg'
import tvShow from './../imgs/tvShows.svg'
import music from './../imgs/music.svg'
import book from './../imgs/book.svg'
import { useNavigate } from 'react-router-dom'

function NavBar() {

  let navigate = useNavigate();
  const routeChange = (mediaType) => {
      let path = '/?mediaType=' + mediaType;
      navigate(path);
      window.location.reload(false);
  }
  
  return (
    <div className="navbar">
      <div className="navItem" onClick={() => routeChange('movies')}>
        <img src={movieReel} alt="" width={40} height={40}/>
        <p className="navText">Movies</p>
      </div>
      <div className="navItem" onClick={() => routeChange('tv_shows')}>
        <img src={tvShow} alt="" width={40} height={40}/>
        <p className="navText">TV Shows</p>
      </div>
      <div className="navItem" onClick={() => routeChange('podcasts')}>
        <img src={music} alt="" width={40} height={40}/>
        <p className="navText">Podcasts</p>
      </div>
      <div className="navItem" onClick={() => routeChange('books')}>
        <img src={book} alt="" width={40} height={40}/>
        <p className="navText">Books</p>
      </div>
    </div>
  );
}

export default NavBar