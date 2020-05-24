import React, { Component } from 'react'
import Box2 from './Box2'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
    constructor(props){
        super(props)
        this.state = {boxes: [{width: 10, height: 40, color: 'orange'}]}
        this.create = this.create.bind(this)
    }
    create(newBox){
        this.setState({
           boxes: [...this.state.boxes, newBox] 
        })
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
                <NewBoxForm createBox={this.create} />
                {boxes}
            </div>
        )
    }
}

export default BoxList;