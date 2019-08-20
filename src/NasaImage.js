import React from 'react';
import {Content, Card, Media, Heading, Image} from 'react-bulma-components/full';

const NasaImage = (props) =>{
    if (props.nasa_image === []){
        return(
            <p>Loading...</p>
        );
    }

    return(
        <Content>        
            <Heading size={2} className="has-text-centered">NASA</Heading><br/><br/>
            <Card>
                <br/>
            <iframe width="560" height="315" src={props.nasa_image.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Content>
                <Media>
                    <Media.Item renderAs="figure" position="left">
                    
                    </Media.Item>
                    <Media.Item>
                    <Heading size={4}>{props.nasa_image.title}</Heading>
                    </Media.Item>
                </Media>
                <Content>
                    <p className="has-text-justified">{props.nasa_image.explanation}</p>
                    <p><i>{props.nasa_image.date}</i></p>
                </Content>
                </Card.Content>
        </Card>
    </Content>
        
    );
}

export default NasaImage;