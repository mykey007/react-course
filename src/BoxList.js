import React, { Component } from 'react'
import Box2 from './Box2'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
    constructor(props){
        super(props)
        this.state = {boxes: []}
        this.create = this.create.bind(this)
    }
    // remove a box based on id/key
    remove(id){
        this.setState({
            // make a new array containing the boxes who didn't contain the id passed in
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    create(newBox){
        this.setState({
           boxes: [...this.state.boxes, newBox] 
        })
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box2 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            color={box.color}
            removeBox={() => this.remove(box.id)}
            />
        ))
        return (
            <div>
                <h1>Color Box Maker Thing</h1>
                {/* bound in the components and passed down  */}
                <NewBoxForm createBox={this.create} />
                {boxes}
            </div>
        )
    }
}

export default BoxList;