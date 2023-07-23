import React from 'react';
import { useState } from 'react';
import './../styles/Home.css'
import MainCard from '../MainCard';
import SmallCard from '../SmallCard';
import data from './../../Data/data';
import SearchButton from '../SearchButton';

function trending(type, lang) {
    let arr = [];
    let used = [];

    for (var i = 0; i < 3; i++) {
        let mediaData = Object.keys(data[type])
        let index = Math.floor(Math.random() * (mediaData.length));
        
        if (used.includes(index)) {
            i--;
            continue;
        }

        used.push(index)

        let media = data[type][index]
        
        if (type === 'movies') {
            arr.push(<MainCard mediaType={type} title={media.title} image={media.img} content={lang ? media.description : media.translated_description} lang={lang} pill1={media.genre.split(',')[0]} pill2={media.streaming_services[Math.floor(Math.random() * media.streaming_services.length)]}/>)
        } else if (type === 'tv_shows') {
            arr.push(<MainCard mediaType={type} title={media.title} image={media.img} content={lang ? media.description : media.translated_description} lang={lang} pill1={media.genre} pill2={media.streaming_services[Math.floor(Math.random() * media.streaming_services.length)]}/>)
        } else if (type === 'books') {
            arr.push(<MainCard mediaType={type} title={media.title} image={media.img} content={lang ? media.description : media.translated_description} lang={lang} pill1={media.genre} pill2={media.publication_year}/>)
        } else if (type === 'podcasts') {
            arr.push(<MainCard mediaType={type} title={media.title} image={media.img} content={lang ? media.description : media.translated_description} lang={lang} pill1={media.genre} pill2={media.episodes + " eps"}/>)
        }
    }
    return (
        arr
    );
}

function yourPicks(type, lang) {
    let used = [];
    let block = [];

    for (var i = 0; i < 3; i++) {
        let arr = [];
        for (var j = 0; j < 3; j++) {
            let mediaData = Object.keys(data[type])
            let index = Math.floor(Math.random() * (mediaData.length-1));
            
            if (used.includes(index)) {
                j--;
                continue;
            }

            used.push(index)

            let media = data[type][index]

            arr.push(<SmallCard title={media.title} image={media.img} mediaType={type} lang={lang}/>)
        }
        block.push(arr)
    }
    return (
        <div className='YourPicksRows'>
            <div className='row'>
                {block[0]}
            </div>
            <div className='row'>
                {block[1]}
            </div>
            <div className='row'>
                {block[2]}
            </div>
        </div>
        );
}


function Home() {
    const queryParams = new URLSearchParams(window.location.search)
    const mediaType = decodeURIComponent(queryParams.get('mediaType'));

    // eslint-disable-next-line eqeqeq
    const [lang, setLang] = useState(true);

    const toggleLang = () => {
        setLang((lang) => !lang);
    }

    let browse = mediaType !== 'null' ? mediaType : "movies";

    return(
        <div>
            <div className="searchArea">
                <SearchButton type={browse} lang={lang}/>
            </div>
            <div className='lang' onClick={toggleLang}>
                <p>en/fr</p>
            </div>
            <div className='Home'>
                <h2>{lang ? 'Trending' : 'Tendance'}</h2>
                <div className='trending'>
                    {trending(browse, lang)}
                </div>

                <div className='YourPicks'>
                    <h2>{lang ? 'Your Picks' : 'Vos choix' }</h2>
                    {yourPicks(browse, lang)}
                </div>

                <div className="discover">
                    <h2>{lang ? 'Discover' : 'Découvrir'}</h2>
                    {yourPicks(browse, lang)}
                </div>
            </div>
        </div>
    );
}

export default Home;