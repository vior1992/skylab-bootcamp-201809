import React, { Component } from 'react';


class Search extends Component {

    render() {
        return (
            <div className="search">
                {/* TODO: Add img tag to manipulate background image */}
                <input type="text" placeholder="Search course..." />
            </div>
        )
    }
}

export default Search;

