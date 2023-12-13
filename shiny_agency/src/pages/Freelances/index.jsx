import Card from '../../components/Card';
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { Loader } from '../../utils/style/Atoms';
import { useFetch } from '../../utils/hooks';

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledH3 = styled.h3`
    margin-bottom: 50px;
`
 

function Freelances() {
    const [freelancersProfiles, setFreelancersProfiles] = useState([]);
    const [isDataLoading, setDataLoading] = useState(false);
    const { data, isLoading, error } = useFetch('http://localhost:8000/freelances');
    const freelancersList = data?.freelancersList;
    console.log(freelancersList);

    /*useEffect(() => {
        async function fetchFreelances() {
            setDataLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/freelances`);
                const { freelancersList } = await response.json();
                setFreelancersProfiles(freelancersList)
            }
            catch(err) {
                console.log(err);
            }
            finally {
                setDataLoading(false);
            }
        };
        fetchFreelances()
    }, [])*/

    return (
        <StyledDiv>
            <h1>Trouvez votre prestataire</h1>
            <StyledH3>Chez Shiny nous réunissons les meilleurs profils pour vous</StyledH3>
            {isLoading ? (
                <Loader />
            ) : (
            <CardsContainer>
            {freelancersList.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.name}
                    title={profile.job}
                    picture={profile.picture}
                />
            ))}
            </CardsContainer>
            )}
        </StyledDiv>
    )
}

export default Freelances;