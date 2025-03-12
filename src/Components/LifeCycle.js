import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
      super();
    
      this.state = {
         name:"Ahmad"
      }
    }
    static getDerivedStateFromProps(props, state){
        console.log("Get Derived console");

        return null
    }

    componentDidMount(){
        console.log("Component Mount")
    }
  render() {
    return (
      <div>LifeCycle</div>
    )
  }
}

export default LifeCycle