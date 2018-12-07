import React, { Component } from 'react';
import Content from './Content';

const site = {
    home: 'hello this is the home page',
    cats: 'i like cats',
    about: 'i am the weird cat guy who lives in the basement'
};

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            items: []
        };
    }

    componentDidMount() {
        let arr = Object.values(site);
        console.log(arr);
        // arr.forEach(element => {
        //     this.setState({
        //         items: element
        //     });
        // });
        this.setState({
            items: arr
        });


    }

    render() {
        return (
            <div>
                <nav>
                    <a href="/">
                        
                    </a>
                </nav>
                <Content/>
            </div>
        );
    }
}

export default Nav;