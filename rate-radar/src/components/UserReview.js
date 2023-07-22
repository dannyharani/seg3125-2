import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faUser} from "@fortawesome/free-solid-svg-icons"
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons"

function UserReviews ({reviewer, title, review, stars})
{
    return (
        <div className="review-container">
            <div>
                <FontAwesomeIcon className="userImg" icon={faUser} style={{margin:'0', display:'inline'}}/>
                <div className="userAndStars" style={{display:'inline-block'}}>
                    <p>{reviewer}</p>
                    {
                        Array.from({ length: stars }, (_, index) => (
                            <span key={index} style={{ color:'#D96417', display:'inline'}}>
                                <FontAwesomeIcon icon={faStar} style={{color: "#D96417"}} />
                            </span>
                        ))
                    }
                    {
                        Array.from({ length: 5-stars }, (_, index) => (
                            <span key={index} style={{ color:'#D96417', display:'inline'}}>
                                <FontAwesomeIcon icon={faStarRegular} style={{color: "#D96417",}} />
                            </span>
                        ))
                    }
                </div>
            </div>
            <h3>{title}</h3>
            <p>{review}</p>
        </div>
    );
}

export default UserReviews;