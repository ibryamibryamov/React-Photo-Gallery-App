import PageNotFoundImage from '../assets/404.png';

const NotFound = () => {
  return (
    <div className='page-not-found__container'>
      <img className='page-not-found__container__img' src={PageNotFoundImage} />
      <h1 className='page-not-found__container__title'>404 - Page Not Found</h1>
      <p className='page-not-found__container__subtitle'>Sorry, the page you are looking for does not exist.</p>
      
    </div>
  )
}

export default NotFound