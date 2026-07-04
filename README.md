# 말똥도넛 브랜드 랜딩 페이지

말똥도넛 / MALDDONG DONUT의 디저트, 공간, 포토존, 대표 매장, SNS 채널을 소개하는 React + Vite 기반 단일 브랜드 페이지입니다.

## 기술 스택

- React
- Vite
- 일반 CSS
- JSON 기반 콘텐츠
- Cloudflare Pages 배포 기준
- Cloudflare R2 public URL 기반 이미지 구조
- Sveltia CMS 연동 준비용 `/admin` 뼈대

## 설치

```bash
npm install
```

## 개발 서버

```bash
npm run dev
```

## 빌드

```bash
npm run build
```

## Cloudflare Pages 배포

- Build command: `npm run build`
- Build output directory: `dist`
- 환경 변수: 현재 MVP에서는 필요 없음

이미지 URL은 코드에 직접 넣지 않고 `src/content/*.json`에서 관리합니다. 실제 배포 시 Cloudflare R2에 이미지를 업로드한 뒤 JSON의 `image`, `thumb`, `imageDesktop`, `imageMobile` 값을 R2 public URL로 교체하세요.

## 콘텐츠 수정

주요 문구와 링크는 아래 파일에서 관리합니다.

- `src/content/brand.json`
- `src/content/menus.json`
- `src/content/gallery.json`
- `src/content/stores.json`
- `src/content/social.json`
- `src/content/notices.json`

운영시간은 변동 가능성이 있어 페이지에 고정값으로 넣지 않았습니다. 방문자는 네이버지도 링크에서 최신 정보를 확인하도록 안내합니다.

## Sveltia CMS

`public/admin/index.html`과 `public/admin/config.yml`에 CMS 뼈대를 준비했습니다.

운영 연결 시 TODO 항목을 채워야 합니다.

- GitHub repository
- branch
- OAuth/Auth Worker URL
- site URL
- R2 media library 설정

Cloudflare R2 Secret Access Key 같은 민감정보는 클라이언트 코드나 `config.yml`에 넣지 마세요.

## 이미지 저작권 주의

현재 이미지는 `https://assets.example.com/malddong/...` 형태의 placeholder URL입니다. 네이버 블로그, 인스타그램, 검색 이미지 등은 저작권 문제가 있을 수 있으므로 실제 배포 전 직접 촬영 이미지 또는 사용 허가를 받은 공식 이미지를 R2에 업로드해서 사용해야 합니다.

## 참고 링크

- 네이버지도: https://naver.me/xQJRk4Ah
- 인스타그램: https://www.instagram.com/malddongdonut_official
- 유튜브: https://youtube.com/channel/UCaxdFjr8sOlJAUi9IsLqt-Q
- 네이버 블로그 참고: https://m.blog.naver.com/cicfnb1/223681245353
