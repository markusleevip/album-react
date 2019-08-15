# React Photo
Server is [taostorage](https://github.com/markusleevip/taostorage)

## Code
```
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
```

## Server API
### /albums/all or  /albums/201908
```
{
  "State": 1,
  "Msg": "",
  "Data": [
    {
      "FileSize": 1209856,
      "FileName": "1565061018014040600.jpg",
      "FilePath": "201908",
      "FileType": "image/jpeg",
      "Preview": "1565061018014040600_300.jpg",
      "NameSha256": "f984dc523d994288a9f5d0e8d18d3dffb1e61dd18442d6f9074afd7a43ee14f4",
      "CTime": "1565060905"
    },       
    {
      "FileSize": 2218926,
      "FileName": "1565691289008804600.jpg",
      "FilePath": "201908",
      "FileType": "image/jpeg",
      "Preview": "1565691289008804600_300.jpg",
      "NameSha256": "c70f6323a673bc370cffa1fb26aa75ef5c5f08e237245c18cfaff102b7339c8b",
      "CTime": "1565690739"
    },
    {
      "FileSize": 2276038,
      "FileName": "1565691289783128300.jpg",
      "FilePath": "201908",
      "FileType": "image/jpeg",
      "Preview": "1565691289783128300_300.jpg",
      "NameSha256": "1b8f3db5b612ffd14d5bc21294fdd0e3f38fd5d74eb4e57ef92a72b1a87a1519",
      "CTime": "1565690736"
    },    
    {
      "FileSize": 2479417,
      "FileName": "1565691293616649400.jpg",
      "FilePath": "201908",
      "FileType": "image/jpeg",
      "Preview": "1565691293616649400_300.jpg",
      "NameSha256": "74f89c78493f8b354770117be8ce59053b8fb889ec3f1bd7352df7e1bbace603",
      "CTime": "1565690739"
    },
    {
      "FileSize": 2354053,
      "FileName": "1565691293849768200.jpg",
      "FilePath": "201908",
      "FileType": "image/jpeg",
      "Preview": "1565691293849768200_300.jpg",
      "NameSha256": "7e87c572d96d37803a447707cf38228c8224b5c917ddcf06ec54eef649ab16a4",
      "CTime": "1565690740"
    },
    {
      "FileSize": 2000046,
      "FileName": "1565691294005182000.jpg",
      "FilePath": "201908",
      "FileType": "image/jpeg",
      "Preview": "1565691294005182000_300.jpg",
      "NameSha256": "fbc582ebaa8e1104c18606e85d8210eb83ac52e764c25c94f04edaa43e37eb3e",
      "CTime": "1565690738"
    },
    {
      "FileSize": 2767419,
      "FileName": "1565691294036264700.jpg",
      "FilePath": "201908",
      "FileType": "image/jpeg",
      "Preview": "1565691294036264700_300.jpg",
      "NameSha256": "258757ee49346074e65975789d989123fe63f6f866afaf80754107b20a742a9f",
      "CTime": "1565690739"
    },
    {
      "FileSize": 2171829,
      "FileName": "1565691294407250700.jpg",
      "FilePath": "201908",
      "FileType": "image/jpeg",
      "Preview": "1565691294407250700_300.jpg",
      "NameSha256": "2f40c17016517c57d5ff5493868b2864dfbafc6f36243624e691613bedc91ec0",
      "CTime": "1565690737"
    }
  ]
}
```
## Screenshot
<image src="./public/images/1.png" width="800px"/>



