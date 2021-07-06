import styled from 'styled-components'

const HeroHeader = styled.header`
    height: ${props => props.size}vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.8)), url('${props => props.bgImage}');
    background-size: cover;
    background-repeat: no-repeat;
`
const Title = styled.h1`
    color: lightgreen;
    font-size: 90px;
    font-weight: 800;
    text-transform: uppercase
`
const SubTitle = styled.h2`
    color: white;
    font-size: 30px;
    font-weight: 800;
    text-transform: uppercase
`
const Header = ({title, subTitle, size, bgImage, children}) => {
    return(
        <HeroHeader size={size} bgImage={bgImage} >
            <Title>
                {title}
            </Title>
            <SubTitle>
                {subTitle}
            </SubTitle>
            {children}
        </HeroHeader>
    )
}

export default Header;

