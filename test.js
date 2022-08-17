function test(){
  console.log(this)
}

test.bind([1,2,3])()
test.bind({age:1,name:2,info:3,hi:4})()
test.bind(1,2)()

// console.log(typeof [1,2,3])//object
// console.log(typeof null)//object
// console.log(typeof test)//function
// console.log(typeof NaN)//number
// console.log(typeof undefined)//undefined
// console.log(typeof Infinity)//number