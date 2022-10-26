import React, {Component} from 'react';
import './Categories.css'

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'short',
                    name: 'Short'
                },
                {
                    key: 'long',
                    name: 'Long'
                }
            ]
        }
    }
    render() {
        return (
            <div className={'categories'}>
                {this.state.categories.map(el => (
                    <div key={el.key}>
                        {el.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default Categories;