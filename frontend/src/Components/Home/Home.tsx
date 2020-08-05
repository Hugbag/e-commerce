// @ts-ignore

import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Container, Row, Col } from 'react-grid-system';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

const SectionHeadline = styled.h1`
    font-size: 16px;
    text-transform: uppercase;
`;

const MainContainer = styled(Container)`
    margin: 0 auto;
    max-width: 1140px;
    align-items: center;
    padding: 0 15px;
`;

const StyledListRight = styled.ul`
    list-style-type: none;
    font-size: 32px;
    font-weight: 700;
    position: absolute;
    right: 70px;
    top: 160px;
    text-align: right;
`;


const StyledLink = styled.a`
    text-decoration: none;
    color: #000000;
    
    &:hover {
        color: #FF80F2;
    }
`;

const AboutContainer = styled.ul`
    position: relative;
    max-width: 768px;
`;

const StyledListLeft = styled.ul`
     list-style-type: none;
     font-size: 32px;
     font-weight: 700;
     position: absolute;
     left: -70px;
     top: 160px;
`;


class Home extends React.Component {
    render() {
        return (
            <MainContainer>
            <Carousel/>
            <section>
                <SectionHeadline>Produkty</SectionHeadline>
                <Container>
                    <Row>
                        <Col>
                            <StyledListRight>
                                <li><StyledLink href='#'>etui</StyledLink></li>
                                <li><StyledLink href='#'>portfele</StyledLink></li>
                                <li><StyledLink href='#'>torby</StyledLink></li>
                                <li><StyledLink href='#'>breloki</StyledLink></li>
                                <li><StyledLink href='#'>notesy</StyledLink></li>
                                <li><StyledLink href='#'>akcesoria</StyledLink></li>
                            </StyledListRight>
                        </Col>
                        <Col>
                            <img src='https://hugbag.pl/assets/dist/img/categories/case.jpg' />
                        </Col>
                    </Row>
                </Container>
            </section>
                <section>
                    <div>
                        <div/>
                        <SectionHeadline>O Hugbag</SectionHeadline>
                    </div>
                    <AboutContainer>
                        <img src='https://hugbag.pl/assets/dist/img/homepage/about.jpg'/>
                        <StyledListLeft>
                            <li>przedmiot osobisty</li>
                            <li>skora</li>
                            <li>detale</li>
                        </StyledListLeft>
                    </AboutContainer>
                </section>
                <section>
                    <div/>
                    <SectionHeadline>Dla biznesu</SectionHeadline>
                    <AboutContainer>
                        <img src='https://hugbag.pl/assets/dist/img/homepage/2b.jpg'/>
                        <StyledListLeft>
                            <li>dlaczego HUGBAG?</li>
                            <li>personalizacja</li>
                            <li>zaufali nam</li>
                        </StyledListLeft>
                    </AboutContainer>
                </section>
        </MainContainer>
        )
    }
}

export default Home;