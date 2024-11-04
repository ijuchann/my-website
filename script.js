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

const uploadForm = document.getElementById('uploadForm');
const gameFileInput = document.getElementById('gameFile');
const gameList = document.getElementById('gameList');
const searchInput = document.getElementById('searchInput'); // 검색 입력 필드

let games = [
    // 미리 설정된 게임 파일 이름 (실제 파일 경로에 맞게 수정 필요)
    { name: 'https://ijuchann.github.io/rhythm_game/' }, 
    { name: '예제게임2.html' },
    { name: '예제게임3.html' }
]; // 업로드된 게임 목록을 저장하는 배열

// 페이지가 로드될 때 미리 설정된 게임 목록을 표시
updateGameList();

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지

    const file = gameFileInput.files[0]; // 선택한 파일
    if (file) {
        games.push(file); // 배열에 게임 파일 추가
        gameFileInput.value = ''; // 입력 필드 초기화
        updateGameList(); // 목록 업데이트
    }
});

searchInput.addEventListener('input', function() {
    updateGameList(); // 검색할 때마다 목록 업데이트
});

function updateGameList() {
    const searchQuery = searchInput.value.toLowerCase(); // 검색어 소문자로 변환
    gameList.innerHTML = ''; // 목록 초기화

    // 필터링된 게임 목록 생성
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchQuery));

    filteredGames.forEach(game => {
        const li = document.createElement('li');
        
        // 게임 이름을 클릭 가능한 링크로 추가
        const link = document.createElement('a');
        link.textContent = game.name; // 게임 이름 추가
        link.href = '#'; // 기본 링크는 #로 설정
        link.addEventListener('click', function() {
            const url = URL.createObjectURL(new Blob([game.name], { type: 'text/html' })); // Blob URL 생성
            window.open(url, '_blank'); // 새 창으로 열기
        });
        
        li.appendChild(link); // 링크를 리스트 아이템에 추가
        gameList.appendChild(li); // 목록에 항목 추가
    });
}

// 게임 열기 버튼 이벤트 리스너
document.getElementById('openGameButton').addEventListener('click', function() {
    window.open('file:///C:/Users/user/Downloads/rhythm_game.html', '_blank'); // 새 창으로 열 URL을 입력
});
