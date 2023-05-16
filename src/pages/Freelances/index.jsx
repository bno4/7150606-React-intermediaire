import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

// const freelanceProfiles = [
//   {
//     name: 'Jane Doe',
//     jobTitle: 'Devops',
//   },
//   {
//     name: 'John Doe',
//     jobTitle: 'Developpeur frontend',
//   },
//   {
//     name: 'Jeanne Biche',
//     jobTitle: 'Développeuse Fullstack',
//   },
// ]

function Freelances() {
  const [freelancesData, setFreelancesData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancesData } = await response.json()
        setFreelancesData(freelancesData)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelancesData.map((profile, id) => (
            <Card
              key={`${profile.name}-${id}`}
              label={profile.jobTitle}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
