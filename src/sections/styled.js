import styled from 'styled-components';

export const HomeContainer = styled.div`
  color: white;
  padding: 0;
  margin: 0;
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: ${props => props.backgroundColor};
  padding-top: 6%;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const ProfilePhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  overflow: hidden;
  width: 50%;
  height: 40%;
  padding-top: 5%;
  @media (max-width: 576px) {
    width: 60%;
  }
`

export const MainHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  text-align: center;
`

export const MainHeading = styled.h2`
  font-size: 2rem;
  font-family: Poppins;
  color: black;
`

export const EmailButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
  justify-content: center;
`

export const EmailButton = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  font-family: Poppins;
  border: none;
  width: ${props => props.width};
  height: 40px;
`

export const SocialIconsSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
  justify-content: center;
`

export const SocialIconWrapper = styled.div`
  padding: 1%;
`

export const AboutMeHeadingWrapper = styled.div`
  padding-top: 10%;
  font-family: monospace;
`

export const DescriptionWrapper = styled.div`
  padding: 10%;
  font-family: Poppins, sans-serif;
  @media (max-width: 576px) {
    padding: 6%;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`
export const ButtonWrapper = styled.div`
  width: 30%;
 ` 

