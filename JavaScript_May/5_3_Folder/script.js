// key 생성
const key = Array.from({ length: 1000 }, (_, i) => i + 1);

// value 생성
const value = Array.from({ length: 1000 }, () =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1) // 소수점 버리고 정수만 사용 = floor
);

// 객체 생성
const obj = {};
key.forEach((k, i) => {
    obj[k] = value[i];
});

// 출력
const tbody = document.getElementById("data");
for (const k in obj) {
    const row = document.createElement("tr");
    const keyCell = document.createElement("td");
    keyCell.textContent = k;
    const valueCell = document.createElement("td");
    valueCell.textContent = obj[k].join(", ");
    row.appendChild(keyCell);
    row.appendChild(valueCell);
    tbody.appendChild(row);
}