import { firestore } from "../firestore";

export const getHats = async () => {
    const collectionRef = firestore.collection("Hats");
    const data = await collectionRef.get();
    const rawDocuments = data.docs;
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));
    console.log(cleanedDocuments);
    return cleanedDocuments;
};

export const getCarousel = async () => {
    const collectionRef = firestore.collection("carousel");
    const data = await collectionRef.get();
    const rawDocuments = data.docs;
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));
    console.log(cleanedDocuments);
    return cleanedDocuments;
};

export const getProductById = async (id) => {
    const collectionRef = firestore.collection("Hats");
    const data = await collectionRef.get();
    const rawDocuments = data.docs;
    const cleanedDocuments = rawDocuments.map((rawDoc) => ({
        ...rawDoc.data(),
        id: rawDoc.id,
    }));

    const product = cleanedDocuments.find((product) => product.id === id);
    if (!product) throw new Error("Could not find user");
    return product;
};
