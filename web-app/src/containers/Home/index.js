import React, { Component } from 'react';
import Category from './components/category';
import Headline from './components/Headline';

class Home extends Component {
    render() {
        return (
            <div>
               <Category/>
               <Headline/> 
            </div>
        );
    }
}

export default Home;