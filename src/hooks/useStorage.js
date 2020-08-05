import { useState, useEffect } from 'react';
import { storage, db, timestamp } from '../firebase/config';

const useStorage = file => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const dbRef = db.collection('images');

        storageRef.put(file).on(
            'state_changed',
            snap => {
                let rate = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(rate);
            },
            err => {
                setError(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                dbRef.add({ url, timestamp });
                setUrl(url);
            }
        );
    }, [file]);

    return { progress, error, url };
};

export default useStorage;
