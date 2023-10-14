import './SectionBanner.scss'

function SectionBanner({ children, backgroundClassName, breadcrumb }) {
  return (
    <div className={`section-banner ${backgroundClassName ?? ''}`}>
      <div className='section-banner-container'>
        <span className='section-banner-breadcrumb'>
          {breadcrumb}
        </span>

        {children}
      </div>
    </div>
  )
}

export default SectionBanner