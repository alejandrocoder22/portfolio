
const SingleTech = ({ image }) => {
  return (
    <div className='techs-section__tech-container'>
      <img className='techs-section__img' src={image} />
      <div className='techs-section__tech-container-low-bar' />
    </div>
  )
}

export default SingleTech
