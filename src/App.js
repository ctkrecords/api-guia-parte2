import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import News_column from './News_column.js';
import { Container, Section, Columns} from 'react-bulma-components/full';
import NasaImage from './NasaImage.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      news_col: [],
      nasa_image: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {
    await axios.all([
      axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=6c2373754cd64746a1b6cfd9c4f71a1c'),
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'),
      ]).then(responseArr => {
        console.log(responseArr[0].data);
        console.log(responseArr[1].data);
        this.setState({
          news_col: responseArr[0].data,
          nasa_image: responseArr[1].data,
          isLoaded: true,
        }); 
      })
      .catch(error => console.log(error))    
    }

  render(){
    let {news_col=[], nasa_image=[], isLoaded} = this.state;
    return ( 
      <div className="App">
        <Section>
          <Container fluid>
            <Columns>
              <Columns.Column>
                {isLoaded && <News_column news_col={news_col}/>}
              </Columns.Column>
              <Columns.Column>
                {isLoaded && <NasaImage nasa_image = {nasa_image} />}
              </Columns.Column>
            </Columns>
          </Container>
        </Section>
      </div>
    );
  }

}

export default App;
