import React from 'react';

class PhotoList extends React.Component{
    constructor(){
      super()
      this.state = {
        isLoaded: false,
        items: []
      };
    }    
    handleclick(){
      fetch('http://127.0.0.1:8000/albums/all', {
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
                <li key={item.NameSha256}>
                  <a target="_blank" rel="noopener noreferrer" href={'http://127.0.0.1:8000/show/'+item.FilePath +'/'+item.FileName}>
                    <img src={'http://127.0.0.1:8000/show/'+item.FilePath +'/'+item.Preview} alt={item.FileName} />
                  </a>
                </li>
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