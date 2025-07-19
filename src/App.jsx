import React, {useEffect, useState} from 'react';

const movieList = ["슈퍼맨", "울트라맨", "아이언맨", "배트맨", "엑스맨", "엔트멘", "스파이더맨", "원더우먼", "닥터스트레인지"]




const App = () => {
    //데이터를 담을그릇
    const [movies, setMovies] = useState([])


    // 앱이실행되면 무조건 실행되는 함수
    useEffect(() => {
        setMovies(movieList)
    }, []);


    return (
        <div>
           <h1>해언 플릭스</h1>
            {movies.length}
            {movies?.map((movie) => (
                <h1>{movie}</h1>
            ))}
        </div>
    );
};

export default App;