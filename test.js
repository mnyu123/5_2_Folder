// key 생성
const key = Array.from({ length: 1000 }, (_, i) => i + 1);

// value 생성
const value = Array.from({ length: 1000 }, () =>
  Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1)
);

// 객체 생성
const obj = {};
key.forEach((k, i) => {
  obj[k] = value[i];
});

console.log(obj);