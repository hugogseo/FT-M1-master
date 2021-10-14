x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function (a, b, c) {
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b); //10 //9
};
c(8, 9, 10);
console.log(b); //10
console.log(x); //1

// ******************

console.log(bar); //undefined
console.log(baz); //Error
foo();
function foo() {
  console.log("Hola!");
} //undefined //Hola
var bar = 1;
baz = 2;

// ******************
var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor); //Franco
// ******************

var instructor = "Tony";
console.log(instructor); //Tony
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor); //Franco
  }
})();
console.log(instructor); //Tony
// ******************

var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); //The Flash
  console.log(pm); //Reverse Flash
}
console.log(instructor); //Tony //The Flash
console.log(pm); //Franco

// ******************
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //undefined //2
"4px" - 2 //NaN
7 / 0 // 0 //Infinity
{}[0]
parseInt("09")//09 //9
5 && 2 //2
2 && 5//5
5 || 0// 5
0 || 5//5
[3]+[3]-[10]//23
3>2>1// true //false
[] == ![] //true
// ******************

function test() {
  console.log(a); //undefined
  console.log(foo());//undefined //2
  
  var a = 1;
  function foo() {
    return 2;
  }
}

test();


// ******************

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
      var snack = 'Friskies'; 
      return snack;
    }
    return snack;
  }
  
  getFood(false);
  // ******************
  
  var fullname = 'Juan Perez';
var obj = {
  fullname: 'Natalia Nerea',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    }
  }
};

console.log(obj.prop.getFullname());//Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test());//Juan Perez

// ******************


function printing() {
  console.log(1);                                         //1
  setTimeout(function() { console.log(2); }, 1000);       //4
  setTimeout(function() { console.log(3); }, 0);          //3
  console.log(4);                                         //2
}

printing();