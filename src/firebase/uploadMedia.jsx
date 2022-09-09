import { storage } from './firebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';

const uploadMedia = (type, folder, file) => {
    let fileFormat  = type === 'audio/mpeg'? '.mp3': '.jpg';
    const metadata = {
        contentType: type
    };

    const storageRef = ref(storage, folder + '/' + uuidv4() + fileFormat);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if(progress === 100) console.log("The media was uploaded")
            },
            (error) => {
                if(error.code === 'storage/unauthorized'){
                    alert("Usuario invalido, por favor realice el inicio de sesión")
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    return downloadURL;
                });
            }
        );

}
 
export default uploadMedia;