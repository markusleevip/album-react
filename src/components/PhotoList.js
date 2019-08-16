import React from 'react';
import '../config';
import PhotoItem from './PhotoItem';
import '../style/PhotoList.css'

class PhotoList extends React.Component{
  
    constructor(){
      super()
      this.state = {
        isLoaded: false,
        items: [],
        serverUrl: global.constants.serverUrl,
      };
    }

    handleClick(){     
      console.log(this.state.serverUrl);
      fetch(this.state.serverUrl+'albums/all', {
        method: "GET", 
      })
      .then(response => response.json())
      .then(data => { 
        this.setState({
          isLoaded: true,
          items: data.Data,
        });   
        console.log(this.state.items)
      })
    }

    render(){
      const {  isLoaded, items } = this.state;      
      if(isLoaded) {
        return (      
          <div className="App">        
            <button onClick={this.handleClick.bind(this)}>Get photos</button>
            <PhotoItem 
                    photoItem = {items}
            />            
          </div>        
        );
      }else return (
      <div className="App">
          <button onClick={this.handleClick.bind(this)}>Get photos</button>
      </div>
      );
    }
  }

  export default PhotoList;