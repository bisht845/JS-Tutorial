// the connection of resolve is with then

// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task 
//     // DB calls, cyptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })

// // second approach 

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('asyc 2 resolved');
    
// }) 

// // Third promise  (How to come data or How to send to show data with resolve)

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'SauravSingh', email: 'sauravexample.com'})
//     }, 1000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise (function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({ username: 'hitesh', password: "123"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })  
//     promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username    
//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch(function(error){
//         console.log(error);
//     })  
//     .finally(() => console.log('The Promise is either resolved or rejected')) //  this will exucute always after reject or resolve


//     const promiseFive = new Promise( (resolve, reject) => {
//         let error = true
//         setTimeout(() => {
//             if(!error){
//               resolve({ username: 'JavaScript', password: 123 })
//             } else{
//                 reject('ERROR: JS Went wrong' )
//             }
//         }, 1000);
//     })
//     // async is not hendeling the error so we use try catch 
//     async function consumePromiseFive(){
//         try {
//             const response = await promiseFive 
//             console.log(response);
//         } catch (error) {
//             console.log(error);
            
//         }  
//     }
//     consumePromiseFive()

//       using async we show to data from API

   //  async function getAllUsers() {
   //     try {
   //      const response = await fetch('https://api.github.com/users/hiteshchoudhary')
   //      const data = await response.json()
   //      console.log(data);
   //     } catch (error) {
   //      console.log('E:', error);
        
   //     }
   //  }
   //  getAllUsers() 

    //       we use await when we convert the data json . because meanwhile the data take time for converting   


    //       Using fetch we show to data from API
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then( (response)=>{
      return response.json()
    })
    .then( (data) => {
      console.log(data);
      
    })
    .catch( (error) => console.log(error));
    