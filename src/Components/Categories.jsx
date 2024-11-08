import React from "react";

export class Categories extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    categories: [
        {
            key: "Japan car",
            name: "Japan car"
        },
        {
            key: "Germany car",
            name: "Germany car"
        },
        {
            key: "Bad car",
            name: "Bad car"
        },
        {
            key: "all",
            name: "all"
        }
    ]
    }
}
render() {
    return (
    <div className="Categories">
        {this.state.categories.map(el => (
        <div key={el.id} onClick={() => this.props.chooseCategory(el.key)}>{el.name}
        </div>
        ))}
    </div>
    )
}
}

export default Categories;