import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

function UserReviews ()
{
    return (
        <div>
            <div>
                <img alt=""/>
                <p>Reviewer</p>
                <div>
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                </div>
            </div>
            <h3>Review Title</h3>
            <p>User Written review about the media described above. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
    );
}

export default UserReviews;