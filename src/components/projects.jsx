import React from "react";

function projects(){
    return <div class="second-section">
      <h2 class="second-head">Projects</h2>
      <div class="work">
        <a href="https://rigelselmani.github.io/WEATHER/" target="_blank"><img src="https://i1.wp.com/www.learnesl.net/wp-content/uploads/2018/03/BigStock-Weather-Forecast-1-678x381.jpg" /></a>
      </div>
      <div class="work">
        <a href="https://rigelselmani.github.io/Word-Scape/" target="_blank"><img src={require('../images/logo.png')} /></a>
      </div>
      <div class="work">
        <a href="https://movie-search-react1.herokuapp.com/" target="_blank"><img src={require('../images/movie-search.png')} /></a>
      </div>
      <div class="work">
        <a href="https://rigelselmani.github.io/To-Do-List/" target="_blank"><img src={require('../images/to-do.jpg')} /></a>
      </div>
      <div class="work">
        <a href="https://rigelselmani.github.io/TriviaGame/" target="_blank"><img src={require('../images/quiz.jpg')} /></a>
      </div>
      <div class="work">
        <a href="https://secret-dawn-47186.herokuapp.com/" target="_blank"><img src={require('../images/friend.jpg')} /></a>
      </div>
    </div>
    

}

export default projects;