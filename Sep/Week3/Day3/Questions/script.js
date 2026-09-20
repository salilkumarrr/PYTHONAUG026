// 1
function subjectMarks(mil,english,physics,math,chemistery,biology){
    let totalmarks = mil+english+physics+math+chemistery+biology;
    let percentage = totalmarks/6;
    console.log("total Marks:",totalmarks);
    console.log("Percentage:",percentage + "%");
}
subjectMarks(73,65,62,38,51,50)
// 2
function calculateNumber(num) {
  let square = num * num;
  let cube = num * num * num;

  console.log("Square:", square);
  console.log("Cube:", cube);
}

calculateNumber(2);
// 3
function check(num){
    if(num>0){
       console.log("positive");
    }
    else if(num<0){
        console.log("negative");
    }
    else{
        console.log("zero");
}
}
check(-28052006);
// 3
function check(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log("A");
  } else if (marks >= 80) {
    console.log("B");
  } else if (marks >= 70) {
    console.log("C");
  } else if (marks >= 60) {
    console.log("D");
  } else {
    console.log("Fail");
  }
}

check(30);
// 4
function check(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

check(4);
// 5
function Largest(a, b, c) {
  if (a >= b && a >= c) {
    console.log("Largest:", a);
  } else if (b >= a && b >= c) {
    console.log("Largest:", b);
  } else {
    console.log("Largest:", c);
  }
}

Largest(25, 40, 30);
// 6
function Numbers() {
  let x = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      x++;
    }
  }

  console.log("Divisible Numbers:", x);
}

Numbers();
// 7
function Table(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}

Table(2);
// 8
function addnumbers(a, b) {
  return a + b;
}

let result = addnumbers(2, 3);
console.log(result);