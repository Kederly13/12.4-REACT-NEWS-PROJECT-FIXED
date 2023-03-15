import { Component } from 'react';

import { News } from './components/News/News.js';
import { Categories } from './components/Categories/Categories.js';

import { newsCategories } from './data/newsCategories.js';

class NewsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: newsCategories[0].category
        }
    };

    handleCategory(category) {
        this.setState({
            currentCategory: category
        })
    };

    render() {
        return (
            <section>
                <Categories
                    category={this.state.currentCategory}
                    onChange={this.handleCategory.bind(this)}
                />
                <News category={this.state.currentCategory} />
            </section>
        )
    }

}

export { NewsSection };