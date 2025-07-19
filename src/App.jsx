import React, {useEffect, useState} from 'react';

const personInfo =     {
    "adult": false,
    "gender": 2,
    "id": 976,
    "known_for_department": "Acting",
    "name": "Jason Statham",
    "original_name": "Jason Statham",
    "popularity": 22.7269,
    "profile_path": "/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg",
    "known_for": [
        {
            "adult": false,
            "backdrop_path": "/32V4uHVRU2fbDsQl1dsYsZm3uba.jpg",
            "id": 107,
            "title": "Snatch",
            "original_title": "Snatch",
            "overview": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
            "poster_path": "/8KSDI7ijEv7QVZdIyrLw5Gnhhr8.jpg",
            "media_type": "movie",
            "original_language": "en",
            "genre_ids": [
                80,
                35
            ],
            "popularity": 9.3744,
            "release_date": "2000-09-01",
            "video": false,
            "vote_average": 7.814,
            "vote_count": 9378
        },
        {
            "adult": false,
            "backdrop_path": "/2uSCHUsmzb6KkQPFSxBQ7bgfJLE.jpg",
            "id": 345940,
            "title": "The Meg",
            "original_title": "The Meg",
            "overview": "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
            "poster_path": "/eyWICPcxOuTcDDDbTMOZawoOn8d.jpg",
            "media_type": "movie",
            "original_language": "en",
            "genre_ids": [
                28,
                878,
                27
            ],
            "popularity": 11.0634,
            "release_date": "2018-08-09",
            "video": false,
            "vote_average": 6.247,
            "vote_count": 7859
        },
        {
            "adult": false,
            "backdrop_path": "/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
            "id": 637649,
            "title": "Wrath of Man",
            "original_title": "Wrath of Man",
            "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
            "poster_path": "/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
            "media_type": "movie",
            "original_language": "en",
            "genre_ids": [
                28,
                80,
                53
            ],
            "popularity": 16.4421,
            "release_date": "2021-04-22",
            "video": false,
            "vote_average": 7.607,
            "vote_count": 5644
        }
    ]
}




const App = () => {

    const [person, setPerson] = useState({})

    const getPerson = () => {
        console.log(person)
        setPerson(personInfo)
    }

    useEffect(() => {
        getPerson()
    }, []);


    return (
        <div>
        <h1>name:{person.name}</h1>
        <h2>popularity:{person.popularity}</h2>
        <h2>known_for_department:{person.known_for_department}</h2>
        <img src={"https://image.tmdb.org/t/p/w500"+person.profile_path} />
            {/*<button onClick={getPerson}>사람정보 불러오기</button>*/}
        </div>
    );
};

export default App;