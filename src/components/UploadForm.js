import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const tpyes = ['image/jpeg', 'image/png'];

    const onChange = e => {
        // console.log(e.target.files[0]);
        const uploadFile = e.target.files[0];
        if (uploadFile && tpyes.includes(uploadFile.type)) {
            setFile(uploadFile);
            setError('');
        } else {
            setError('이미지 파일을 선택하세요 (png, jpeg)');
            setFile(null);
        }
    };

    return (
        <form>
            <label>
                <input type='file' onChange={onChange} />
                <span>사진 첨부하기</span>
            </label>
            <div className='output'>
                {error}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;
