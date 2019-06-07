
/** 
 * returns the first letter changed to UpperCase
*/
function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
/** 
 * returns the first letter changed to UpperCase
*/
function lowerCaseFirst(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
/** 
 * changes a string from dash-case to camelCase
*/
function dashToCamelCase(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

/** 
 * changes a string from camelCase to dash-case
*/
function camelToDashCase(str) {
  let upperCaseArr = Array.from(str).reduce((red,item,index) => 
    item.toUpperCase() == item ? [...red,index] : red , []);

  upperCaseArr.forEach((element,index) => {
    str = `${str.slice(0,element+index)}-${str.charAt(element+index).toLowerCase()}${str.slice(element+1+index)}`});
  return str;
}


/*

function filterRange( arr, a, b ){
    return arr.filter(item => (a <= item && item <= b))
}

let arr = [5, 3, 8, 1];

let filtered = filterRange( arr, 1, 4 );

alert( 'this should be 3,1: '+filtered ); // 3,1 (matching values)

alert( 'this should be 5,3,8,1: '+arr ); // 5,3,8,1 (not modified)



function filterRangeInPlace( arr, a, b ){
    let auxArr = [];
    arr.forEach( ( item, index ) => {  if (item < a || item > b) auxArr = auxArr.concat( index ) } )
    auxArr.reverse().forEach( item => arr.splice(item,1))
}

arr = [1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert('should be 1,2,3,4: '+arr ); // [1,2,3,4]



arr = [5, 2, 1, -10, 8];

let order = ( a, b ) => {
    return b - a ;
}
arr.sort( order );
arr.sort( ( a, b ) => b - a)

alert( 'should be 8, 5, 2, 1, -10' + arr ); // 8, 5, 2, 1, -10



arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

function copySorted( arra ){ return arra.slice().sort() }

alert( 'should be CSS, HTML, JavaScript\n' + sorted ); // CSS, HTML, JavaScript
alert( 'should be HTML, JavaScript, CSS (no changes)\n' + arr ); // HTML, JavaScript, CSS (no changes)



function Calculator() {
    let methods = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
    }

    this.calculate = function( str ) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) return NaN;

        return methods[op](a ,b);
    }

    this.addMethod = function( name, func){
        methods[name] = func;
    }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
alert( calc.calculate("17 - 7") ); // 10
calc.addMethod( "*", ( a , b) => a * b);
alert( calc.calculate("5 * 2") ); // 10




let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map( (item, index, array) => array[index] = item.name )

alert( names ); // John, Pete, Mary




 john = { name: "John", surname: "Smith", id: 1 };
 pete = { name: "Pete", surname: "Hunt", id: 2 };
 mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let usersMapped = users.map( item => ({
                    "id" : item.id,
                    "fullName" : `${item.name} ${item.surname}`,
                    }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith



function sortByName( array ){
    array.sort( ( a, b ) => { return a.name.localeCompare(b.name) })
}
john = { name: "John", age: 25 };
 pete = { name: "Pete", age: 30 };
 mary = { name: "Mary", age: 28 };

 arr = [ john, pete, mary ];

sortByName(arr);

// now: [john, mary, pete]
alert('John: ' + arr[0].name); // John
alert('Pete ' + arr[2].name); // Pete


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };

  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }

  // show counts of all possible permutations
  let str = "";
  for (let key in count) {
    str += `${key}: ${count[key]} \n` ;
  }
  alert(str);



function* genAges( a ){
    for (let item of a){
        yield item.age
    }
}

function getAverageAge( array ){
    let answer = prompt('Want to see the accumulation of ages?','Y')
    let total = 0;
    let aux = 0;
    let count = 0;
    let generator = genAges(array);

    while( true ){
        aux = generator.next().value;
        if (aux == undefined ) break;
        total +=aux;
        count++;
        if ( answer == "Y" ) answer = prompt(`Total es ${total}, quieres seguir viendo el acumulador`, 'Y' );
    }

    return total * 1.0 / count ;
}

 john = { name: "John", age: 25 };
 pete = { name: "Pete", age: 30 };
 mary = { name: "Mary", age: 29 };

arr = [ john, pete, mary ];

alert( ` Averege is ${getAverageAge(arr)}` ); // (25 + 30 + 29) / 3 = 28



function unique(arr) {
    let dict = {}
    let res = [] ; debugger;
    for (let it of arr){
        if ( ! dict[ it ] ){
            dict[ it ] = 1 ;
            res = res.concat( [ it ] ) ;
        }
    }
    return res;
}

function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    return result;
  }

  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  alert( 'should be Hare, Krishna, :-O:\n'+unique(strings) ); // Hare, Krishna, :-O
*/