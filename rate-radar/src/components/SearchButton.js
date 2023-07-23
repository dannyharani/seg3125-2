import { useNavigate } from "react-router-dom";

function SearchButton({type, lang}) {

  let navigate = useNavigate();
  const routeChange = (mediaType) => {
      let path = '/search?mediaType=' + type;
      navigate(path)
  }

  return (
    <div className="searchButton">
        <h1 onClick={routeChange} >{lang ? 'Search' : 'Recherche'} {type.toString().replace('_', ' ')}</h1>
    </div>
  );
}

export default SearchButton;