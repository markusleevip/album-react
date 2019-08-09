import React from 'react';
import PhotoItem from './PhotoItem';
import '../style/PhotoList.css'

const serverUrl = "http://127.0.0.1:8000/";

class PhotoList extends React.Component{
  
    constructor(){
      super()
      this.state = {
        isLoaded: false,
        items: []
      };
    }

    handleclick(){
      fetch(serverUrl+'albums/all', {
        method: "GET", 
      })
      .then(response => response.json())
      .then(data => { 
        this.setState({
          isLoaded: true,
          items: data.Data
        });   
        console.log(this.state.items)
      })
    }
    
    render(){
      const {  isLoaded, items } = this.state;      
      if(isLoaded) {
        return (      
          <div className="App">        
            <button onClick={this.handleclick.bind(this)}>Get photos</button>
            <h1>Photos List</h1>
            <ul>
              {items.map(item => (
                <PhotoItem 
                  aUrl={serverUrl+'show/'+item.FilePath +'/'+item.FileName}
                  imgUrl = {serverUrl+'show/'+item.FilePath +'/'+item.Preview}
                  fileName = {item.FileName}
                />                
              ))}
            </ul>
          </div>        
        );
      }else return (
      <div className="App">
          <button onClick={this.handleclick.bind(this)}>Get photos</button>
      </div>
      );
    }
  }

  export default PhotoList;