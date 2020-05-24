import React, { Component } from 'react'
import Box2 from './Box2'

class BoxList extends Component {
    constructor(props){
        super(props)
        this.state = {boxes: [{width: 10, height: 40, color: 'orange'}]}
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box2 
            width={box.width}
            height={box.height}
            color={box.color}
            />
        ))
        return (
            <div>
                <h1>Color Box Maker Thing</h1>
                {boxes}
            </div>
        )
    }
}

export default BoxList;