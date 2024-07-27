import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = ({eachItem}) => {
  const {id, name, teamImageUrl} = eachItem
  return (
    <div className="container">
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="img-user">
          <img className="team-card-image" src={teamImageUrl} alt={`${name}`} />
          <p className="header">{name}</p>
        </li>
      </Link>
    </div>
  )
}

export default TeamCard
