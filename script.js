document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // 폼 제출 방지

    const fileInput = document.getElementById('gameFile');
    const file = fileInput.files[0];

    if (file) {
        const listItem = document.createElement('li');
        listItem.textContent = file.name;
        document.getElementById('gameList').appendChild(listItem);
        
        // 파일 업로드 처리 (여기서는 실제 파일 업로드 기능이 필요)
        // 예: 서버에 파일을 POST 요청으로 전송하는 코드가 필요합니다.
        
        // 파일 입력 초기화
        fileInput.value = '';
    }
});
document.getElementById('openGameButton').addEventListener('click', function() {
    window.open('file:///C:/Users/user/Downloads/rhythm_game.html', '_blank'); // 새 창으로 열 URL을 입력
});
