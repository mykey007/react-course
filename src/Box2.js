import React, { Component } from 'react'

class Box2 extends Component {
    render() {
        return (
            <div>
                <div style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color
                }}>
                </div>
                <button onClick={this.props.removeBox}>xXx</button>
            </div>
        )
    }
}

export default Box2;