import Navbar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';
import video from '../../assets/video/background.webm'
import test from '../../assets/img/pigmento.jpg'
import img from '../../assets/img/img1.webp'
import './home.css'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import video2 from '../../assets/video/video2.webm'

//imagenes
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'

function Home() {
    const images = [
        {
            original: img1,
            thumbnail: img1,
        },
        {
            original: img2,
            thumbnail: img2,
        },
        {
            original: img3,
            thumbnail: img3,
        }

    ];
    return (
        <>
            <Navbar />
            <div className='homeContent'>
                <div className='homeLeftContent'>
                    <div className='leftHeaderContent'>
                        <div className='leftTextContent'>
                            <span className='ligthFont'>EL </span>
                            <span className='boldFont'>COLOR ES <br /></span>
                            <div>
                                <span className='boldFont'>TU</span>
                                <video src={video} autoPlay muted loop className='leftHeaderVideo'></video>
                                <br /> <span className='boldFontFooter'>IMPACTO</span>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="leftFooterContent">
                            <div className='leftFooterContentVideo'>
                                <ImageGallery 
                                items={images}
                                showPlayButton={false}
                                showFullscreenButton={false}
                                showNav={false}
                                showBullets={true}
                                showIndex={false}
                                showThumbnails={false}
                                slideDuration={500}
                                slideInterval={2000}
                                autoPlay={true}
                                >
                                </ImageGallery>

                                <div className='leftFooterContentText'>
                                    Conoce <br /> nuestros productos
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className='homeRightContent'>
                    <div className='rightHeaderContent'>
                        <div className='rightHeaderTitle'>
                            <div className='titleBtn1'>EXPERIENCIA</div>
                            <div className='titleBtn2'>CIENCIA</div>
                        </div>
                        <div className='rightHeaderDescription'>
                            Líder en soluciones de color desde 1995. Ofrecemos innovadoras dispersiones pigmentarias, pigmentos en polvo y colorantes para más de 10 sectores industriales. Nuestro equipo experto está comprometido con la excelencia, brindando productos de alta calidad y un servicio técnico que marca la diferencia.
                            <br />
                            ¡Con Simplicol, el color transforma!
                        </div>
                        <div className='rightHeaderButtons'>
                            <div className='contactBtn'>CONTACTANOS!</div>
                            <div className='aboutTxt'>CONOCE MÁS</div>
                        </div>
                    </div>
                    <div className="rightFooterContent">
                        <div className='rightFooterContentCarrousel'>
                            <div className='homeCarrousel'>
                                <video autoPlay muted loop>
                                    <source src={video2} type="video/mp4" />
                                    Tu navegador no soporta la etiqueta de video.
                                </video>
                            </div>
                        </div>
                        <div className='rightFooterContentForm'>
                            <div className='contactForm'>
                                <div className='formTitle'>AQUI TE <br /> ASESORAMOS!</div>
                                <div className='formLabel'>Necesito pigmentos!</div>
                                <div className='formBtnDark'>COMENCEMOS!</div>
                                <div className='formLabel'>Necesito colorantes!</div>
                                <div className='formBtnDark'>COMENCEMOS!</div>
                                <div className='contactFormBtn'>CONTACTANOS!</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;