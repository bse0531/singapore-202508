
# Travel Site Scaffold

## 사용법
1) 이 폴더를 GitHub 저장소에 그대로 업로드하세요.
2) 저장소 **Settings → Pages** 에서 Source 를 `main` 브랜치 / 루트로 설정하세요.
3) 배포 주소가 생성되면 접속해 확인합니다.

### 페이지
- `index.html` 홈
- `day1.html`, `day2.html`, `day3.html` (복제해서 Day4… 확장)
- `gallery.html` 갤러리 (assets 폴더 이미지 자동 표시)
- `map.html` 지도 (Leaflet + OpenStreetMap)
- `notes.html` 메모 (브라우저 localStorage 저장)
- `info.html` 여행 정보

### 커스터마이즈 팁
- 색상/타이포는 `styles.css` 에서 조정
- 지도 마커는 `map.js` 의 `places` 배열 수정
- 갤러리 파일 목록은 `gallery.js` 의 `samples` 수정 또는 간단한 빌드 스크립트로 자동화
