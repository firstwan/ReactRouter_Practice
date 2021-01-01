import React, { Component } from 'react';

class ProductDetail extends Component {
    state = { 
        item: {
            images: {}
        },
        images: {}
     }
    render() { 
        return (
            
            <div>
                <h1>{ this.state.item.name }</h1>
                <img src={ this.state.item.images.background } alt=""/>
            </div>
          );
    }

    componentDidMount() {
        this.getItem()
    }

    getItem() {
        const apiUrl = `https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`

        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            this.setState({item: data.data.item})
            // console.log(data.data.item.images.background)
        })
        .catch(error => console.log(error))
    }
}
 
export default ProductDetail;