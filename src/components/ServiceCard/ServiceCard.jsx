import './ServiceCard.scss'

function ServiceCard({ service }) {
  return (
    <div className='service-card'>
      <header className='service-card-header'>
        <img
          src={service.imageUrl}
          alt={`Imagen del servicio ${service.name}`}
          className='service-card-image'
        />

        <span className='service-card-name'>
          {service.name}
        </span>
      </header>

      <button className='service-card-button'>
        {service.claim}
      </button>
    </div>
  )
}

export default ServiceCard
