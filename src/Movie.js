import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="http://file2.nocutnews.co.kr/newsroom/image/2018/07/23/20180723185016658718_0_750_1121.jpg"></img>
        )
    }
}
export default Movie