import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Banner from "../../components/Banner";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, { categories, filterCategory } from "../../components/Category"
import BannerCarousel from '../../components/CarouselBanner';

/*import { useState } from "react";*/

const slides = [
    {
        image: '/images/banner-1.jpg',
        title: 'Taylor Swift',
        paragraph: 'Assista agora ao clipe de "Bejeweled" de Taylor Swift.',
        buttonLink: '/watch/b7QlX3yR2xs',
        buttonText: 'Assistir'
    },
    {
        image: '/images/banner-2.jpg',
        title: 'Dua Lipa',
        paragraph: 'Confira os bastidores da turnê "Future Nostalgia" de Dua Lipa.',
        buttonLink: '/watch/asrGCMGSmY0',
        buttonText: 'Assistir'
    },
    {
        image: '/images/banner-3.jpg',
        title: 'Rebeca Andrade',
        paragraph: 'Confira o ouro que consagrou Rebeca como a maior medalhista olímpica brasileira.',
        buttonLink: '/watch/YJib4tx6294',
        buttonText: 'Assistir'
    }
];

function Home() {

    return (
        <>
        <ScrollToTopButton/>
            <Header />
            <BannerCarousel slides={slides} />
            <Container>

                {categories.map((category, index) =>
                    <Category category={category}>
                        <Carousel>
                            {filterCategory(index).map((video) => <Card id={video.id} key=
                                {video.id} />)}
                        </Carousel>
                    </Category>
                )}
                  {/* <Banner
                            image={`${process.env.PUBLIC_URL}/images/mha.png`}
                            buttonText="Assistir"
                            buttonLink="/watch/L1FdEBTJXus" 
                        /> */}
            </Container>
            <Footer />
        </>
    );
}

export default Home;