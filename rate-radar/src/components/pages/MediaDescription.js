import Pill from "../../Pill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import SmallCard from "../SmallCard";
import UserReviews from "../UserReview";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons"

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
                    {
                        Array.from({ length: 5 }, (_, index) => (
                            <span key={index} style={{ color:'#D96417', display:'inline'}}>
                                <FontAwesomeIcon icon={faStar} style={{color: "#D96417"}} />
                            </span>
                        ))
                    }
                    {
                        Array.from({ length: 5-5 }, (_, index) => (
                            <span key={index} style={{ color:'#D96417', display:'inline'}}>
                                <FontAwesomeIcon icon={faStarRegular} style={{color: "#D96417",}} />
                            </span>
                        ))
                    }
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
                    <UserReviews reviewer={"Random Reviewer"} title={"Review Title"} review={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} stars={3}/>
                    <UserReviews reviewer={"Random Reviewer"} title={"Review Title"} review={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} stars={4}/>
                    <UserReviews reviewer={"Random Reviewer"} title={"Review Title"} review={"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."} stars={5}/>
                </div>
            </div>
        </div>
    );
}

export default MediaDescription;