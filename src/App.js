import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Container>
      <h1>ETEC MCM</h1>
      <p>Teste de React</p>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
