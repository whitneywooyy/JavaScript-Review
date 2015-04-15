/* Declare and Define the functions here that will make the function calls below work properly */

var first = function(arr, cb) {
  return cb(arr[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var last = function(arr, cb2) {
  return cb2(arr[arr.length-1]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
 
 var contains = function(name, arr, cb3) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === name) {
      return cb3(true);
    }
  }
  return false;
 };

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* 4. NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var map = function(arr, cb) {
  var temp = [];
  for(var i = 0; i < arr.length; i++) {
    temp[i] = cb(arr[i]);
  }
  return temp;
};

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* 5. NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var uniq = function(arr, cb) {
  var newArr = [];
  newArr.push(arr[0]);
    for (var i = 0; i < arr.length; i++) {
        var isNew = true;
        for (var j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                isNew = false;
            }
                        
        }
        if (isNew) {
            newArr.push(arr[i]);    
        }
    }
    return cb(newArr);
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* 6. NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});




/* 7. NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* 8. NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})
