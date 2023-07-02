import Pill from "../../Pill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import SmallCard from "../SmallCard";
import UserReviews from "../UserReview";

function MediaDescription (mediaAddr) {
    return (
        <div className="Home">
            <div>
                <h2>Description</h2>
            </div>
            <div className="mediaDesc">
                <div className="leftMediaDesc">
                    <img alt="" className="tmpImage" style={{width:150, height: 150}}/>
                    <div className="pillContainer">
                        <Pill text={"Random"}/>
                        <Pill text={"Random"}/>
                        <Pill text={"Random"}/>
                        <Pill text={"Random"}/>
                    </div>
                </div>
                <div className="rightMediaDesc">
                    <h3 className="descTitle">
                        Movie Title
                    </h3>
                    <p>
                    Descriptive Text about the media described above. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <div>
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#ffcf23",}} />
                    </div>
                </div>
            </div>
            <div className='YourPicks'>
                <h2>Cast</h2>
                <div className='YourPicksRows castRows'>
                    <div className='row'>
                        <SmallCard image={"#"} title={'Title'}/>
                        <SmallCard image={"#"} title={'Title'}/>
                        <SmallCard image={"#"} title={'Title'}/>
                    </div>
                    <div className='row'>
                        <SmallCard image={"#"} title={'Title'}/>
                        <SmallCard image={"#"} title={'Title'}/>
                        <SmallCard image={"#"} title={'Title'}/>
                    </div>
                    <div className='row'>
                        <SmallCard image={"#"} title={'Title'}/>
                        <SmallCard image={"#"} title={'Title'}/>
                        <SmallCard image={"#"} title={'Title'}/>
                    </div>
                </div>
            </div>
            <div>
                <h2>User Reviews</h2>
                <div className='userReviews'>
                    <UserReviews/>
                    <UserReviews/>
                    <UserReviews/>
                </div>
            </div>
        </div>
    );
}

export default MediaDescription;