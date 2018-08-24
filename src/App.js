import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "너의 결혼식",
            poster: "https://cdn.namuwikiusercontent.com/s/3fa467d5f59aa96b7a34d65741c96a41703caaa225c5b3ef3d53182ae1835ba54708c643d5a9441d455448063e2578d1789a1b13821a42c86e6887193a3d8856aa64ef6839575f0ca6de1ab63c818738?e=1535675721&k=cUtEDPkZNdpc0Elk3tSLEQ"
          },
          {
            title: "목격자",
            poster: "https://cdn.namuwikiusercontent.com/s/5c3e347d216ea17d3315262175e2b48b8ed6be99ade849086532e7eeda0eb038ff8e3654de6b87bff16ea08367dd66e84baafda7f3eff62809f07cfc0c0a8e5ea94d374de94101c7df1d1506a76bdf51?e=1535427590&k=WZtsigDdTqZg2CPsuv_4IA"
          },
          {
            title: "신과함께: 인과 연",
            poster: "https://cdn.namuwikiusercontent.com/s/ad86ca08fe28a8f3da7f7ad636f923912b67cc0d878d792b6200eab000d89d4a8fcbc6fc81e8886328e91d519d664522f9709ecf3b6a369d5c6054a252905aad13fcdfea8b41d6ee320df4b72f667c52?e=1543520385&k=ujOo5CFiqlqJcV0lawolnA"
          },
          {
            title: "공작",
            poster: "https://cdn.namuwikiusercontent.com/s/b068988ee47a6cbe001665df2ec737cbbfdf9dbbc77f8aa93d34d06fe357e4acc31c9fb7eebe3ab4bbe1dbc60913c47a2f2f5874aca3768d0305488b74e2f658b0617f301ddea24f4caf2eb8f0261aff?e=1540556960&k=Ro0NT2a6_xglWh_tMBlY1A"
          },
          {
            title: "Avengers: Infinity War",
            poster: "https://cdn.namuwikiusercontent.com/s/c1d766b55e72adfc2c2cad9c5637dc20b64bb32812b69163670a15b505741b5332bf93bcdaa4525871870941c956ea2fb876b8dcd57e2ed99a813cf1f4c631f0d218fef534160f066ce481a34f3ca55a?e=1539035511&k=xYm4OcCFAIGaON2KVrHo_g"
          }
        ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
