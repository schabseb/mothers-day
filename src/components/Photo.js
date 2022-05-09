import photo from './photo.jpg'

const Photo = () => {
  return (
    <div className='photo'>
      <img src={photo} alt='me and momma' width='300px' height='400px' />
    </div>
  );
}

export default Photo;