import React from 'react'
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
  
  return (
    <div className='home'>
      <div className='title-section'>
        <div className='title-card'>
          <p>4ª EXPO</p>
          <h1>FITNESS Y SALUD<br/>NEA CHACO</h1>
          <p className='subtitle'>11° COPA NATURAL SHOP</p>
          <button>¡Formá parte del evento!</button>
        </div>
      </div>

      <SponsorSlider/>

      <div className='countdown-section'>
        <div className='countdown-card'>
          <h2>14 Y 15 DE JUNIO</h2>
          <p>DOMO DEL CENTENARIO</p>
          <Timer duration={3 * 24 * 60 * 60 * 1000}/>
        </div>
      </div>

      <div className="min-h-screen w-full pt-20 bg-[#1E1E1E] box-border">
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full max-w-[90vw] mx-auto">
          
          <div className="flex-1 bg-[#1E1E1E] text-white p-4 flex flex-col justify-center items-center">
            <h3 className="mb-4 text-4xl md:text-5xl font-bold tracking-widest !font-['Manuka Condensed'] text-center md:text-left">
              SOBRE EL EVENTO
            </h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe dolorem eos aut aspernatur natus rerum, possimus laudantium harum in. Nesciunt accusamus in nostrum. Quod doloribus aliquid veniam odio quaerat tempora quis distinctio natus beatae, nisi quisquam molestias rerum, ullam ducimus ipsa voluptatum quae neque veritatis. Facilis officiis iste magni quia ratione. Dolorem, quasi. Cupiditate iste laboriosam animi sunt ipsa, repellendus accusamus possimus excepturi praesentium, consequuntur necessitatibus omnis at mollitia sint aperiam nam eligendi neque? Vitae earum eos reiciendis aliquid sequi sapiente, maiores quas impedit necessitatibus!
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
        style={{ backgroundImage: "url('/src/assets/images/white-background-texture.jpg')" }}
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
