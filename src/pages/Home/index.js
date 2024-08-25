import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category, {categories, filterCategory} from "../../components/Category"
import { useState } from "react";

function Home() {

return (
    <>
    <Header/>
    <Banner image="home"/>
    <Container>
        
        {categories.map((category, index) =>
            <Category category={category}>
                {filterCategory(index).map((video) => <Card id={video.id} key=
                {video.id} />)}
            </Category> 
            )}  
    </Container>
        <Footer/>
    </>
    );
}

export default Home;