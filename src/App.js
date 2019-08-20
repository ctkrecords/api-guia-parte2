import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import News_column from './News_column.js';
import { Container, Section, Content, Box, Media, Image } from 'react-bulma-components/full';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      news_col: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {
    await axios.all([
      axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-19&sortBy=publishedAt&apiKey=6c2373754cd64746a1b6cfd9c4f71a1c'),
      /*axios.get('')*/
      ]).then(responseArr => {
        console.log(responseArr[0].data);
        this.setState({
          news_col: responseArr[0].data,
          isLoaded: true,
        }); 
      })
      .catch(error => console.log(error))    
    }

  render(){
    let {news_col=[], isLoaded} = this.state;
    return ( 
      <div className="App">
        <Section>
          <Container fluid>
            {isLoaded && <News_column news_col={news_col}/>}
          </Container>
        </Section>
      </div>
    );
  }

}

export default App;
