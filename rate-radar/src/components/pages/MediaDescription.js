import Pill from "../../Pill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import SmallCard from "../SmallCard";
import UserReviews from "../UserReview";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons"
import jsonData from './../../Data/data';
import allRevData from './../../Data/reviews'
import ReviewForm from "./../ReviewForm";
import Back from "../Back";

function getCards(type, data)
{
    var arr = []
    if (type === 'movies') {
        for (let i = 0; i < data.actors.length; i++) {
            arr.push(<SmallCard title={data.actors[i]}/>);
        }
    } else if (type === 'tv_shows') {
        for (let i = 0; i < data.actors.length; i++) {
            arr.push(<SmallCard title={data.actors[i]}/>);
        }
    }
    return arr;
}

function genCrit(type) {
    var reviewData = allRevData[type];
    let rand = Math.floor(Math.random() * reviewData.length)

    return(<UserReviews color={"rgba(86, 193, 255, 0.354)"} title={reviewData[rand].title} reviewer={reviewData[rand].userName} stars={reviewData[rand].rating} review={reviewData[rand].review}/>)
}


function genReviews(type, color) {
    var arr = []
    var used = []

    var reviewData = allRevData[type];

    for (var i = 0; i < Math.floor(Math.random() * 7) + 3; i++) {
        var rand = Math.floor(Math.random() * reviewData.length);
        if (!used.includes(rand)) {
            arr.push(<UserReviews color={color} title={reviewData[rand].title} reviewer={reviewData[rand].userName} stars={reviewData[rand].rating} review={reviewData[rand].review}/>)
        }
    }

    return arr;
}

function getShadow(col) {
  
    if (col[0] == "#") {
        col = col.slice(1);
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) * 0.5;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) * 0.5;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) * 0.5;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (g | (b << 8) | (r << 16)).toString(16);
}

