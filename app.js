// const arr = [
//   {
//     id: 1,
//     value: 20,
//   },
//   {
//     id: 2,
//     value: 30,
//   },
//   {
//     id: 3,
//     value: 40,
//   },
//   {
//     id: 4,
//     value: 50,
//   },
// ];

// splice -> multiple

// const index =arr.findIndex((item)=>item.id === 2);
// const arr2 = arr.splice(index ,1);
// console.log(arr);



// Filter -> multiple
// const index= arr.filter((item)=>item.id != 2);
// console.log(arr);
// console.log(index);



// ======== Object literal =========
const microphone={
    brand:'Fine',
    indicator:true,
    price:800,
    color:'Black',
    startRecording(){
        console.log('recoding started');
    },
    stopRecording(){
        console.log('recording stopped')
    }
}
console.log(microphone);

/**
 * There are two different parts in object
 * 1. Noun / Adjective (State/data/property/field)
 * 2. Verb / (functionalities -> start, stop)
 */


//======== Constructor function ===========
const testObj=new Object();

testObj.name='monoj';
testObj.time=new Date();

console.log(testObj);