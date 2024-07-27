import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoader: true, matchData: []}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const promise = await fetch('https://apis.ccbp.in/ipl')
    const data = await promise.json()
    const {teams} = data

    const newMatchData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({matchData: newMatchData, isLoader: false})
  }

  render() {
    const {isLoader, matchData} = this.state

    return (
      <div className="main-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoader ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {matchData.map(eachItem => (
              <TeamCard eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