function MediaDescription () {

    /**
     * GETTING ALL FIELDS FOR THIS MEDIA
     */
    const queryParams = new URLSearchParams(window.location.search)
    const mediaType = decodeURIComponent(queryParams.get('mediaType'));
    const title = decodeURIComponent(queryParams.get('title'));
    const color = decodeURIComponent(queryParams.get('color'));
    const lang = decodeURIComponent(queryParams.get('lang'));

    const dataGeneric = jsonData[mediaType];
    var data, imgUrl, rating, stars, desc;

    
    for (var i = 0; i < dataGeneric.length; i++)
    {
        if (dataGeneric[i].title === title) {
            data = dataGeneric[i];
            rating = data.rating;
            stars = (rating*10)%10 > 5 ? Math.ceil(rating) : Math.floor(rating);
            desc = lang === 'true' ? data.description : data.translated_description;
            imgUrl = data.img;
            break;
        }
    }

    var pill1, pill2, pill3, pill4;

    if (mediaType === 'movies' || mediaType === 'tv_shows') {
        pill1 = data.genre.split(',')[0] !== undefined ? data.genre.split(',')[0] : "Genre"
        pill2 = data.genre.split(',')[1] !== undefined ? data.genre.split(',')[1] : "Genre"
        pill3 = data.streaming_services[0] !== undefined ? data.streaming_services[0] : "Stream"
        pill4 = data.streaming_services[1] !== undefined ? data.streaming_services[1] : "Stream"
    } else if (mediaType === 'books') {
        // rating genre episodes and host
        pill1 = data.genre
        pill2 = data.rating
        pill3 = data.publication_year
        pill4 = data.author
    } else if (mediaType === 'podcasts') {
        // rating genre episodes and host
        pill1 = data.genre
        pill2 = data.rating
        pill3 = data.episodes + ' eps'
        pill4 = data.host
    }

    if(mediaType === 'movies' || mediaType === 'tv_shows')
    {
        let shadow = getShadow(color);
        return (
            <div className="Home">
                <Back />
                <div>
                    <h2>Description</h2>
                </div>
                <div className="mediaDesc" style={{'backgroundColor':color}}>
                    <div className="leftMediaDesc">
                        <img src={imgUrl} title={"Cover image for " + title} alt={"Cover of " + title} className="tmpImage" style={{width:150, height: 150}}/>
                        <div className="pillContainer">
                            <Pill text={pill1}/>
                            <Pill text={pill2}/>
                            <Pill text={pill3}/>
                            <Pill text={pill4}/>
                        </div>
                    </div>
                    <div className="rightMediaDesc">
                        <h3 className="descTitle">
                            {title}
                        </h3>
                        <p>
                        {desc}
                        </p>
                        <div>
                        <p className="critiqueScore">Critique Score</p>
                        {
                            Array.from({ length: stars }, (_, index) => (
                                <span style={{ color:'#D96417', display:'inline'}}>
                                    <FontAwesomeIcon icon={faStar} style={{color: "#D96417"}} />
                                </span>
                            ))
                        }
                        {
                            Array.from({ length: 5-stars }, (_, index) => (
                                <span style={{ color:'#D96417', display:'inline'}}>
                                    <FontAwesomeIcon icon={faStarRegular} style={{color: "#D96417",}} />
                                </span>
                            ))
                        }
                        <p style={{display:'inline', 'margin-left':'5px'}}>{rating}</p>
                        </div>
                    </div>
                </div>
                <div className="trailer">
                    <h2>Trailers</h2>
                <center>
                    <iframe style={{boxShadow:'6px 6px 10px #' + shadow}} width="400" height="215" src="https://www.youtube.com/embed/KAOdjqyG37A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </center>
                </div>
               <div className='YourPicks'>
                    <h2>Cast</h2>
                    <div className="YourPicksRows">
                        <div className="row">
                            {getCards(mediaType, data)}
                        </div>
                    </div>
                </div> 
                <div>
                <div>
                    <h2>Write a Review</h2>
                    <div className="reviewForm" style={{'backgroundColor':color}}>
                        <ReviewForm color={color}/>
                    </div>
                </div>
                <div>
                    <h2>Top Critique Review</h2>
                    <div className='userReviews'>
                        {genCrit(mediaType)}
                    </div>
                </div>
                </div>
                <div>
                    <h2>User Reviews</h2>
                    <div className='userReviews'>
                        {genReviews(mediaType, color)}
                    </div>
                </div>
            </div>
        );
    } else 
    {
        return (
            <div className="Home">
                <Back />
                <div>
                    <h2>Description</h2>
                </div>
                <div className="mediaDesc" style={{'backgroundColor':color}}>
                    <div className="leftMediaDesc">
                        <img src={imgUrl} alt="" className="tmpImage" style={{width:150, height: 150}}/>
                        <div className="pillContainer">
                            <Pill text={pill1}/>
                            <Pill text={pill2}/>
                            <Pill text={pill3}/>
                            <Pill text={pill4}/>
                        </div>
                    </div>
                    <div className="rightMediaDesc">
                        <h3 className="descTitle">
                            {title}
                        </h3>
                        <p>
                        {desc}
                        </p>
                        <div>
                        {
                            Array.from({ length: stars }, (_, index) => (
                                <span key={index} style={{ 'margin-right':'3px', color:'#D96417', display:'inline'}}>
                                    <FontAwesomeIcon icon={faStar} style={{color: "#D96417"}} />
                                </span>
                            ))
                        }
                        {
                            Array.from({ length: 5-stars }, (_, index) => (
                                <span key={index} style={{'margin-right':'3px', color:'#D96417', display:'inline'}}>
                                    <FontAwesomeIcon icon={faStarRegular} style={{color: "#D96417",}} />
                                </span>
                            ))
                        }
                        <p style={{display:'inline', 'margin-left':'6px'}}>{rating}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Write a Review</h2>
                    <div className="reviewForm" style={{'backgroundColor':color}}>
                        <ReviewForm color={color}/>
                    </div>
                </div>
                <div>
                    <h2>User Reviews</h2>
                    <div className='userReviews'>
                        {genReviews(mediaType, color)}
                    </div>
                </div>
            </div>
        );
    }
}

export default MediaDescription;