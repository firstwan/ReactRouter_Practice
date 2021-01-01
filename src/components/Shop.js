import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Shop extends Component {
    state={
        apiData: []
    }

    render() { 
        return ( 
            <div>
                <h1>Shop page</h1>

                {
                this.state.apiData.map(item => (
                    <Link to={`/shop/${item.itemId}`}>
                    <h3 key={item.itemId}>{item.item.name}</h3>
                    </Link>
                ))}
            </div>
         );
    }

    componentDidMount() {
        this.getData();
    }


    getData() {
        const apiUrl = "https://fortnite-api.theapinetwork.com/upcoming/get"

        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            this.setState({ apiData: data.data })
        })
        .catch(error => console.log(error))
    }
}
 
export default Shop;