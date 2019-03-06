import React from 'react';

class ConactUs extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
           data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
     };
     setNewNumber() {
        this.setState({data: this.state.data + 1})
     }
     render() {
        return (
           <div>
              <button onClick = {this.setNewNumber}>INCREMENT</button>
              <Content myNumber = {this.state.data}></Content>
           </div>
        );
     }
}

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount  = () => {
        // is executed before rendering, on both the server and the client side.
       console.log('Component WILL MOUNT!')
    }

    componentDidMount = () => {
        // is executed after the first render only on the client side.
       console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps  = (newProps) =>  {  
        console.log(newProps,'---------');
        // is invoked as soon as the props are updated
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate = (newProps, newState) => {
        //should return true or false value. This will determine if the component will be updated or not. This is set to true by default. 
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUpdate = (nextProps, nextState) => {
        //is called just before rendering
       console.log('Component WILL UPDATE!');
    }

    componentDidUpdate = (prevProps, prevState) => {
        //is called just after rendering.
       console.log('Component DID UPDATE!')
    }

    componentWillUnmount = () => {
        //is called after the component is unmounted from the dom
       console.log('Component WILL UNMOUNT!')
    }

    render() {
       return (
          <div>
             <h3>{this.props.myNumber}</h3>
          </div>
       );
    }
 }
export default ConactUs;