import React from 'react';
import '../config';
class PhotoItem extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor()");
        this.state = {
            serverUrl: global.constants.serverUrl,
            photoItem: props,
            showUrl: "",
            current: 0,
            nextIndex: 0,
            preIndex: 0,
            startIndex: 0,
            endIndex: 9,
            pageNum: 9,
            total: 0,
        }
        this.handlePrePhoto = this.handlePrePhoto.bind(this);
        this.handleNextPhoto = this.handleNextPhoto.bind(this);
        this.changePhoto = this.changePhoto.bind(this);
    }

    componentWillMount() {
        let current = localStorage.getItem('current');
        const {photoItem} = this.state.photoItem;
        if (current !== isNaN){
            console.log("getCurrent:"+current);
            this.setState({current: parseInt(current)});            
        }
        if ( photoItem.length >0){
            let index = 0;
            if (current!==0 && photoItem.length>current ){
                index = current;
            }            
            var item = photoItem[index];
            this.setState({
                showUrl : this.state.serverUrl+'show/'+item.FilePath +'/'+item.FileName,
                total : photoItem.length,
            });
        }
    }

    componentDidMount (){        
        let current =  this.state.current;
        if ( current >=0){            
            this.changePhoto(current);
        }
    }

    handlePrePhoto(){
        var current = 0;
        if (this.state.current>0){
            current = this.state.current-1;           

        }
        this.changePhoto(current);
    }

    handleNextPhoto(){
        var current = 0;
        if ( this.state.total >this.state.current){
            current = this.state.current+1;
        }
        this.changePhoto(current);
    }

    changePhoto(current){
        const {photoItem} = this.state.photoItem;
        let item = photoItem[current];
        let startIndex = this.state.startIndex;
        let endIndex = this.state.endIndex;
        if (current>4 && (this.state.total> this.state.pageNum)){
            if (current>(this.state.total-this.state.pageNum+1)){
                startIndex = this.state.total-this.state.pageNum;
                endIndex = this.state.total;
            }else{
                startIndex = current-4;
                endIndex = current+5;
            }
        }
        else{
            startIndex = 0;
            endIndex=this.state.pageNum;
        }

        if (this.state.total > current && current>=0){
            this.setState({
                current:current,
                showUrl : this.state.serverUrl+'show/'+item.FilePath +'/'+item.FileName,
                startIndex : startIndex,
                endIndex : endIndex,

            });
            localStorage.setItem('current',current);

        }else{
            console.log(" No photo.");
        }
    }

    render(){
        const {photoItem} = this.state.photoItem;

        return (
            <div className="photoMain">
                <div>total:{this.state.total},current:{this.state.current}
                ,startIndex:{this.state.startIndex},endIndex:{this.state.endIndex}</div>
                <div className="photo-detail">
                <ul>
                    <li onClick={this.handlePrePhoto.bind(this)}>
                        <p>⟸</p>                    
                    </li>
                    <li>
                    <img src={this.state.showUrl} alt={this.state.showUrl}></img>
                    </li>
                    <li onClick={this.handleNextPhoto.bind(this)} >
                        <p>⟹</p>
                    </li>
                </ul>
                </div>
                <div className="photo-list">
                <ul>
                    <li onClick={this.handlePrePhoto.bind(this)} ><p>⟸</p></li>
                    {photoItem.map((item,index) => (
                        (index >this.state.startIndex) && (index <this.state.endIndex)     ?                                      
                        <li key={item.FileName} onClick={this.changePhoto.bind(this,index)}>
                            <img src={this.state.serverUrl+'show/'+item.FilePath +'/'+item.FileName} alt={item.FileName}/>
                        </li>:null
                    ))}
                    <li onClick={this.handleNextPhoto.bind(this)} ><p>⟹</p></li>
                </ul>                
            </div> 
          </div>
        );
    }
}

export default PhotoItem;