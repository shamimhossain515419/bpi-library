const uploadImage = (...args) => args.filter(Boolean).join(" ");

export default uploadImage;

export const firebaseStroageURL = "gs://binary-bookshelf.appspot.com/";
