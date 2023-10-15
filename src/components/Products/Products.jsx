import ProductCard from '../ProductCard/ProductCard'
import './Products.scss'

const products = [
  {
    name: 'ApeCRM',
    price: {
      total: 79.99,
      currency: '€',
      period: 'mes'
    },
    description: 'Sistema de gestión de relaciones con los clientes con un enfoque personalizado de la gestión de su empresa.',
    properties: [
      'Seguridad avanzada',
      'Cambios de gestión',
      'Servicios de implementación y capacitación',
      'Soporte técnico dedicado'
    ],
    imageUrl: '/content/products/crm.jpg',
    claim: 'Más información'
  },
  {
    name: 'ApeERP',
    price: {
      total: 129.99,
      currency: '€',
      period: 'mes'
    },
    description: 'Sistema de planificación de recursos empresariales. Automatice y modernice las operaciones financieras globales de su empresa.',
    properties: [
      'Tome decisiones financieras estratégicas con IA',
      'Unifique y automatice los procesos financieros',
      'Reduzca los gastos operativos',
      'Reduzca la complejidad financiera y los riesgos globales',
      'Soporte técnico dedicado'
    ],
    imageUrl: '/content/products/erp.jpg',
    claim: 'Más información'
  },
  {
    name: 'ApeOffice',
    price: {
      total: 49.99,
      currency: '€',
      period: 'año'
    },
    description: 'Paquete de programas ofimáticos.',
    properties: [
      'Trabajar un mismo documento en forma simultánea.',
      'Envío de archivos de gran tamaño usando ApeDrive',
      'Historial de versiones antiguas de documentos',
      'Integración entre distintos dispositivos',
      'Búsqueda inteligente'
    ],
    imageUrl: '/content/products/office.jpg',
    claim: 'Más información'
  },
  {
    name: 'Software a medida',
    description: 'Si lo que deseas es crear un nuevo software con nuestra ayuda no dudes en contactar con nosotros, estaremos encantados de ayudarte.',
    properties: [
      'Te ayudamos a diseñar el software',
      'Servicio personalizado',
      'Calidad garantizada',
      'Posibilidad de realizar un soporte continuo del una vez finalizado el producto',
      '¡Tú pones las reglas!'
    ],
    imageUrl: '/content/products/custom.jpg',
    claim: 'Más información'
  },
]

function Products() {
  return (
    <div className='products'>
      {
        products.map(product => (
          <ProductCard
            key={product.name}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default Products