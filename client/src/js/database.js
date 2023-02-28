import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
   openDB('', 1, {
      upgrade(db) {
         if (db.objectStoreNames.contains('')) {
           console.log(' database already exists');
           return;
         }
         db.createObjectStore('', { keyPath: 'id', autoIncrement: true });
         console.log(' database created');
       },
   })
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
 
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  
};

initdb();
