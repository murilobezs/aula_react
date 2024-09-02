import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, { categories, filterCategory } from "../../components/Category"

/*import { useState } from "react";*/

function Home() {

    return (
        <>
        <ScrollToTopButton/>
            <Header />
            <Banner image="home" />
            <Container>

                {categories.map((category, index) =>
                    <Category category={category}>
                        <Carousel>
                            {filterCategory(index).map((video) => <Card id={video.id} key=
                                {video.id} />)}
                        </Carousel>
                    </Category>
                )}
            </Container>
            <Footer />
        </>
    );
}

export default Home;