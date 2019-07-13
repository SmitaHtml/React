import React, {Component} from 'react';
import '../App.css';
import Nav from './Nav';



class Today extends Component {

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

     }




     componentDidMount(){

          var url = `http://api.apixu.com/v1/forecast.json?key=052c8483b4d440808cb202413193005&q=louisville ky&days=1`;

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
                    feelsLike: response.current.feelslike_f
               }))

     }

    componentDidUpdate () {
          this.checkWeatherText();
}




     // SEES WHAT THE CURRENT WEATHER IS AND UPDATES ANIMATIONS AND STYLES

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
          || this.state.description === "Moderate or heavy snow showers" || this.state.description === "atchy light snow with thunder"
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


     // GETS WEATHER AFTER SEARCH

     getWeather = (e) => {

          e.preventDefault()

          var url = `https://api.apixu.com/v1/forecast.json?key=7c69d285fd3240afadb02824192202&q=${this.state.searchedLocation}&days=1`;

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
                    feelsLike: response.current.feelslike_f
               }, () => {
                    this.checkWeatherText()
               }))

     }


     render() {

          return (
               <div className="App">
                    <div className="search-stuff">
                         <input
                              id="search"
                              type="text"
                              onChange={ e => this.inputValue(e) }
                              onKeyDown={ e => this.didTheyClickEnter(e)}
                              placeholder="City Search " />
                        {/* <input
                              id="submit"
                              type="submit"
                              onClick={ e => this.getWeather(e) }
                              value="submit" /> */}
                    </div>
                    <div className="weather-info">
                         <h5>{ this.state.name }, {this.state.region}, { this.checkCountry(this.state.country) }</h5>
                         <h3>{ Math.round(this.state.temp) }&#176;</h3>
                         <p>H: { Math.round(this.state.hightemp) }&#176;  / L: { Math.round(this.state.lowtemp) }&#176;</p>
                         <h4>{this.state.description}</h4>
                         <p id ="today-p">Winds { this.state.windDirection } at { Math.round(this.state.windSpeed) } mph.
                              Humidity of { this.state.humidity }% with cloud cover of { this.state.cloudCover }%.
                              Currently feels like { Math.round( this.state.feelsLike ) }&#176;.</p>
                    </div>




                    <Nav />
               </div>
          );

     }
}

export default Today;
