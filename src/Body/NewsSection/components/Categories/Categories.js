import { Component } from 'react';
import { newsCategories } from '../../data/newsCategories.js'

class Categories extends Component {
    
    selectCategory(category) {
        this.props.onChange(category)
    }

    render() {
        return (
            !!newsCategories?.length && 
            newsCategories.map(({ id, category }) => {
                let className = 'category';

                if(this.props.category === category) {
                    className += ' active';
                }

                return (
                    <button
                        key={id}
                        type="button"
                        onClick={this.props.category !== category ? () => this.selectCategory(category): null}
                        className={className}
                    >
                        {category}
                    </button>
                )
            })
        )
    }
}

export { Categories };