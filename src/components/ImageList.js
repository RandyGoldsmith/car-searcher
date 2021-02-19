import React from 'react';

const ImageList = ({images}) => {
    const pictures = images.map(({id, description, urls}) => {
        return <img key={id} src={urls.regular} alt={description}/>
    });

    return <div>{pictures}</div>
};

export default ImageList;