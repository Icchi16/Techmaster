//  DESTRUCTING
//  Cho pehpse phân rã nhanh các giá trị bên trong
// 1 collection (array, obj)

// ES5

var arr = [1, 2, 3, 4, 5, 6, 7];
var a = arr[0];
var b = arr[1];

var obj = { name: "Ba", age: 30, job: "teacher" };

var name = obj.name;
var age = obj.age;

//  ES6

const arr = [1, 2, 3, 4];
const [a, _, b] = arr; // Bỏ qua bằng để trống ở giữa hoặc gạch ngang

const obj = {
  name: "Ba",
  age: 30,
  job: "teacher",
};

// Chú ý sử dụng tên thược tính , nếu giá trị không tồn tại thì giá trị là undefined
const { name, age } = obj;

// Extra

const obj = {
  name: "Ba",
  age: 30,
  job: "teacher",
};

const getName = ({ name }) => name;

// SPREAD OPERATOR
// Cho phếp tách rời các gái trị trong 1 collection ra thành các giá trị riêng biệt
// Thường sử dụng để sao chép nhanh một mảng, object hoặc là tách các gái trị trong collection
// thành các tham số riêng biệt khi truyêng vào hàm

const arr = [1, 2, 3];
const clone = arr;

// ES5
const arr = [1, 2, 3, 4];
const clone = arr.slice();

const obj = {};
const clone = Object.assign({}, obj);
for (let key in obj);
// ES6

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const clone = [...arr1];
const clone = [...arr1, ...arr2];

const obj = {};
const clone = { ...obj };

// Giúp hàm linh hoạt hơn
const sum = (a, b) => a + b;

const arr = [1, 2];
sum(...arr);

// REST PARAMETERS
// Lưu trữ tất cả các giá trị không xác định được truyền vào làm
// 
// ES5

const sum = fucntion (a,b) {
  // arguments - chứa tất cả các đối số truyền vào hàm (bao gồm cả a và b)
return 2;


  

};
// ES6

const sum = (a,b, ...others)=>{
  // others sẽ chứa tất cả các dối số không xác định truyền vào hàm không bao gồm a và b
  let total  =a+b;
for (let value of others) total+=value
return total;
}

const arr = [1,2,3,4,5,6,7,8];
sum(...arr);


// DEFAULT PARAMETER 
// Giá trị mặc định khi tham số 0 trả về giá trị or undefinfed

fucntion hello(name = "Stranger", age = 0, job = "Teacher"){
  console.log(`hello ${name}`);
}


// EXTRA

const obj = {
  name: "Ba",
  childern : [{name: "Bon"}]
}

obj.childern?.name

todo.completed ? "completed" : ""
todo.completed ?? "Abc"

