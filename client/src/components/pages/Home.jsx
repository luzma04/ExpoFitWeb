import { Navigate, useNavigate } from 'react-router-dom'
import '../../styles/Home.css'
import Timer from '../Timer'
import Stats from '../Stats'
import SponsorSlider from '../SponsorSlider'
import ImageSlider from '../ImageSlider'
import sliderPhoto1 from '../../assets/images/slider-photo1.jpg'
import sliderPhoto2 from '../../assets/images/slider-photo2.jpg'
import sliderPhoto3 from '../../assets/images/slider-photo3.jpg'


const Home = () => {
  const photoSlides = [
    {'url': sliderPhoto1, 'title':'image'},
    {'url': sliderPhoto2, 'title':'image'},
    {'url': sliderPhoto3, 'title':'image'},
    {'url': sliderPhoto1, 'title':'image'}
  ];
  const getDurationToTargetDate = () => {
  const now = new Date();
  const target = new Date('2025-06-14T00:00:00');
  return target - now;
  };
  const navigate = useNavigate();
  
  return (
    <div className='home'>
      <div className='title-section'>
        <div className='title-card'>
          <p>4ª EXPO</p>
          <h1>FITNESS Y SALUD<br/>NEA CHACO</h1>
          <p className='subtitle'>11° COPA NATURAL SHOP</p>
          <button onClick={() => navigate("/participa")}>¡Formá parte del evento!</button>
        </div>
      </div>

      <SponsorSlider/>

      <div className='countdown-section'>
        <div className='countdown-card'>
          <h2>14 Y 15 DE JUNIO</h2>
          <p>DOMO DEL CENTENARIO</p>
          <Timer duration={getDurationToTargetDate()}/>
        </div>
      </div>

      <div className="min-h-screen w-full pt-20 bg-[#1E1E1E] box-border">
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-[90vw] mx-auto">
          
          <div className="flex-1 bg-[#1E1E1E] text-white p-4 flex flex-col justify-center items-center">
            <h3 className="mb-4 text-4xl md:text-5xl font-bold tracking-widest !font-['Manuka Condensed'] text-center md:text-left">
              SOBRE EL EVENTO
            </h3>
            <p className="text-justify">
              La Expo Fitness y Salud NEA Chaco se ha consolidado como el principal punto de encuentro para la industria del fitness, la salud y el bienestar en el nordeste argentino.
              En 2024 contamos con la participación de representantes de más de 8 provincias, demostrando
              el alcance y la importancia de esta iniciativa.
              Ahora, en su cuarta edición, este evento sigue creciendo en alcance e impacto, reuniendo a
              comerciantes, fabricantes, distribuidores, gimnasios, entrenadores y entusiastas del sector.
            </p>
          </div>
          <div className="flex-1 p-4 flex justify-center items-center">
            <ImageSlider slides={photoSlides} />
          </div>
        </div>
        <Stats/>
      </div>

      <div
        className="min-h-[90vh] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-center items-center gap-8 p-8"
        style={{ backgroundImage: "url('/images/white-background-texture.jpg')" }}
      >
        <div className="w-full md:w-1/2 p-4 bg-[#F4004A]/90 rounded-[2rem] shadow-lg">
          <iframe
            title="Ubicación del evento"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.031831934114!2d-58.98358272543528!3d-27.43711867633853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450c5b04a7481d%3A0xf99641a09f8495d2!2sDomo%20Del%20Centenario!5e0!3m2!1ses!2sar!4v1744810654885!5m2!1ses!2sar"
            className="w-full h-[400px] rounded-[2rem] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="w-full md:w-1/2 p-4 flex flex-col gap-4">
          <p className="text-3xl md:text-5xl font-bold text-[#1E1E1E] text-center md:text-left leading-tight">
            ¡TE ESPERAMOS EN EL EVENTO!
          </p>
          <h4 className="bg-[#1E1E1E] text-white text-xl md:text-2xl p-4 text-center md:text-left rounded-xl shadow">
            📍 DOMO DEL CENTENARIO – RESISTENCIA, CHACO
          </h4>

          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.google.com/maps?q=Domo+del+Centenario,+Resistencia,+Chaco"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4004A] hover:bg-[#d90042] text-white text-base font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg"
            >
              Abrir en Maps
            </a>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Home
