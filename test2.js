// 과일들을 멤버로 가지는 배열 생성
const fruits = ["사과", "바나나", "딸기", "오렌지", "포도"];

// 특정 과일 찾기
const searchFruit = "바나나";
const index = fruits.indexOf(searchFruit);

if (index !== -1) {
    console.log(`${searchFruit}은(는) ${index}번째 요소입니다.`);
  } else {
    console.log(`${searchFruit}을(를) 찾을 수 없습니다.`);
}

function findFruit() {
    
}