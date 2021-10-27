# 문성운 201840117

## [10월 27일]

## 1. `Slice` 란?

- 리액트의 `Slice`는

```jsx
<p className="movie-summary">{summary.slice(0,5)}</p>
//텍스트가 abcdefg 라면 abcde만 출력
```

- 문자열을 일정부분만 잘라서 가져온다. 위에 코드처럼 사용했을경우 0번째(1번째)부터 3번째보다 하나 앞인 4번째의 인덱스의 문자까지만 출력한다

## 2. CSS 추가하기

- **App.css**

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #eff3f7;
  height: 100%;
}
```

- **Movie.css**

```css
.movies .movie {
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3),
    0 -6px 16px -6px rgba(0, 0, 0, 0.025);
}

.movies .movie a {
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
}

.movie img {
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3),
    0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}

.movie .movie__title,
.movie .movie__year {
  margin: 0;
  font-weight: 300;
}

.movie .movie__title {
  margin-bottom: 5px;
  font-size: 24px;
  color: #2c2c2c;
}

.movie .movie__genres {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
}

.movie__genres li,
.movie .movie__year {
  margin-right: 10px;
  font-size: 14px;
}
```

- **App.JS 변경**

```jsx
import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

- **Home.JS(컴포넌트 추가) 기존 App.js 코드 계승**

```jsx
import { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css'

class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-class">Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
```

- **Home.css**

```css
.container {
  height: 100%;
  display: flex;
  justify-content: center;
}

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
}
.movies {
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;
}

@media screen and (max-width: 1090px) {
  .movies {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
```

## [09월 15일]

## 1. `Props` 란?

- 리액트의 `props`는

```
1. <Header></Header>

2. <Header name="SungWoon"></Header>
```

1번 처럼만 사용가능했던 `Header`컴포넌트를, **2번 방법처럼 `App`컴포넌트에서 값을 직접 정의해서 넘겨주는 방법**

> ***즉, props란 컴포넌트 끼리 값을 전달하는 수단이다.***

## 2. Props 사용법

- `jsx` 문법으로 아래처럼 사용한다.

```jsx
<Header name="SungWoon"></Header>

function Header({name}){
	<h1>나의 이름은 {name}입니다!</h1>
}

//출력결과 : 나의 이름은 SungWoon입니다!
```

- 이런식으로 컴포넌트를 호출할때 데이터를 넘겨주어 매개변수처럼 사용하는 방법이다.

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