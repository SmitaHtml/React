import React, { Component } from 'react';
import '../App.css';
import './SevenDay.css';
/*import { Link } from 'react-router-dom'*/

// components!
import Nav from './Nav';
/*import ThreeDay from './TenDay';*/


class SevenDay extends Component {

     state = {
          searchedLocation: null,
          temp: null,
          name: null,
          region: null,
          country: null,
          hightemp: null,
          lowtemp: null,
          description: null,
          windDirection: null,
          windSpeed: null,
          humidity: null,
          cloudCover: null,
          feelsLike: null,
          FirstDayHigh: null,
          FirstDayLow: null,
          SecondDayHigh: null,
          SecondDayLow: null,
          ThirdDayHigh: null,
          ThirdDayLow: null,
          FirstDay: null,
          FirstDescription: null,
          SecondDescription: null,
          ThirdDescription: null,
          FourthDescription: null,
          FifthDescription: null,
          SixthDescription: null,
          SeventhDescription: null
     }





     componentDidMount(){

          var url = `http://api.apixu.com/v1/forecast.json?key=052c8483b4d440808cb202413193005&q=louisville ky&days=7`;

          fetch( url )
               .then(response => response.json())
               .then( response => this.setState({
                    temp: response.current.temp_f,
                    name: response.location.name,
                    region: response.location.region,
                    country: response.location.country,
                    hightemp: response.forecast.forecastday[0].day.maxtemp_f,
                    lowtemp: response.forecast.forecastday[0].day.mintemp_f,
                    description: response.current.condition.text,
                    windDirection: response.current.wind_dir,
                    windSpeed: response.current.wind_mph,
                    humidity: response.current.humidity,
                    cloudCover: response.current.cloud,
                    feelsLike: response.current.feelslike_f,
                    FirstDayHigh: response.forecast.forecastday[0].day.maxtemp_f,
                    FirstDayLow: response.forecast.forecastday[0].day.mintemp_f,
                    SecondDayHigh: response.forecast.forecastday[1].day.maxtemp_f,
                    SecondDayLow: response.forecast.forecastday[1].day.mintemp_f,
                    ThirdDayHigh: response.forecast.forecastday[2].day.maxtemp_f,
                    ThirdDayLow: response.forecast.forecastday[2].day.mintemp_f,
                    FourthDayHigh: response.forecast.forecastday[3].day.maxtemp_f,
                    FourthDayLow: response.forecast.forecastday[3].day.mintemp_f,
                    FifthDayHigh: response.forecast.forecastday[4].day.maxtemp_f,
                    FifthDayLow: response.forecast.forecastday[4].day.mintemp_f,
                    SixthDayHigh: response.forecast.forecastday[5].day.maxtemp_f,
                    SixthDayLow: response.forecast.forecastday[5].day.mintemp_f,
                    SeventhDayHigh: response.forecast.forecastday[6].day.maxtemp_f,
                    SeventhDayLow: response.forecast.forecastday[6].day.mintemp_f,
                    FirstDay: response.forecast.forecastday[3].date,
                    FirstDescription: response.forecast.forecastday[0].day.condition.text,
                    SecondDescription: response.forecast.forecastday[1].day.condition.text,
                    ThirdDescription: response.forecast.forecastday[2].day.condition.text,
                    FourthDescription: response.forecast.forecastday[3].day.condition.text,
                    FifthDescription: response.forecast.forecastday[4].day.condition.text,
                    SixthDescription: response.forecast.forecastday[5].day.condition.text,
                    SeventhDescription: response.forecast.forecastday[6].day.condition.text
               }))

     }

     componentDidUpdate () {
          this.checkWeatherText();
}




