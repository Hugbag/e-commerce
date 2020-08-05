// @ts-ignore

import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Container, Row, Col } from 'react-grid-system';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

const SectionHeadline = styled.h1`
    font-size: 16px;
     position: relative;
     text-transform: uppercase;
     margin-left: 100px;
 
     &:before {
         position: absolute;
         content: '';
         width: 90px;
         height: 5px;
         background-color: #000000;
         left: -100px;
         bottom: 50%;
     }
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

const HighResContainer = styled(Container)`
    @media (max-width: 1140px) {
        display: none;
    }
`;

const LowResContainer = styled(Container)`
    @media (min-width: 1140px) {
        display: none;
    }
`;


const StyledLink = styled.a`
    text-decoration: none;
    color: #000000;
    
    &:hover {
        color: #FF80F2;
    }
`;

const CategoryCard = styled(Col)`
     margin: 10px;
     position: relative,
`;

const ProductSpan = styled.span`
     background-color: rgba(0, 0, 0, 0.45);
     position: absolute;
     bottom: 0;
     width: inherit;
     height: 100px;
     color: #ffffff;
     text-align: center;
     display: block;
`;

const StyledImg = styled.img`
     width: inherit;
     height: inherit;
 `;

const ProductCategory = styled.p`
     font-size: 20px;
     margin: 20px 0;
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

const AddressSection = styled.footer`
 text-align: center;
`;

const FooterLink = styled.h1`
     font-size: 16px;
     position: relative;
     text-transform: uppercase;
     margin-left: 10px;
`;


class Home extends React.Component {
    render() {
        return (
            <MainContainer>
            <Carousel/>
            <section>
                <SectionHeadline>Produkty</SectionHeadline>
                <HighResContainer>
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
                </HighResContainer>
                <LowResContainer>
                    <Row>
                        <CategoryCard>
                            <StyledImg src='https://hugbag.pl/assets/dist/img/categories/case.jpg'/>
                            <ProductSpan><ProductCategory>Etui</ProductCategory></ProductSpan>
                        </CategoryCard>
                        <CategoryCard>
                            <StyledImg src='https://hugbag.pl/assets/dist/img/categories/wallets.jpg'/>
                            <ProductSpan><ProductCategory>Portfele</ProductCategory></ProductSpan>
                        </CategoryCard>
                        <CategoryCard>
                            <StyledImg src='https://hugbag.pl/assets/dist/img/categories/bags.jpg'/>
                            <ProductSpan><ProductCategory>Torby</ProductCategory></ProductSpan>
                        </CategoryCard>
                    </Row>
                    <Row>
                        <CategoryCard>
                            <StyledImg src='https://hugbag.pl/assets/dist/img/categories/pendants.jpg'/>
                            <ProductSpan><ProductCategory>Breloki</ProductCategory></ProductSpan>
                        </CategoryCard>
                        <CategoryCard>
                            <StyledImg src='https://hugbag.pl/assets/dist/img/categories/notes.jpg'/>
                            <ProductSpan><ProductCategory>Notes</ProductCategory></ProductSpan>
                        </CategoryCard>
                        <CategoryCard>
                            <StyledImg src='https://hugbag.pl/assets/dist/img/categories/accessories.jpg'/>
                            <ProductSpan><ProductCategory>Akcesoria</ProductCategory></ProductSpan>
                        </CategoryCard>
                    </Row>
                </LowResContainer>
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
            <section>
                <div />
                <SectionHeadline>Kontakt</SectionHeadline>
                <Container>
                    <Row>
                        <AddressSection>
                            <img src='https://hugbag.pl/assets/dist/img/logo.svg'/>
                            <p>A. Ostrowskiego 30/127 53-238 Wrocław</p>
                            <p>e-mail: biuro@hugbag.pl</p>
                            <p>Znajdź nas na: Facebook, Instagram</p>
                        </AddressSection>
                        <Col>
                            <p>Masz pytania? Pisz śmiało! Odpowiadamy niemalże natychmiast.</p>
                            <form>
                                <input type='text' placeholder='Twoje imie'></input>
                                <input type='email' placeholder='Twoj email'></input>
                                <input type='text' placeholder='Tresc wiadomosci'></input>
                            </form>
                            <button>Wyslij do nas wiadomosc</button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer>
                <Container>
                    <Row>
                        <SectionHeadline>Regulamin</SectionHeadline>
                        <FooterLink>Instagram</FooterLink>
                        <FooterLink>Facebook</FooterLink>
                    </Row>
                </Container>
            </footer>
        </MainContainer>
        )
    }
}

export default Home;