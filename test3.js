// Set을 사용한 groupBy 예시
const arr = ['apple', 'banana', 'orange', 'apple', 'orange'];
const uniqueValues = [...new Set(arr)]; // 중복 제거
const result = uniqueValues.map(v => ({
  name: v,
  count: arr.filter(val => val === v).length // 요소 수 계산
}));
console.log(result);

// Map을 사용한 groupBy 예시
const data = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'orange', color: 'orange' },
  { name: 'grape', color: 'purple' },
  { name: 'apple', color: 'green' },
  { name: 'banana', color: 'green' },
  { name: 'apple', color: 'red' },
];
const groupedData = new Map();
data.forEach(obj => {
  const key = obj.name;
  const value = obj.color;
  if (!groupedData.has(key)) {
    groupedData.set(key, [{ name: key, colors: [value] }]);
  } else {
    const group = groupedData.get(key);
    const index = group.findIndex(o => o.name === key);
    if (index === -1) {
      group.push({ name: key, colors: [value] });
    } else {
      group[index].colors.push(value);
    }
  }
});
console.log(Array.from(groupedData.values()).flat());