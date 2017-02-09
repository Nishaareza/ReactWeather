// function getTempCallback(location,callback){
//   callback(undefined, 78);
//   callback('city notfound');
// }
// getTempCallback('Philadephia',function(err,temp){
//   if(err){
//     console.log('error',err);;
//   }else {
//     console.log("sucess",temp);
//   }
//
// });
//
// function getTempPromise(location){
//
//    return new Promise(function(resolve,reject){
//      setTimeout(function(){
//        resolve(79);
//        reject('City not found');
//
//      },1000)
//
//    });
// }
// getTempPromise('Philadephia').then(function(temp){
//   console.log('promise sucess',temp);
// }, function(err){
//   console.log('promise error',err);
// })




//challenge area
function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a ==='number'&& typeof b ==='number'){
      resolve(a+b);
    }else{
    reject('Not a number');
    }
  });
}

addPromise(2,3).then (function(sum){
  console.log('sucess',sum);
}, function(err){
  console.log('error',err);
});

addPromise('Andrew',3).then (function(sum){
  console.log('this should not show up');
}, function(err){
  console.log('This should appaer',err);
});
