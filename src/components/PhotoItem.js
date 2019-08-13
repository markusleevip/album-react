import React from 'react';

class PhotoItem extends React.Component {   
    render(){
        const {aUrl,imgUrl,fileName} = this.props;
        return (
            <li key={fileName}>
                <a target="_blank" rel="noopener noreferrer" href={aUrl}>
                    <img src={imgUrl} alt={fileName}/>
                </a>
            </li>            
        );
    }
}

export default PhotoItem;