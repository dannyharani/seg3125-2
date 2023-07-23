import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ReviewForm({color}) {

    const [starCount, setStarCount] = useState(0);
    const [arrStar, setArrStar] = useState([faStarRegular, faStarRegular, faStarRegular, faStarRegular, faStarRegular])

    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");
    
    const handleUsername = (e) => {
        setUsername(e.target.value)
    } 
    const handleTitle = (e) => {
        setTitle(e.target.value)
    } 
    const handleReview = (e) => {
        setReview(e.target.value);
    } 
    
    const validateEntries = () => {
        if (username.length === 0 || title.length === 0 || review.length === 0) {
            alert("Make sure to fill in all required fields");
            return;
        }

        alert("Your post will be reviewed and posted when it is verified. Thank you!");
        window.location.reload(false);
    }

    return (
        <div className="innerReviewForm">
            <input value={username} onChange={handleUsername} className="usernameInput" type="text" placeholder="UserName" />
            <div className="starRate">
                <span onClick={() => {setStarCount(1); setArrStar([faStar, faStarRegular, faStarRegular, faStarRegular, faStarRegular])}} style={{ color:'#D96417', display:'inline'}}>
                    <FontAwesomeIcon icon={arrStar[0]} style={{color: "#D96417", 'font-size':'20px'}} />
                </span>
                <span onClick={() => {setStarCount(2); setArrStar([faStar, faStar, faStarRegular, faStarRegular, faStarRegular])}} style={{ color:'#D96417', display:'inline'}}>
                    <FontAwesomeIcon icon={arrStar[1]} style={{color: "#D96417", 'font-size':'20px'}} />
                </span>
                <span onClick={() => {setStarCount(3); setArrStar([faStar, faStar, faStar, faStarRegular, faStarRegular])}} style={{ color:'#D96417', display:'inline'}}>
                    <FontAwesomeIcon icon={arrStar[2]} style={{color: "#D96417", 'font-size':'20px'}} />
                </span>
                <span onClick={() => {setStarCount(4); setArrStar([faStar, faStar, faStar, faStar, faStarRegular])}} style={{ color:'#D96417', display:'inline'}}>
                    <FontAwesomeIcon icon={arrStar[3]} style={{color: "#D96417", 'font-size':'20px'}} />
                </span>
                <span onClick={() => {setStarCount(5); setArrStar([faStar, faStar, faStar, faStar, faStar])}} style={{ color:'#D96417', display:'inline'}}>
                    <FontAwesomeIcon icon={arrStar[4]} style={{color: "#D96417", 'font-size':'20px'}} />
                </span>
                {starCount}
            </div>
            <input value={title} onChange={handleTitle} className="titleInput" type="text" placeholder="Title" />
            <textarea value={review} onChange={handleReview} className="reviewInput" type="text" placeholder="Write a Comment" rows="5" />
            
            <div className="submitBtn" onClick={() => validateEntries()}>Submit</div>
        </div>
    );
}

export default ReviewForm