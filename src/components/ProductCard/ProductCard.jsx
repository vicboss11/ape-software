import { getEuroFormat } from '../../utils/utils'
import './ProductCard.scss'

function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <header className='product-card-header'>
        <img
          src={product.imageUrl}
          alt={`Imagen del producto ${product.name}`}
          className='product-card-image'
        />

        <span className='product-card-name'>
          {product.name}
        </span>

        {
          product.price && (
            <span className='product-card-price'>
              <span className='product-card-price-total'>
                {getEuroFormat(product.price.total)}
              </span>

              <span className='product-card-price-currency'>
                {product.price.currency}/{product.price.period}
              </span>
            </span>
          )
        }
      </header>

      <section className='product-card-info'>
        <p className='product-card-description'>
          {product.description}
        </p>

        <ul className='product-card-properties'>
          {
            product.properties.map((property, index) => (
              <li key={index}>{property}</li>
            ))
          }
        </ul>
      </section>

      <button className='product-card-button'>
        Más información
      </button>
    </div>
  )
}

export default ProductCard