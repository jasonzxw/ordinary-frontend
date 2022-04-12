/*
 * @Author: jasonz
 * @Date: 2022-04-11 07:40:40
 * @Last Modified by: jasonz
 * @Last Modified time: 2022-04-11 07:51:58
 */
/*
 * @Author: jasonz
 * @Date: 2022-04-11 07:40:38
 * @Last Modified by: jasonz
 * @Last Modified time: 2022-04-11 07:40:38
 */
// class Promise{
//     state = 'pending';
//     status = 0 ;
//     callbacks = [] ;
//     errbacks = [] ;
//     value = null ;
//     constructor(func) {
//         func(this._resolve.bind(this),this._reject.bind(this))
//     };
//     then(callback){
//         //collect callback
//         if(this.state === 'pending'){
//             if(typeof callback === 'function'){
//                 this.callbacks.push(callback)
//             }else {
//                 throw new Error("then  needs function callback")
//             }
//         }else {
//             //state has changed and function call
//             callback(this.value)
//         }
//         return this  
//     };
//     catch(callback){
//         //collect callback
//         if(this.state === 'pending'){
//             if(typeof callback === 'function'){
//                 this.errbacks.push(callback)
//             }else {
//                 throw new Error("then  needs function callback")
//             }
//         }else {
//             //state has changed and function call
//             callback(this.value)
//         }
//         return this 
//     };
//     // change state forever
//     _resolve(val){
//         if(this.status === 0){
//             this.status = 1 ;
//             setTimeout(() => {
//                 this.state = 'fullfilled' ,
//                 this.value = val ,
//                 this.callbacks.forEach(func => func(val))
//             }, 0);
//         }
//     };
//     _reject(error){
//         if(this.status === 0){
//             this.status = 1 ;
//             setTimeout(() => {
//             this.state = 'rejected' ;
//             this.value = error ;
//             this.errbacks.forEach(err => err(error))
//             }, 0);
//         }
//     }
// }

// const p = new Promise(function(resolve,reject){
//     console.log(1)
//     resolve('执行resolve')
//     reject( new Error("报错啦"))
// })

// p.then(val => console.log(val))

// p.catch(val => console.log(val))

// console.log(3)

// const dns = require('dns');
// dns.resolve4('www.google.com',(err,address,family) =>{
//     console.log(err)
//     console.log(address,family)
// })

var internetAvailable = require("internet-available");
 
internetAvailable().then(function(){
 console.log("Internet available");
}).catch(function(){
 console.log("No internet");
});



