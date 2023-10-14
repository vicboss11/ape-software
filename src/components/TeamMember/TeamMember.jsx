import './TeamMember.scss'

function TeamMemberWithSentence({ member, sentence }) {
  return (
    <div className='team-member-with-sentence'>
      <TeamMember member={member} />

      <div className='team-member-sentence'>
        <q>{sentence}</q>
      </div>
    </div>
  )
}

function TeamMemberWithoutSentence({ member }) {
  return (
    <div className='team-member'>
      <img
        src={member.imageUrl}
        alt={`Imagen de ${member.name}`}
        className='team-member-image'
      />

      <span className='team-member-name'>
        {member.name}
      </span>

      <p className='team-member-position'>
        {member.position}
      </p>
    </div>
  )
}

function TeamMember({ member, sentence }) {
  return sentence
    ? (<TeamMemberWithSentence member={member} sentence={sentence} />)
    : (<TeamMemberWithoutSentence member={member} />)
}

export default TeamMember