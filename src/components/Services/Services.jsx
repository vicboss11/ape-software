import ServiceCard from '../ServiceCard/ServiceCard'
import './Services.scss'

const services = [
  {
    name: 'MyVideogameList',
    claim: '¡Probar ahora!',
    imageUrl: '/content/services/myvideogamelist.png'
  },
  {
    name: 'ApeBO España',
    claim: 'Próximamente',
    imageUrl: '/content/services/soon.png'
  }
]

function Services() {
  return (
    <div className='services'>
      {
        services.map(service => (
          <ServiceCard
            key={service.name}
            service={service}
          />
        ))
      }
    </div>
  )
}

export default Services