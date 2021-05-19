import React from 'react';
import Sign from './Sign';
import App from './App';

export default class Website extends React.Component{

    constructor(props){
        super(props);
        this.setRenderItem = this.setRenderItem.bind(this);
    }
 
    componentDidMount(){}

    componentWillUnmount(){}

    setRenderItem(){
        if(this.props.LoginStatus){
            return (<App/>);
        }else{
            return (<Sign onLogin={this.props.onLogin}/>);
        }
    }

    render(){
      return(
          <div>
            {this.setRenderItem()}
          </div>
      );
    }
}