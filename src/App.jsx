import React, {useState} from 'react';

const App = () => {

    const [movie, setMovie] = useState({})

    const movieInfo =     {
        "adult": false,
        "backdrop_path": "/nKyBbFSooRPTJVqjrDteD1lF733.jpg",
        "genre_ids": [
            28,
            12,
            18
        ],
        "id": 1011477,
        "original_language": "en",
        "original_title": "Karate Kid: Legends",
        "overview": "After a family tragedy, kung fu prodigy Li Fong is uprooted from his home in Beijing and forced to move to New York City with his mother. When a new friend needs his help, Li enters a karate competition – but his skills alone aren't enough. Li's kung fu teacher Mr. Han enlists original Karate Kid Daniel LaRusso for help, and Li learns a new way to fight, merging their two styles into one for the ultimate martial arts showdown.",
        "popularity": 578.5995,
        "poster_path": "/AEgggzRr1vZCLY86MAp93li43z.jpg",
        "release_date": "2025-05-08",
        "title": "Karate Kid: Legends",
        "video": false,
        "vote_average": 7.187,
        "vote_count": 297
    }


    const getMovie = () => {
      console.log(movie)
        setMovie(movieInfo)
    }
    

    return (
        <div>
         <h1>영화 제목은 {movie.title} 입니다</h1>
         <h3>영화 설명 :{movie.overview}</h3>
            <h4>영화 평점: {movie.vote_average}점</h4>
            <h5>영화 출시일: {movie.release_date}</h5>
            <button onClick={getMovie}>영화정보 불러오기</button>
        </div>
    );
};

export default App;