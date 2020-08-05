import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

const useFirestore = collection => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const getPhoto = db
            .collection(collection)
            .orderBy('timestamp', 'desc')
            .onSnapshot(snap => {
                let document = [];
                snap.forEach(doc => {
                    document.push({ ...doc.data(), id: doc.id });
                });
                setDocs(document);
            });

        return () => getPhoto();
    }, [collection]);

    return { docs };
};

export default useFirestore;
