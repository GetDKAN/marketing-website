import React from 'react'
import styled from 'styled-components'
import { Text } from './Commons'
import { colors } from '../tokens'
import team from '../../data/team.json'


const BioWrapper = styled.div`
  margin: 40px auto;
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 940px;
  .team-member {
    padding: 15px;
    text-align:center;
    img {
      max-width: 130px;
      height: auto;
      border-radius: 5px;
    }
    h4 {
      margin: 8px 0;
    }
    i {
      margin: 0 10px;
      font-size: 1.25rem;
    }
  }
`

const Bio = () => {
  const Team = team.map((member,i) => {
    let photo = member.image ? member.image : '/dkan-avatar-blue.png';
    let git = member.github ?
      <a href={member.github}>
        <i className="fa fa-github" aria-hidden="true"></i>
        <span className="sr-only">{member.name}'s Github page</span>
      </a>
      : '';
    let linked = member.linkedin ?
      <a href={member.linkedin}>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
        <span className="sr-only">{member.name}'s Linked In page</span>
      </a>
      : '';

    return (
      <div className="team-member" key={i}>
        <img src={photo} alt={member.name} />
        <h4>{member.name}</h4>
        {git} 
        {linked}
      </div>
    )
  });

  return (
    <BioWrapper>
      {Team}
    </BioWrapper>
  )
}

export default Bio
