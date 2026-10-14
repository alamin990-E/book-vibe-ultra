import React from 'react';

const getBookData = async() => {
   const res = await fetch (`http://localhost:3000/data.json`)
   if(!res.ok){
     throw new Error("Failed to fetch books");
   }
   const bookData = await res.json()
  
   return bookData
   
};



export default getBookData;