import React from 'react';
import Header from './Header';
import UploadForm from './UploadForm';
import PhotoList from './PhotoList';

const App = () => {
    return (
        <div className='container'>
            <Header />
            <UploadForm />
            <PhotoList />
        </div>
    );
};

export default App;
