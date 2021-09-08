# 문성운 201840117

## [09월 08일]

### 리액트 프로젝트 생성해보기

- npx create-react-app [디렉토리 이름]

React 17버전 이후로 **import React from 'react'**  구문을 생략해도 동작

### 컴포넌트

- 화면에는 반드시 하나의 컴포넌트만 보여줘야하며 두개의 컴포넌트를 각각 출력하면 에러

하나의 컴포넌트 안에 여러 컴포넌트를 보여주는것은 가능!

- 컴포넌트는 반드시 대문자로 시작해야하며 소문자로 만들면 JSX문법을 인식하지 못함

### 프로젝트 실행

- 앱 실행은 npm start 로 실행하며 실시간으로 변경사항이 적용되서 바로바로 새로고침이 됨

## [09월 01일]

### 개발환경 세팅

- Chocolatey 설치
    - 파워셀에서 명령어 실행

```jsx
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('[https://community.chocolatey.org/install.ps1](https://community.chocolatey.org/install.ps1)'))
```

- node.js 설치
    - 파워셀에서 명령어 입력 후 실행

```jsx
choco install nodejs
```