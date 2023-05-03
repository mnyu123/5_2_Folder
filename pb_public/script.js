const fileInput = document.getElementById("myFileInput");
const previewBtn = document.getElementById("previewBtn");
const previewContainer = document.querySelector(".image-preview");
const myButton = document.getElementById('my-button');
const myInfoDiv = document.getElementById('my-info');

myButton.addEventListener('click', function () {
    const my = {
        "name": "JOE YOUNG JAE",
        "age": 25,
        "isMarried": false,
        "hobbies": ["pc-game", "youtube-watching", "travel"],
        "address": {
            "street": "iksandaero 460",
            "city": "iksan",
            "state": "junrabokdo",
            "zip": "313"
        }
    };

    const myJson = JSON.stringify(my, null, 2);
    myInfoDiv.innerHTML = '<pre>' + myJson + '</pre>';
});

// 제출 버튼 클릭 이벤트 핸들러
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 동작 차단
    alert('제출함.'); // 제출 완료 알림 메시지
    previewContainer.innerHTML = ''; // 미리보기 화면 초기화

    // 화면 초기화
    const video = document.querySelector('.video-preview video');
    video.pause();
    video.currentTime = 0;
});

function previewVideo() {
    const videoInput = document.getElementById('video');
    const selectedFile = videoInput.files[0];

    // 파일이 선택되지 않은 경우 처리
    if (!selectedFile) {
        alert('파일을 먼저 선택하세요!');
        return;
    }

    // 동영상 파일이 아닌 경우 처리
    if (!selectedFile.type.startsWith('video/')) {
        console.log('동영상 파일이 아닙니다.');
        return;
    }

    const video = document.querySelector('.video-preview video');
    const videoUrl = URL.createObjectURL(selectedFile);
    video.src = videoUrl;
    video.load();
}

// 미리보기 버튼 클릭 이벤트 핸들러
previewBtn.addEventListener("click", function () {
    const selectedFile = fileInput.files[0];

    // 파일이 이미지 파일이 아닌 경우 처리
    if (!selectedFile.type.startsWith("image/")) {
        console.log("이미지 파일이 아닙니다.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
        img.width = 500;
        img.height = 400;
        previewContainer.innerHTML = "";
        previewContainer.appendChild(img);
    };

    reader.readAsDataURL(selectedFile);
});

function resetVideo() {
    const video = document.querySelector('.video-preview video');
    video.currentTime = 0;
}
