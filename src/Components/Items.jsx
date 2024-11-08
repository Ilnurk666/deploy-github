import React, { Component } from 'react'
import Items1 from './Items1'


export class Items extends Component {
    render() {
      return (
        <main>
          <h3>List of products of the Universe "Deadlights"</h3>
          {this.props.items.map(el => (
            <Items1 key = {el.id} item = {el} onAdd = {this.props.onAdd} />
            ))} 
        </main>
      )  
    }
}

export default Items
