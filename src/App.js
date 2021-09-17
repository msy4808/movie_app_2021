const foodLike = [
  {
    name: "chikin",
    image: "https://lh3.googleusercontent.com/proxy/bYh7FDN8x-GipivtHhbK3O4EQi1VqFVnP_psMK3gRYyNX0Wj_jbXet6J6J54bcZJSq2WCq0hKuAWyA15XUjV5h7jPyJlewn8ZVeb5g",
  },
  {
    name: "pizza",
    image: "https://cdn.dominos.co.kr/admin/upload/goods/20210603_0a73o5Q1.jpg?RS=350x350&SP=1",
  },
];
function renderFood(foo) {
  return <Food name={foo.name} picture={foo.image} />;
}

function App() {
  return <div>{foodLike.map(renderFood)}</div>;
}

function Food({ name, picture }) {
  return(
  <div>
  <h1>I LIKE {name}</h1>
  <img src={picture}/>
  </div>
  );
}

export default App;
