import { Component } from 'react';
import { Article } from '../Article/Article.js';
import { newsData } from '../../data/newsData.js';

class News extends Component {
    render () {
        return (
            !!newsData?.length && newsData
                .filter(({ category }) => category === this.props.category)
                .map(({ category, headline, text, id }) => (
                <Article
                    category={category}
                    headline={headline}
                    text={text}
                    key={id}
                />
            ))
        )
    };
}

export { News };