// 1.
// --------------------------
// apples = 14
var apples = 14;
// puts apples
console.log(apples);
// puts "I have #{apples} apples."
console.log("I have " + apples + " apples.")

// 2.
// --------------------------
// materials = ['wood', 'metal', 'stone']
var materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant' => "The world's largest land mammal.",
//   'school' => 'A place of learning.',
//   'ice cream' => 'A delicious milk-based dessert.',
// }
words = {
  elephant: "The world's largest land mammal.",
  school: "A place of learning",
  ice_cream: "A delicious milk-based dessert"
};

// 3.
// --------------------------
// num = 16
var num = 16;
//if num > 10
//  puts "#{num} is greater than 10."
if (num > 10) {
  console.log(num + " is greater than 10.")
}
//elsif num == 10
//  puts "#{num} is exactly 10."
else if (num === 10) {
  console.log(num + " is exactly 10.")
}
//else
//  puts "#{num} must be less than 10."
//end
else {
  console.log(num + " must be less than 10")
}

// 4.
// --------------------------
//10.times do
//  puts "Doing the same thing over and over."
//end
for (var i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over.")
}

// 5.
// --------------------------
//base = 5
//20.times do |num|
//  puts num + base
//end
var base = 5;
for (var i = 1; i <= 20; i++) {
  console.log(i + base);
}

// 6.
// --------------------------
//total = 0
//100.times do |num|
//  total += num
//end
//puts total
var total = 0
for (var i = 1; i <= 100; i++) {
  console.log(total += i)
}

// 7.
// --------------------------
//(3..15).each do |height|
//  if height > 9
//    puts "You can get on the rollercoaster!"
//  else
//    puts "You are too short to ride this rollercoaster."
//  end
//end
for (var height = 3; height < 16; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!")
  }
  else {
    console.log("You are too short to ride this rollercoaster.")
  }
}

// 8.
// --------------------------
//containers = ['purse', 'wallet', 'backback']
//containers.each do |container|
//  puts container
//end
var containers = ['purse', 'wallet', 'backback']
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

//9.
// --------------------------
//def hello_world
//  puts "Hello world!"
//end

//hello_world
function hello_world() {
  console.log("Hello World")
}

hello_world();

//10.
// --------------------------
// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount
function add(first_num, second_num) {
  return first_num + second_num
}

var total = add(5, 7)
console.log(total)
