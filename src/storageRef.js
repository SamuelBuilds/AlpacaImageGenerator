import storage from './index';
import  ref from "firebase/storage";
// Points to the root reference
const storageRef = ref(storage);
// Points to '{folder}'
const folders = ['accessories','backgrounds','ears','eyes','hair','leg']
const imagesRef = ref(storageRef, 'images');