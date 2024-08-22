import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import Category from "./components/Category"
import videos from "./json/videos.json"

const categories = [
  "Videoclipes",
  "73 questões | Vogue",
  "Musicais",
  "Esporte",
  "Entrevistas"
]


function filterCategory(id){
  return videos.filter( video => video.category === categories[id] )
}

function App() {
  return (
    <>
      <Header/>
      <Banner image="home"/>
      <Container>
          <Category category="Videoclipes">
            { filterCategory(0).map((video) => <Card id={video.id} key={video.id} />)}
          </Category> 
          <Category category="73 questões | Vogue">
            { filterCategory(1).map((video) => <Card id={video.id} key={video.id} />)}
          </Category> 
          <Category category="Musicais">
            { filterCategory(2).map((video) => <Card id={video.id} key={video.id} />)}
          </Category> 
          <Category category="Esporte">
            { filterCategory(3).map((video) => <Card id={video.id} key={video.id} />)}
          </Category> 
          <Category category="Entrevistas">
            { filterCategory(4).map((video) => <Card id={video.id} key={video.id} />)}
          </Category> 
      </Container>
      <Footer/>
    </>
  );
}

export default App;
