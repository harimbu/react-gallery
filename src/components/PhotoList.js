import React from 'react';
import useFirestore from '../hooks/useFirestore';

const PhotoList = () => {
    const { docs } = useFirestore('images');
    return (
        <div className='photo-grid'>
            {docs.map(doc => (
                <div key={doc.id}>
                    <img src={doc.url} alt='' />
                </div>
            ))}
        </div>
    );
};

export default PhotoList;
