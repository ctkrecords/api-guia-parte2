import React from 'react';
import {Content, Columns} from 'react-bulma-components/full';

const News_column = (props) => {
    if (props.news_col === []){
        return(
            <p>Loading...</p>
        );
    }
    return(
        <Columns>
        <strong>Articles: </strong>
            <p>
                <ul>
                    {
                    props.news_col.articles.map(repos => <p><li>{repos.title}</li></p>)
                    }
                </ul>
            </p>
        </Columns>
    );

}

export default News_column;