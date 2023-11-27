import { Facebook, Instagram, Twitter, Menu } from '@mui/icons-material';
import Logo from '../assets/sidebar-logo.png';
import BackgroundImage from '../assets/home_background.jpg'


const Home = () => {

  return (
    <div className='home'>
    <div className='home__carousel'  style={{
        backgroundImage: `url(${BackgroundImage})`, filter: `brightness(0.6)`}}>
      <div className='home__carousel__header'>
        <div className='home__carousel__header__social-container'>
         <a className='home__carousel__header__social-container__link' href='https://twitter.com/'><Twitter/></a>
         <a className='home__carousel__header__social-container__link' href='https://facebook.com'><Facebook/></a>
         <a className='home__carousel__header__social-container__link' href='https://instagram.com'><Instagram/></a>
        </div>
        <img className='home__carousel__header__logo' src={Logo}/>
        <button className='home__carousel__header__menu-btn'><Menu/></button>
      </div>
      <h1 className='home__carousel__title'>Home</h1>
      <p className='home__carousel__description'>Consequat minim cillum qui duis cillum labore et ullamco. Consectetur laboris velit voluptate commodo qui laborum velit consectetur duis et magna Lorem. Labore duis aliquip reprehenderit ad proident incididunt dolor consectetur consequat incididunt ullamco laboris ad est. Minim aliquip laboris nisi do et ea sunt ullamco do do et consectetur. Sit labore sit laborum magna laboris duis dolore elit dolore laboris culpa.</p>
      <div className='home__carousel__img-container'>
      <img className='home__carousel__img-container__img' src='https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=400'/>
      <img className='home__carousel__img-container__img' src='https://images.pexels.com/photos/4992652/pexels-photo-4992652.jpeg?auto=compress&cs=tinysrgb&w=400'/>
      <img className='home__carousel__img-container__img' src='https://images.pexels.com/photos/12190975/pexels-photo-12190975.jpeg?auto=compress&cs=tinysrgb&w=400'/>
      </div>
     
    </div>
    </div>
  )
}

export default Home