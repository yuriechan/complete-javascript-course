function retirement(retirementAge){
  var a = ' years left until retirement';
    return function(yearOfBirth){
      var age = 2016 - yearOfBirth;
      console.log((retirementAge - age)+a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
retirement(66)(1990);

function interviewQuestion(job){
    return function (name){
      if (job === 'designer'){
        console.log(`${name}, can you please explain what UX design is?`);
      } else if (job === 'teacher'){
        console.log(`What subject do you teach,${name}`);
      } else {
        console.log(`Hello${name}, what do you do?`);
      }
    }
}

const answer = interviewQuestion('designer')('john');
//console.log(answer);

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style,timeOfDay){
    if (style === 'formal'){
      console.log(`Good ${timeOfDay}, I am ${this.name}`)
    } else if (style === 'casual'){
      console.log(`Hey whats up, ${this.name}. Have a great ${timeOfDay}.`)
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal','afternoon');
john.presentation.call(emily,'casual','afternoon');

var johnFriendly = john.presentation.bind(john,'casual');
johnFriendly('night');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr,fn){
  var arrRes = [];
  for (var i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el){
  return 2016 - el;
}
