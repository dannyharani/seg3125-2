import React from 'react';
import { useState } from 'react';
import './../styles/Home.css'
import MainCard from '../MainCard';
import SmallCard from '../SmallCard';
import data from './../../Data/data';

function trending() {
    let arr = [];
    for (var i = 0; i < 3; i++) {
        let index = Math.floor(Math.random * )
        arr.push(<MainCard title={}/>)
    }
    <MainCard image={'#'} title={'Movie Title'} content={'Descriptive Text about the media described above...'} pill1={"Action"} pill2={"Netflix"}/>
    <MainCard image={'#'} title={'Movie Title'} content={'Descriptive Text about the media described above...'} pill1={"Drama"} pill2={"Prime"} />
    <MainCard image={'#'} title={'Movie Title'} content={'Descriptive Text about the media described above...'} pill1={"Drama"} pill2={"Prime"} />
}

function Home() {
    const [browsingMode, setBrowsingMode] = useState(true);



    if (browsingMode)
    {
        return(
            <div className='Home'>
                <h2>Trending</h2>
                <div className='trending'>
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
            </div>
        );
    }
}

export default Home;