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

export const favProduct = async (productId, bool) => {
    const collectionRef = firestore.collection("Hats");
    const docRef = collectionRef.doc(productId);
    await docRef.update({ favourited: bool });
};
export const updateCartSmall = async (id, initialValue) => {
    const collectionRef = firestore.collection("Hats");
    const docRef = collectionRef.doc(id);

    await docRef.update({ "cart.Small": initialValue + 1 });
};
export const updateCartMedium = async (id, initialValue) => {
    const collectionRef = firestore.collection("Hats");
    const docRef = collectionRef.doc(id);

    await docRef.update({ "cart.Medium": initialValue + 1 });
};
export const updateCartLarge = async (id, initialValue) => {
    const collectionRef = firestore.collection("Hats");
    const docRef = collectionRef.doc(id);

    await docRef.update({ "cart.Large": initialValue + 1 });
};
export const updateQuantitySmall = async (id, initialValue) => {
    const collectionRef = firestore.collection("Hats");
    const docRef = collectionRef.doc(id);

    await docRef.update({ "quantity.Small": initialValue - 1 });
};
export const updateQuantityMedium = async (id, initialValue) => {
    const collectionRef = firestore.collection("Hats");
    const docRef = collectionRef.doc(id);

    await docRef.update({ "quantity.Medium": initialValue - 1 });
};
export const updateQuantityLarge = async (id, initialValue) => {
    const collectionRef = firestore.collection("Hats");
    const docRef = collectionRef.doc(id);

    await docRef.update({ "quantity.Large": initialValue - 1 });
};