     checkWeatherText() {

          if ( this.state.description === "Sunny" || this.state.description === "Clear" ) {

          } else if ( this.state.description === "Partly cloudy" ) {

          } else if ( this.state.description === "Cloudy" || this.state.description === "Overcast" ) {

          } else if ( this.state.description === "Patchy rain possible" || this.state.description === "Patchy light drizzle"
          || this.state.description === "Light drizzle" || this.state.description === "Patchy light rain"
          || this.state.description === "Light rain" || this.state.description === "Patchy light drizzle"
          || this.state.description === "Moderate rain at times" || this.state.description === "Moderate rain"
          || this.state.description === "Heavy rain at times" || this.state.description === "Heavy rain"
          || this.state.description === "Torrential rain shower" || this.state.description === "Patchy light rain with thunder"
          || this.state.description === "Moderate or heavy rain with thunder" ) {

          } else if ( this.state.description === "Patchy snow possible" || this.state.description === "Blowing snow"
          || this.state.description === "Blizzard" || this.state.description === "Patchy light snow"
          || this.state.description === "Light snow" || this.state.description === "Patchy moderate snow"
          || this.state.description === "Moderate snow" || this.state.description === "Patchy heavy snow"
          || this.state.description === "Heavy snow" || this.state.description === "Light snow showers"
          || this.state.description === "Moderate or heavy snow showers" || this.state.description === "Patchy light snow with thunder"
          || this.state.description === "Moderate or heavy snow with thunder" ) {

          }
     }

     checkCountry = ( country ) => {
          if (country === "United States of America") {
               return "USA";
          } else {
               return country;
          }
     }


     didTheyClickEnter = e => {
          if ( e.keyCode === 13 ) {
               this.getWeather(e);
               let search = document.querySelector( '#search' );
               search.value = "";
          }
     }

     inputValue = e => {
          this.setState({
               searchedLocation: e.target.value
          })
     }

     getWeather = (e) => {

          e.preventDefault()

          var url = `https://api.apixu.com/v1/forecast.json?key=7c69d285fd3240afadb02824192202&q=${this.state.searchedLocation}&days=7`;

          fetch( url )
               .then(response => response.json())
               .then( response => this.setState({
                    temp: response.current.temp_f,
                    name: response.location.name,
                    region: response.location.region,
                    country: response.location.country,
                    hightemp: response.forecast.forecastday[0].day.maxtemp_f,
                    lowtemp: response.forecast.forecastday[0].day.mintemp_f,
                    description: response.current.condition.text,
                    windDirection: response.current.wind_dir,
                    windSpeed: response.current.wind_mph,
                    humidity: response.current.humidity,
                    cloudCover: response.current.cloud,
                    feelsLike: response.current.feelslike_f,
                    FirstDayHigh: response.forecast.forecastday[0].day.maxtemp_f,
                    FirstDayLow: response.forecast.forecastday[0].day.mintemp_f,
                    SecondDayHigh: response.forecast.forecastday[1].day.maxtemp_f,
                    SecondDayLow: response.forecast.forecastday[1].day.mintemp_f,
                    ThirdDayHigh: response.forecast.forecastday[2].day.maxtemp_f,
                    ThirdDayLow: response.forecast.forecastday[2].day.mintemp_f,
                    FourthDayHigh: response.forecast.forecastday[3].day.maxtemp_f,
                    FourthDayLow: response.forecast.forecastday[3].day.mintemp_f,
                    FifthDayHigh: response.forecast.forecastday[4].day.maxtemp_f,
                    FifthDayLow: response.forecast.forecastday[4].day.mintemp_f,
                    SixthDayHigh: response.forecast.forecastday[5].day.maxtemp_f,
                    SixthDayLow: response.forecast.forecastday[5].day.mintemp_f,
                    SeventhDayHigh: response.forecast.forecastday[6].day.maxtemp_f,
                    SeventhDayLow: response.forecast.forecastday[6].day.mintemp_f,
                    FirstDay: response.forecast.forecastday[3].date,
                    FirstDescription: response.forecast.forecastday[0].day.condition.text,
                    SecondDescription: response.forecast.forecastday[1].day.condition.text,
                    ThirdDescription: response.forecast.forecastday[2].day.condition.text,
                    FourthDescription: response.forecast.forecastday[3].day.condition.text,
                    FifthDescription: response.forecast.forecastday[4].day.condition.text,
                    SixthDescription: response.forecast.forecastday[5].day.condition.text,
                    SeventhDescription: response.forecast.forecastday[6].day.condition.text
               }, () => {
                    this.checkWeatherText()
               }))

     }



     // GETS THE DAY OF THE WEEK FROM THE DATE

