import axios from 'axios';
import React, { Component } from 'react';

import SearchBar from './SearchBar';

class App extends Component {
    onSearchSubmit = term => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID f5b6b0b12a05d66de3e09ea9ef63bfb1d5376acf34979dfe5047afdc36ca151f'
            }
        });
    }; 

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
