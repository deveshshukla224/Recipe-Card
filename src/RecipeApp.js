import React, { Component } from 'react';
import Navbar from '../src/components/Navbar';
import RecipeList from '../src/components/RecipeList';

class RecipeApp extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <RecipeList />
            </div>
        );
    }
}

export default RecipeApp;