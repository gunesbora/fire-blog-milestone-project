import firebase from "./firebase"
import {useState,useEffect} from "react";
import { toastSuccessNotify } from "../helpers/toastNotify";



import { getDatabase,ref,set,push,onValue,remove,update} from "firebase/database";


export const AddUser=(info,navigate)=>{
    const db = getDatabase();
    const userRef=ref(db,"via");
    const newUserRef=push(userRef)
    set((newUserRef),{
        title:info.title,
        image:info.image,
        content:info.content,
        privateId:info.privateId,
        email:info.email,
        date:info.date,
    })
    navigate("/")
    toastSuccessNotify("Blog Added Successfully")
}


export const useFetch=()=>{
    // const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(() => {
        

        const db = getDatabase();
        const userRef=ref(db,"via");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const baglantiArray=[];

            for(let id in data){
                baglantiArray.push({id,...data[id]})
            }          
            setContactList(baglantiArray);
            // setIsLoading(false);
            
        });
    },[])
    return {contactList}
}


export const DeleteUser=(id,navigate)=>{
    
    const db = getDatabase();
    const userRef=ref(db,"via");
    remove(ref(db,"via/"+id))
    toastSuccessNotify("Blog Deleted Successfully")
    navigate("/")

   

}

export const EditUser=(info,navigate)=>{
const db = getDatabase();
const updates = {};

updates["via/"+info.id]=info;

toastSuccessNotify("Blog Updated Successfully")
navigate("/")

 
return update(ref(db),updates);


}