import React from 'react';
import {Content, Columns, Media, Card, Heading, Image} from 'react-bulma-components/full';

const News_column = (props) => {
    if (props.news_col === []){
        return(
            <p>Loading...</p>
        );
    }
    return(
        <Columns>
        <h2>Articles</h2>
            <p>
                <ul>
                    {
                    props.news_col.articles.map(repos => <p><li>{repos.title}</li></p>)
                    }
                </ul>
            </p>
            <Card>
                {
                    props.news_col.articles.map(news =>  <Card.Image size="3by2" src={news.urlToImage}/>)
                }    
               
                <Card.Content>
                    <Media>
                    <Media.Item renderAs="figure" position="left">
                        <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
                    </Media.Item>
                    <Media.Item>
                        <Heading size={4}>John Smith</Heading>
                        <Heading subtitle size={6}>
                        @johnsmith
                        </Heading>
                    </Media.Item>
                    </Media>
                    <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#1">#css</a> <a href="#2">#responsive</a>
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </Content>
                </Card.Content>
            </Card>
        </Columns>

    );

}

export default News_column;