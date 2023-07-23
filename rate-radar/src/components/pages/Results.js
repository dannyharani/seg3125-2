import Searchbar from "../Searchbar";
import MainCard from '../MainCard';
import data from './../../Data/data';
import { useState } from "react";
import FilterPill from "../FilterPill";

var allFilters = {
    'genreFilters':{},
    'actorFilters':{},
    'streamingFilters':{},
    'authorFilters':{},
    'hostFilters':{},
    'episodeFilters':{},
    'counts':{}
}

function initFilters(mediaType)
{
    if (mediaType === 'movies' || mediaType === 'tv_shows')
    {
        data[mediaType].forEach(element => {
        
            element['genre'].split(', ').forEach(genre => {
                allFilters['genreFilters'][genre] = false;
            });
        
            element['actors'].forEach(actor => {
                allFilters['actorFilters'][actor] = false;
            });
    
            element['streaming_services'].forEach(stream => {
                allFilters['streamingFilters'][stream] = false;
            });
    
        });

        allFilters['counts']['genreFilters'] = 0;
        allFilters['counts']['actorFilters'] = 0;
        allFilters['counts']['streamingFilters'] = 0;
    }
    else if (mediaType === 'podcasts')
    {
        data[mediaType].forEach(element => {

            element['genre'].split(', ').forEach(genre => {
                allFilters['genreFilters'][genre] = false;
            });
        
            allFilters['hostFilters'][element['host']] = false;
    
            allFilters['episodeFilters'][element['episodes']] = false;
    
        });

        allFilters['counts']['genreFilters'] = 0;
        allFilters['counts']['hostFilters'] = 0;
        allFilters['counts']['episodeFilters'] = 0;
    }
    else if (mediaType === 'books') 
    { 
        data[mediaType].forEach(element => {

            element['genre'].split(', ').forEach(genre => {
                allFilters['genreFilters'][genre] = false;
            });
            
            allFilters['authorFilters'][element['author']] = false;

        });

        allFilters['counts']['genreFilters'] = 0;
        allFilters['counts']['authorFilters'] = 0;
    }
}

function displayFilters(mediaType, filters, setFilters, setFilterCount, filterCount) {
    let genreArr = []
    let actorArr = []
    let streamArr = []
    let hostArr = []
    let episodeArr = []
    let fullArr = []


    for (var genre in allFilters['genreFilters'])
    {
        genreArr.push(<FilterPill filterCount={filterCount} setFilterCount={setFilterCount} filters={filters} updateFilters={setFilters} filterType={'genreFilters'} title={genre} />)
    }

    /////////////////////////////////////////////////////////////////////////////////

    if (mediaType === 'movies' || mediaType === 'tv_shows') {

        for (var actor in allFilters['actorFilters'])
        {
            actorArr.push(<FilterPill filterCount={filterCount} setFilterCount={setFilterCount} filters={filters} updateFilters={setFilters} filterType={'actorFilters'} title={actor} />)
        }

        for (var stream in allFilters['streamingFilters'])
        {
            streamArr.push(<FilterPill filterCount={filterCount} setFilterCount={setFilterCount} filters={filters} updateFilters={setFilters} filterType={'streamingFilters'} title={stream} />)
        }

        fullArr.push(
            <div>
                <h3 className="filterDesc">
                    Genres
                </h3>
                <div className="pillRow">
                    {genreArr}
                </div>
                <h3 className="filterDesc">
                    Actors
                </h3>
                <div className="pillRow">
                    {actorArr}
                </div>
                <h3 className="filterDesc">
                    Streaming Services
                </h3>
                <div className="pillRow">
                    {streamArr}
                </div>
            </div>
        )

    }
    
    /////////////////////////////////////////////////////////////////////////////////

    if (mediaType === 'podcasts') {

        for (var host in allFilters['hostFilters'])
        {
            hostArr.push(<FilterPill filterCount={filterCount} setFilterCount={setFilterCount} filters={filters} updateFilters={setFilters} filterType={'hostFilters'} title={host} />)
        }

        for (var episodes in allFilters['episodeFilters'])
        {
            episodeArr.push(<FilterPill filterCount={filterCount} setFilterCount={setFilterCount} filters={filters} updateFilters={setFilters} filterType={'episodeFilters'} title={episodes} />)
        }

        fullArr.push(
            <div>
                <h3 className="filterDesc">
                    Genres
                </h3>
                <div className="pillRow">
                    {genreArr}
                </div>
                <h3 className="filterDesc">
                    Hosts
                </h3>
                <div className="pillRow">
                    {hostArr}
                </div>
                <h3 className="filterDesc">
                    Episode Count
                </h3>
                <div className="pillRow">
                    {episodeArr}
                </div>
            </div>
        )

    }

    /////////////////////////////////////////////////////////////////////////////////

    if (mediaType === 'books') {

        for (var author in allFilters['authorFilters'])
        {
            actorArr.push(<FilterPill filterCount={filterCount} setFilterCount={setFilterCount} filters={filters} updateFilters={setFilters} filterType={'authorFilters'} title={author} />)
        }

        fullArr.push(
            <div>
                <h3 className="filterDesc">
                    Genres
                </h3>
                <div className="pillRow">
                    {genreArr}
                </div>
                <h3 className="filterDesc">
                    Actors
                </h3>
                <div className="pillRow">
                    {actorArr}
                </div>
            </div>
        )
    }

    return (
        fullArr
    );
}

