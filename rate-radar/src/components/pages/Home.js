import React from 'react';
import './../styles/Home.css'
import MainCard from '../MainCard';
import SmallCard from '../SmallCard';
import NavBar from '../NavBar';

function Home() {
    return(
        <div className='Home'>
            <div className='trending'>
                <h2>Trending</h2>
                <MainCard image={'#'} title={'Movie Title'} content={'Descriptive Text about the media described above...'} />
                <MainCard image={'#'} title={'Movie Title'} content={'Descriptive Text about the media described above...'} />
            </div>

            <div className='YourPicks'>
                <h2>Your Picks</h2>
                <div className='YourPicksRows'>
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

            <div className="discover">
                <h2>Discover</h2>
                <div className='YourPicksRows'>
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

            <NavBar />
        </div>
    );
}

export default Home;