import movieReel from './../imgs/movieReel.svg'
import tvShow from './../imgs/tvShows.svg'
import music from './../imgs/music.svg'
import book from './../imgs/book.svg'

function NavBar() {
  return (
    <div className="navbar">
      <div className="navItem">
        <img src={movieReel} alt="" width={40} height={40}/>
        <p className="navText">Movies</p>
      </div>
      <div className="navItem">
        <img src={tvShow} alt="" width={40} height={40}/>
        <p className="navText">TV Shows</p>
      </div>
      <div className="navItem">
        <img src={music} alt="" width={40} height={40}/>
        <p className="navText">Music</p>
      </div>
      <div className="navItem">
        <img src={book} alt="" width={40} height={40}/>
        <p className="navText">Books</p>
      </div>
    </div>
  );
}

export default NavBar