function containsGenre(genreArr, filterDict) {

    if (filterDict['counts']['genreFilters'] === 0)
    {
        return true;
    }

    let boolean = false;
    genreArr.forEach(genre => {
        if (filterDict['genreFilters'][genre]) {
            boolean = true;
        }
    });
    return boolean;
}

function containsActor(actors, filterDict) {
    
    if (filterDict['counts']['actorFilters'] === 0)
    {
        return true;
    }

    let boolean = false;
    actors.forEach(actor => {
        if (filterDict['actorFilters'][actor]) {
            boolean = true;
        }
    });
    return boolean;
}

function containsStream(streams, filterDict) {
    if (filterDict['counts']['streamingFilters'] === 0)
    {
        return true;
    }

    let boolean = false;
    streams.forEach(stream => {
        if (filterDict['streamingFilters'][stream]) {
            boolean = true;
        }
    });
    return boolean;
}

function containsAuthor(author, filterDict) {
    
    if (filterDict['counts']['authorFilters'] === 0)
    {
        return true;
    }

    return filterDict['authorFilters'][author];
}

function containsHost(host, filterDict) {
    
    if (filterDict['counts']['hostFilters'] === 0)
    {
        return true;
    }

    return filterDict['hostFilters'][host];
}

function containsEpisodes(episode, filterDict) {

    if (filterDict['counts']['episodeFilters'] === 0)
    {
        return true;
    }

    return filterDict['episodeFilters'][episode];
}

function results(mediaType, query, filterDict, filterCount) {
    let mediaData = Object.keys(data[mediaType]);
    let totalArr = [];
    let index = 0;

    console.log(filterDict['counts'])

    for (var i = 0; i < mediaData.length; i+=2) {
        let arr = []

        for (var j = 0; j < 2; j++) {
            let media = data[mediaType][index]
            index++;
            if (media === undefined) 
            {
                break;
            }

            if (!media.title.toLowerCase().includes(query.toLowerCase())) {
                j--;
                continue;
            }

            if (!containsGenre(media.genre.split(', '), filterDict)) {
                j--;
                continue;
            }

            
            if (mediaType === 'movies') {

                if (!containsActor(media.actors, filterDict)) {
                    j--;
                    continue;
                }
                if (!containsStream(media.streaming_services, filterDict)) {
                    j--;
                    continue;
                }

                arr.push(<MainCard mediaType={mediaType} title={media.title} image={media.img} content={media.description} pill1={media.genre.split(',')[0]} pill2={media.streaming_services[Math.floor(Math.random() * media.streaming_services.length)]}/>)
            } else if (mediaType === 'tv_shows') {

                if (!containsActor(media.actors, filterDict)) {
                    j--;
                    continue;
                }
                if (!containsStream(media.streaming_services, filterDict)) {
                    j--;
                    continue;
                }

                arr.push(<MainCard mediaType={mediaType} title={media.title} image={media.img} content={media.description} pill1={media.genre} pill2={media.streaming_services[Math.floor(Math.random() * media.streaming_services.length)]}/>)
            } else if (mediaType === 'books') {

                    if (!containsAuthor(media.author, filterDict)) {
                        j--;
                        continue;
                    }

                arr.push(<MainCard mediaType={mediaType} title={media.title} image={media.img} content={media.description} pill1={media.genre} pill2={media.publication_year}/>)
            } else if (mediaType === 'podcasts') {
                if (!containsHost(media.host, filterDict)) {
                    j--;
                    continue;
                }
                if (!containsEpisodes(media.episodes, filterDict)) {
                    j--;
                    continue;
                }
                arr.push(<MainCard mediaType={mediaType} title={media.title} image={media.img} content={media.description} pill1={media.genre} pill2={media.episodes + " eps"}/>)
            }
        }

        totalArr.push(
            <div className="trending trendingSpacedOut">
                {arr}
            </div>
        );
        
    }
    return (
        totalArr
    );
}

function Results () {
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState(allFilters);
    const [filterCount, setFilterCount] = useState(0);

    const queryParams = new URLSearchParams(window.location.search)
    const mediaType = decodeURIComponent(queryParams.get('mediaType'));

    initFilters(mediaType);

    return (
        <div className="resultDiv">
            <Searchbar updateQuery={setQuery}/>
            <h2>Filters</h2>
                {displayFilters(mediaType, filters, setFilters, setFilterCount, filterCount)}
            <h2>Results</h2>
            {results(mediaType, query, filters, filterCount)}
        </div>
    );
}

export default Results;