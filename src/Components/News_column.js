import React from 'react';
import {Content, Column} from 'react-bulma-components/full';

const News_column = (props) => {
    if (props.news_col === []){
        return(
            <p>Loading...</p>
        );
    }
    return(
        <Column>
            <p>props.news_col.data</p>
        </Column>
    );

}

export default News_column;