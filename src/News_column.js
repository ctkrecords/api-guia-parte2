import React from 'react';
import {Content, Columns, Media, Section, Image, Box, Level, Button, Heading} from 'react-bulma-components/full';

const News_column = (props) => {
    if (props.news_col === []){
        return(
            <p>Loading...</p>
        );
    }
    return(
        <Columns>
            <Columns.Column>
                <Heading size={2} className="has-text-centered">Artículos</Heading>
                        {
                        props.news_col.articles.map(repos => 
                            <Section>
                                <Box>
                                <Media>
                                    <Media.Item renderAs="figure" position="left">
                                    <Image renderAs="p" className="image is-3by2" size={128} alt="Cargando..." src={repos.urlToImage}/>
                                    </Media.Item>
                                    <Media.Item>
                                    <Content>
                                        <p>
                                        <strong>{repos.title}</strong>
                                        <br/>
                                        <small>by <strong>{repos.author}</strong> </small>
                                        <br />
                                        {repos.description}
                                        </p>
                                    </Content>
                                    <Level breakpoint="mobile">
                                        <Level.Side align="left">
                                        <Button link><a href={repos.url}>Leer artículo</a></Button>
                                        </Level.Side>
                                    </Level>
                                    </Media.Item>
                                </Media>
                                </Box>
                            </Section>  
                        )
                        }
            </Columns.Column>
        </Columns>
        
    );

}

export default News_column;