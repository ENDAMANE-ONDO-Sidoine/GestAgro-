export const openDatabase = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("GestAgroDB", 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("comments")) {
                db.createObjectStore("comments", { keyPath: "id", autoIncrement: true });
            }
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
};

export const addComment = async (comment) => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("comments", "readwrite");
        const store = transaction.objectStore("comments");
        const request = store.add({ ...comment, timestamp: new Date().toISOString() });

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

export const getComments = async () => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("comments", "readonly");
        const store = transaction.objectStore("comments");
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

export const deleteComment = async (id) => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("comments", "readwrite");
        const store = transaction.objectStore("comments");
        const request = store.delete(id);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
};

export const updateComment = async (id, updatedContent) => {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction("comments", "readwrite");
        const store = transaction.objectStore("comments");
        const request = store.put({ ...updatedContent, id });

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
};
