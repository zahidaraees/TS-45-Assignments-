/*21. They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/

interface books{     // create structure of object named books and define types of properties or keys
    title:string;
    author:string;
    publisher:string;
    year:number;
}
let books={     //add values in above mentioned properties / keys
    title:"TypeScript Cookbook", 
    author:"Stefan Baumgartner", 
    publisher:"O'Reilly Media, Inc.", 
    year:2023
}
console.log(books)