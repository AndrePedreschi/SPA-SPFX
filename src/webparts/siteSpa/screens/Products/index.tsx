import { ReactElement, useEffect, useState } from "react";

import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, CarouselSection } from "./styles";
import { NavigationHeader } from "../../components/Header";
//import { Loader } from "../../components/Loader";

export function Products(): ReactElement {
  //const history = useHistory();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [personagens, setPersonagens] = useState<any[]>();
  //const [loading, setLoading] = useState<boolean>();

  const getData = async (): Promise<void> => {
    //setLoading(true);
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/?page=1",
      );
      setPersonagens(response.data.results);
      //setLoading(false)
    } catch (error) {
      console.error(error);
      //setLoading(false)
    }
  };

  const openCard = (id: number): void => {
    //history.push(`/produto/${id}`)
    console.log(id);
  };

  useEffect(() => {
    getData();
  }, []);

  //{loading && <Loader />}

  return (
    <Container>
      <NavigationHeader />

      <CarouselSection>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          //centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {personagens &&
            personagens.map((personagem) => (
              <SwiperSlide
                key={personagem.id}
                onClick={() => openCard(personagem.id)}
              >
                <Link to={`/produto/${personagem.id}`}>
                  <img src={personagem.image} alt="Foto do personagem" />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </CarouselSection>
    </Container>
  );
}
