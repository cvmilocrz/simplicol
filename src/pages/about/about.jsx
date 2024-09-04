import logo from '../../assets/logo/logo.webp'; 
import Spline from '@splinetool/react-spline';


function About() {
    return (
        <>
        <div className='AboutContainer'>
        <main>
                <h1>Sobre nosotros</h1>
                <p>
                    Somos simplicol!
                </p>
                <p>
                    Simplicol SAS., basa su responsabilidad en el comportamiento ético en cada una de sus acciones productivas y comerciales y en el bienestar de sus integrantes, haciéndoles  sentir parte de una organización que les ofrece la posibilidad de desarrollarse personal y profesionalmente, preocupándose por su entorno familiar y personal; estamos seguros que nuestros colaboradores trabajan mejor en un ambiente de inclusión en donde se resaltan, el respeto, la confianza y la seguridad laboral, además de la responsabilidad por ellos adquirida, para el cumplimiento de los  objetivos y metas propuestas.


                    Lo anterior,  se ve reflejado en todo lo que  hacemos y en el compromiso para con los demás, fomentando un clima de respeto hacia los valores sociales y hacia los legítimos intereses de los grupos interdependientes. Asimismo se manifiesta en el respeto por el medioambiente, y por los derechos de nuestros colaboradores a un trabajo seguro, sin dejar a un lado los requerimientos  legales que sirven como marco para una gestión duradera y responsable.


                    Con el fin de direccionar, comunicar y aplicar la Responsabilidad Ética Empresarial, Simplicol SAS., es miembro de SEDEX internacional; organización mundial que avala el comportamiento ético en los negocios y con el mismo fin, Simplicol SAS., determina las actuaciones adoptadas en la Política de  Ética Empresarial y el documento Código de Ética Empresarial.
                </p>
            </main>
            <aside>
                <img src={logo} alt='logo simplicol' />
            </aside>
        </div>

        </>
    )
}

export default About;