     getDay = (daysFromNow) => {
          var d  = new Date();
          var weekday = new Array(7);
               weekday[0] =  "Sun";
               weekday[1] = "Mon";
               weekday[2] = "Tue";
               weekday[3] = "Wed";
               weekday[4] = "Thu";
               weekday[5] = "Fri";
               weekday[6] = "Sat";
               weekday[7] = "Sun";
               weekday[8] = "Mon";
               weekday[9] = "Tue";
               weekday[10] = "Wed";
               weekday[11] = "Thu";
               weekday[12] = "Fri";
               weekday[13] = "Sat";

          var n = weekday[d.getDay() + daysFromNow];
          return n;
     }


     render () {
          return (
               <div className="App">
                    <div className="search-stuff">
                         <input
                              id="search"
                              type="text"
                              onChange={ e => this.inputValue(e) }
                              onKeyDown={ e => this.didTheyClickEnter(e)}
                              placeholder="City Search " />

                    </div>
                    <div className="weather-info">
                         <h5>{ this.state.name }, {this.state.region}, { this.checkCountry(this.state.country) }</h5>
                         <h3>{ Math.round(this.state.temp) }&#176;</h3>
                         <p>H: { Math.round(this.state.hightemp) }&#176;  / L: { Math.round(this.state.lowtemp) }&#176;</p>
                         <div id="ten-day-container">
                              <div id="day-container">
                                   <h1 id="day-of-week">{ this.getDay(0) }</h1>
                                   <h2 id="hl-temp">H: {this.state.FirstDayHigh}</h2>
                                   <h2 id="hl-temp">L: {this.state.FirstDayLow}</h2>
                                   <h2 id="hl-desc">{this.state.FirstDescription}</h2>
                              </div>
                              <div id="day-container">
                                   <h1 id="day-of-week">{ this.getDay(1) }</h1>
                                   <h2 id="hl-temp">H: {this.state.SecondDayHigh}</h2>
                                   <h2 id="hl-temp">L: {this.state.SecondDayLow}</h2>
                                   <h2 id="hl-desc">{this.state.SecondDescription}</h2>
                              </div>
                              <div id="day-container">
                                   <h1 id="day-of-week">{ this.getDay(2) }</h1>
                                   <h2 id="hl-temp">H: {this.state.ThirdDayHigh}</h2>
                                   <h2 id="hl-temp">L: {this.state.ThirdDayLow}</h2>
                                   <h2 id="hl-desc">{this.state.ThirdDescription}</h2>
                              </div>
                              <div id="day-container">
                                   <h1 id="day-of-week">{ this.getDay(3) }</h1>
                                   <h2 id="hl-temp">H: {this.state.FourthDayHigh}</h2>
                                   <h2 id="hl-temp">L: {this.state.FourthDayLow}</h2>
                                   <h2 id="hl-desc">{this.state.FourthDescription}</h2>
                              </div>
                              <div id="day-container">
                                   <h1 id="day-of-week">{ this.getDay(4) }</h1>
                                   <h2 id="hl-temp">H: {this.state.FifthDayHigh}</h2>
                                   <h2 id="hl-temp">L: {this.state.FifthDayLow}</h2>
                                   <h2 id="hl-desc">{this.state.FifthDescription}</h2>
                              </div>
                              <div id="day-container">
                                   <h1 id="day-of-week">{ this.getDay(5) }</h1>
                                   <h2 id="hl-temp">H: {this.state.SixthDayHigh}</h2>
                                   <h2 id="hl-temp">L: {this.state.SixthDayLow}</h2>
                                   <h2 id="hl-desc">{this.state.SixthDescription}</h2>
                              </div>
                              <div id="day-container" style={{border: 'none'}}>
                                   <h1 id="day-of-week">{ this.getDay(6) }</h1>
                                   <h2 id="hl-temp">H: {this.state.SeventhDayHigh}</h2>
                                   <h2 id="hl-temp">L: {this.state.SeventhDayLow}</h2>
                                   <h2 id="hl-desc">{this.state.SeventhDescription}</h2>
                              </div>
                         </div>
                    </div>

                    <Nav />
               </div>
          );
     }




}
export default SevenDay;
