import TeamMember from '../TeamMember/TeamMember'
import './Team.scss'

const members = [
  {
    name: 'Víctior Albán',
    position: 'Director Ejecutivo',
    imageUrl: '/content/staff/victior.jpg'
  },
  {
    name: 'Álvario Fernández',
    position: 'Director de Tecnología',
    imageUrl: '/content/staff/alvario.jpg'
  },
  {
    name: 'Guillermio Martínez',
    position: 'Director de Marketing y Publicidad',
    imageUrl: '/content/staff/guillermio.jpg'
  },
  {
    name: 'Albertio Rodríguez',
    position: 'Director Financiero',
    imageUrl: '/content/staff/albertio.jpg'
  },
  {
    name: 'Wongse Fernández',
    position: 'Director de Mantenimiento',
    imageUrl: '/content/staff/uwongse.jpg'
  },
  {
    name: 'Cesiar Santiago',
    position: 'Director de Producto',
    imageUrl: '/content/staff/cesiar.jpg'
  },
  {
    name: 'Kanzi Paniscus',
    position: 'Directora de Recursos Humanos',
    imageUrl: '/content/staff/kanzi.jpg'
  },
]

function Team() {
  const teamMembers = members.slice(1)

  return (
    <div className='team'>
      <TeamMember member={members[0]} sentence='“No puedes romper algo que ya está rompido”' />

      <div className='team-members'>
        {
          teamMembers.map(member => (
            <TeamMember
              key={member.name}
              member={member}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Team