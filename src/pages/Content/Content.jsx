import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SectionBanner from '../../components/SectionBanner/SectionBanner'
import Products from '../../components/Products/Products'
import Services from '../../components/Services/Services'
import Team from '../../components/Team/Team'
import apeSoftwareLogo from '../../assets/ape-software.svg'
import './Content.scss'
import ContactForm from '../../components/ContactForm/ContactForm'

function Content() {
  const menuContext = useContext(MenuContext)

  return (
    <div className={`content-wrapper ${menuContext.isOpen ? 'sidebar--open' : ''}`}>
      <Header id='home' />

      <main className='content'>
        <section className='content-section'>
          <SectionBanner
            breadcrumb='Inicio / Productos'
            backgroundClassName='section-products'
          >
            <h2 id='productos'>Productos</h2>
          </SectionBanner>

          <article className='content-article'>
            <div>
              <Products />
            </div>
          </article>
        </section>

        <section className='content-section'>
          <SectionBanner
            breadcrumb='Inicio / Servicios'
            backgroundClassName='section-services'
          >
            <h2 id='servicios'>Servicios</h2>
          </SectionBanner>

          <article className='content-article'>
            <div>
              <Services />
            </div>
          </article>
        </section>

        <section className='content-section'>
          <h2 id='conocenos' style={{ height: 0, margin: 0, visibility: 'hidden' }}></h2>
        </section>

        <section className='content-section'>
          <SectionBanner
            breadcrumb='Inicio / Conócenos / Modelo Empresarial'
            backgroundClassName='section-business-model'
          >
            <h2 id='modelo-empresarial'>Modelo Empresarial</h2>
          </SectionBanner>

          <article className='content-article'>
            <div>
              <p>
                Ape Software es una empresa dedicada al desarrollo software, cuya principal motivación es satisfacer las distintas necesidades que surgen a raíz de un uso generalizado de las nuevas tecnologías que son ya indispensables para el desarrollo normal del trabajo, la productividad de las empresas o de actividades cotidianas de nuestro día a día.
              </p>
            </div>
          </article>

          <article className='content-article'>
            <h3>Objetivos generales a largo plazo</h3>

            <div>
              <ul>
                <li>Crecer como empresa.</li>
                <li>Convertirnos en una empresa conocida, reconocida y querida.</li>
                <li>Sobrevivir como empresa.</li>
                <li>Imponer una tendencia de consumo novedosa, rentable y respetuosa con el medio ambiente.</li>
              </ul>
            </div>
          </article>

          <article className='content-article'>
            <h3>Líneas de actuación</h3>

            <div>
              <ul>
                <li>Investigación</li>
                <li>Desarrollo/Innovación</li>
                <li>Comercial</li>
                <li>Mantenimiento</li>
              </ul>
            </div>
          </article>

          <article className='content-article'>
            <h3>Características técnicas de nuestros productos y servicios</h3>

            <div>
              <p>
                Ape Software ofrece al mercado tanto servicios como productos, por ello veo necesario hacer una breve aclaración entre estos términos dentro del sector del software.
              </p>

              <p>
                El software como servicio es un modelo de distribución de software donde el soporte lógico y los datos que maneja se alojan en los servidores de la empresa que lo provee. Así el cliente del servicio accede a la solución desde Internet. Esto contrasta con el modelo de forma tradicional empleado en el software como producto, en el que el usuario adquiere las licencias de la solución y estas se instalan en el pc o servidor local.
              </p>

              <p>
                El software de nuestra empresa se prestará directamente desde éste sitio web cuando esté destinado a la comunidad de usuarios en general. Sin embargo, si el producto o servicio ha sido desarrollado en exclusiva para un cliente, éste será directamente suministrado a dicho cliente y no estará disponible para el resto de los usuarios.
              </p>
            </div>
          </article>

          <article className='content-article'>
            <h3>Modelo de desarrollo</h3>

            <div>
              <ol>
                <li>
                  <strong>Definición de objetivos:</strong> se define la finalidad del proyecto que vayamos a desarrollar. En el caso de que el software esté orientado a un cliente, se establecerán los objetivos de acuerdo a sus necesidades, siendo el papel del cliente un factor fundamental para el resultado del producto.
                </li>
                <li>
                  <strong>Análisis de requisitos y viabilidad:</strong> El propósito del análisis de requisitos es hacer que los mismos alcancen un estado óptimo antes de alcanzar la fase de diseño.
                </li>
                <li>
                  <strong>Diseño:</strong> a partir de la información obtenida en los pasos previos se empezará con el diseño del software (diagramas de flujo, pseudocódigo, etc.).
                </li>
                <li>
                  <strong>Implementación:</strong> proceso en que se empieza a programar eligiendo el lenguaje que sea más apropiado para el proyecto.
                </li>
                <li>
                  <strong>Pruebas:</strong> En esta fase se evalúa el funcionamiento del programa para comprobar si existen fallos o para mejorarlo hasta alcanzar los estándares establecidos previamente.
                </li>
                <li>
                  <strong>Validación:</strong> Proceso en que se comprueba que el programa cumple con las especificaciones descritas por el cliente.
                </li>
                <li>
                  <strong>Mantenimiento y evolución:</strong> comprende todos los procedimientos correctivos y las actualizaciones secundarias del software.
                </li>
              </ol>
            </div>
          </article>

          <article className='content-article'>
            <h3>Elementos innovadores</h3>

            <div>
              <ul>
                <li>
                  <strong>Calidad:</strong> nos adaptamos a los últimos estándares establecidos, con la intención de ofrecer siempre un producto o servicio de calidad, accesible para todos los usuarios y que se adapte a las necesidades de nuestros clientes.
                </li>
                <li>
                  <strong>Soporte continuo:</strong> con el objetivo de mantener una fuerte alianza con los clientes, disponemos de un soporte continuo para mantener los productos previamente vendidos a lo largo del tiempo.
                </li>
                <li>
                  <strong>Servicio online:</strong> los productos y servicios públicos estarán a disposición de todos los usuarios desde la página web oficial de la empresa.
                </li>
                <li>
                  <strong>Atención personalizada:</strong> cuando un cliente quiere llegar a un acuerdo con nosotros o viceversa nos comprometemos a que la experiencia sea lo más satisfactoria posible con la finalidad de llegar a un objetivo claro, facilitado así el desarrollo del proyecto solicitado.
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className='content-section'>
          <SectionBanner
            breadcrumb='Inicio / Conócenos / Cultura Corporativa'
            backgroundClassName='section-corporate-culture'
          >
            <h2 id='cultura-corporativa'>Cultura Corporativa</h2>
          </SectionBanner>

          <article className='content-article'>
            <div>
              <p>
                La proyección de nuestra identidad, nuestros valores y nuestra estrategia empresarial con lo que facilitamos, tanto la cohesión interna de los socios y nuestros trabajadores y nuestra adaptación al entorno nacional se basan en tres pilares importantes como son nuestra misión, visión y valores.
              </p>
            </div>
          </article>

          <article className='content-article'>
            <h3>Misión</h3>

            <div>
              <p>
                Proporcionar soluciones tecnológicas a medida para las empresas, con el objetivo de incrementar su competitividad y productividad; a particulares, atendiendo a solicitudes personalizadas; y para los usuarios en general, en función de las necesidades detectadas.
              </p>
            </div>
          </article>

          <article className='content-article'>
            <h3>Visión</h3>

            <div>
              <p>
                Queremos ser una empresa referente en nuestro sector, una empresa que se adapte a los cambios de forma instantánea, dado el sector en el que nos encontramos. Además, queremos que el cliente confíe en nuestros servicios y en nuestro equipo, ofreciendo siempre un trato personalizado, basado en la transparencia.
              </p>
            </div>
          </article>

          <article className='content-article'>
            <h3>Valores</h3>

            <div>
              <ul>
                <li>
                  <strong>Integridad:</strong> profesionalidad y transparencia en nuestra gestión interna y externa.
                </li>
                <li>
                  <strong>Innovación:</strong> siempre miramos hacia el futuro. Somos conscientes de las constantes actualizaciones del sector y por lo tanto nos adaptamos a las últimas novedades con el objetivo de ofrecer un producto/servicio de calidad a nuestros clientes.
                </li>
                <li>
                  <strong>Orientación al cliente:</strong> responsabilidad y respeto a los compromisos establecidos con los clientes, cumpliendo las expectativas.
                </li>
                <li>
                  <strong>Responsabilidad Social Corporativa:</strong> contribuimos de manera activa a una mejora social y económica, además de estar totalmente comprometidos con el medio ambiente.
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className='content-section'>
          <SectionBanner
            breadcrumb='Inicio / Conócenos / Gobierno Corporativo'
            backgroundClassName='section-corporate-governance'
          >
            <h2 id='gobierno-corporativo'>Gobierno Corporativo</h2>
          </SectionBanner>

          <article className='content-article'>
            <h3>Comité de Dirección</h3>

            <div>
              <Team />
            </div>
          </article>
        </section>

        <section className='content-section'>
          <SectionBanner
            breadcrumb='Inicio / Conócenos / Datos de Interés'
            backgroundClassName='section-data-of-interest'
          >
            <h2 id='datos-de-interes'>Datos de Interés</h2>
          </SectionBanner>

          <article className='content-article'>
            <h3>Nombre comercial e imagen corporativa</h3>

            <div>
              <p>
                Queremos definirnos a través de nuestra imagen corporativa mediante nuestro nombre comercial, Ape Software, que viene del inglés “ape” cuyo significado en español es simio, y “software”, que hace referencia a la actividad principal que desarrollamos.
              </p>

              <p>
                Aunque la traducción literal de “ape” es simio, hemos escogido como referentes a la familia Hominidae, los grandes simios, y más en concreto a los gorilas.
              </p>

              <p>
                Muchas veces se considera al gorila como un animal agresivo, sin embargo, es un animal mucho más noble de lo que puede parecer. En su entorno son seres sociables y sus interacciones con su comunidad se basan en el honor. De hecho, la responsabilidad de asistir a los miembros de su comunidad es algo que tienen muy asimilado.
              </p>

              <p>
                En resumen, podemos concluir que los gorilas son seres sociales, leales, compasivos, inteligentes, nobles y responsables, además de caracterizarse por poseer una gran fuerza. En Ape Software queremos trasladar todos éstos elementos positivos y característicos de este asombroso simio con el fin de ofrecer los mejores resultados posibles en nuestro trabajo.
              </p>

              <p>
                Además, para mostrar dichas características de manera visual, nuestro logotipo empresarial cuenta con la imagen de un gorila junto al nombre comercial de la empresa, que reforzará nuestra identidad real.

                <img src={apeSoftwareLogo} alt='Logo de Ape Software' />
              </p>
            </div>
          </article>
        </section>

        <section className='content-section'>
          <SectionBanner
            breadcrumb='Inicio / Contacto'
            backgroundClassName='section-contact'
          >
            <h2 id='contacto'>Contacto</h2>
          </SectionBanner>

          <article className='content-article'>
            <div>
              <ContactForm />
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Content
