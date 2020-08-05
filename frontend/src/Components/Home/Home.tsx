// @ts-ignore

import React from 'react';
import PropTypes from 'prop-types';
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
    margin: 0 auto;
`;

const StyledListLeft = styled.ul`
     list-style-type: none;
     font-size: 32px;
     font-weight: 700;
     position: absolute;
     left: -70px;
     top: 160px;
`;

const Content = styled.div`
     font-size: 12px; 
     display: ${props => props.hidden ? 'none' : 'block'};
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
    static propTypes = {
        hidden: PropTypes.bool,
    };

    static defaultProps = {
        hidden: true,
    };

    state = {
        img: 'https://hugbag.pl/assets/dist/img/categories/case.jpg',
        showPersonal: true,
        showLeather: true,
        showDetails: true,
    };

    changeImage(name) {
        switch (name) {
            case "wallets":
                this.setState({ img: 'https://hugbag.pl/assets/dist/img/categories/wallets.jpg', });
                break;
            case "bags":
                this.setState({ img: 'https://hugbag.pl/assets/dist/img/categories/bags.jpg', });
                break;
            case "pendants":
                this.setState({ img: 'https://hugbag.pl/assets/dist/img/categories/pendants.jpg', });
                break;
            case "notes":
                this.setState({ img: 'https://hugbag.pl/assets/dist/img/categories/notes.jpg', });
                break;
            case "accessories":
                this.setState({ img: 'https://hugbag.pl/assets/dist/img/categories/accessories.jpg', });
                break;
            default:
                this.setState({ img: 'https://hugbag.pl/assets/dist/img/categories/case.jpg', });
        }
    }

    toggleContent(showInfo) {
        console.log("LOL");
        switch (showInfo) {
            case "personal":
                this.setState({showPersonal: !this.state.showPersonal, showLeather: true, showDetails: true, });
                break;
            case "leather":
                this.setState({showLeather: !this.state.showLeather, showPersonal: true, showDetails: true, });
                break;
            case "details":
                this.setState({showDetails: !this.state.showDetails, showPersonal: true, showLeather: true, });
                break;
        }
    }
    render() {
        const { img, showPersonal, showLeather, showDetails } = this.state;

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
                                <li onMouseOver={() => this.changeImage("wallets")}><StyledLink href='#'>portfele</StyledLink></li>
                                <li onMouseOver={() => this.changeImage("bags")}><StyledLink href='#'>torby</StyledLink></li>
                                <li onMouseOver={() => this.changeImage("pendands")}><StyledLink href='#'>breloki</StyledLink></li>
                                <li onMouseOver={() => this.changeImage("notes")}><StyledLink href='#'>notesy</StyledLink></li>
                                <li onMouseOver={() => this.changeImage("accessories")}><StyledLink href='#'>akcesoria</StyledLink></li>
                            </StyledListRight>
                        </Col>
                        <Col>
                            <img src={img} />
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
                        <li onClick={() => this.toggleContent("personal")}>przedmiot osobisty</li>
                        <li onClick={() => this.toggleContent("leather")}>skora</li>
                        <li onClick={() => this.toggleContent("details")}>detale</li>
                    </StyledListLeft>
                    <Content hidden={showPersonal} >
                        <p>Zanim pierwszy HUGBAG przyjął jakąkolwiek materialną formę, długo zastanawialiśmy się, jaki
                            powinien być. Rozmawialiśmy o funkcjonalności, materiale, estetyce, o tym, dla kogo chcemy
                            go stworzyć. Z tych rozmów wyłoniła się jedna cecha, która ostatecznie określiła nasz sposób
                            myślenia o produkcie i zdeterminowała wszystko, co dotyczy HUGBAGa, łącznie z jego nazwą.
                            Postanowiliśmy zrobić przedmiot, który od pierwszych chwil będzie tworzył niepowtarzalną
                            więź z użytkownikiem. To może abstrakcyjna idea, ale nie tak trudno ją zobrazować. Niektóre
                            rzeczy mają w sobie to „coś”, co sprawia, że korzystanie z nich jest przyjemnością samą w
                            sobie. Kubek, bez którego nie wyobrażamy sobie porannej kawy. Fotel, w którym zawsze
                            siadamy, choć w pokoju są jeszcze dwa inne. Długopis, którym najwygodniej nam się pisze.
                            Ulubiona torebka, pasek. Kto z nas tego nie zna? HUGBAG istnieje od niemal trzech lat. Na
                            początku testowaliśmy go sami, później korzystali z niego nasi przyjaciele i znajomi. Teraz
                            mamy spore grono wiernych klientów, których spotykamy na różnych wydarzeniach i w
                            przestrzeni wirtualnej. Większość swoje doświadczenia z HUGBAGiem opisuje w podobny
                            sposób.</p>
                        <p>HUGBAG uwodzi już przy pierwszym spotkaniu. Zapach, faktura, forma sprawiają, że nie chce się
                            go wypuścić z ręki. Używasz go, przyzwyczajasz się do niego i nawet nie zauważasz momentu, w
                            którym notes zaczyna się otwierać tak, jak lubisz, kiedy zapięcie na knopik działa z taką
                            łatwością, że zamykanie etui staje się nawykiem, gdy dokumenty gładko wchodzą dokładnie w te
                            przegródki portfela, w których lubisz je nosić. HUGBAG dopasowuje się do Ciebie i Twoich
                            zwyczajów. Nabiera coraz bardziej indywidualnego charakteru. Staje się przedmiotem
                            osobistym. Takim tylko Twoim, ulubionym. Właśnie o to nam chodziło. Zależało nam na tym,
                            żeby ludzie swojego HUGBAGa polubili, a nawet pokochali. Wygląda na to, że się udało.</p>
                    </Content>
                    <Content hidden={showLeather}>
                        <p>
                            HUGBAG powstaje z najwyższej jakości polskich skór bydlęcych. Stosujemy wyłącznie skóry wyprawiane roślinnie. Tradycyjna wyprawa, bez pośpiechu, bez chemii, nadaje skórze wyjątkową miękkość, delikatność i piękny, charakterystyczny zapach. W naszej manufakturze wykorzystujemy skóry licowe, nubuk i zamsz.
                        </p>
                        <p>
                            <h4>Skóry licowe</h4>
                            To skóry najlepszego gatunku, najtrwalsze. Powstają z wierzchniej warstwy skóry zwierzęcia. Z nich szyjemy zdecydowaną większość naszych produktów. Istnieje wiele rodzajów skór licowych, różniących się sposobem wykończenia oraz, co za tym idzie, wyglądem. Do produkcji HUGBAGów najchętniej wykorzy stujemy najszlachetniejsze pełnolicowe skóry anilinowe i semianilinowe oraz skóry typu pull-up.
                        </p>
                        <p>
                            <h4>Skóry anilinowe</h4>
                            Matowe lub półmatowe, o wyraźnych porach. Niepokryte impregnatami, bez warstwy pigmentu na powierzchni, dzięki czemu naturalny rysunek lica zostaje doskonale zachowany. Niezwykle przyjemne i ciepłe w dotyku. To wrażliwy surowiec, podatny na wilgoć, blaknięcie pod wpływem promieni słonecznych, zatłuszczenia. Wymaga troskliwej pielęgnacji, lecz jest tego wart. To styl i charakter nie do podrobienia.
                        </p>
                        <p>
                            <h4>Skóry semianilinowe</h4>
                            Również farbowane na wskroś, ale dodatkowo posiadają cienką warstwę pigmentu na powierzchni. Pory i naturalna struktura lica pozostają jednak widoczne. Ten rodzaj skór wolniej chłonie wodę i jest bardziej odporny na zaplamienie czy zadrapania.
                        </p>
                        <p>
                            <h4>Skóry typu pull up</h4>
                            Skóry olejowane, wykańczane specjalnym woskiem. Półmatowe. Charakterystycznie jaśnieją w miejscu zagięcia. Dzięki woskowaniu są bardziej odporne na działanie czynników zewnętrznych, zabrudzenia i uszkodzenia.
                        </p>
                        <p>
                            <h4>Nubuk</h4>
                            Skóra szorstka, choć tylko z nazwy. To poddana specjalnej obróbce skóra licowa, w której gładkie lico zostaje delikatnie zeszlifowane. Efekt? Aksamitny w dotyku, miękki materiał, o krótkim włosiu, charakterystycznie zmieniający odcień, gdy przejedzie się po nim dłonią. Wymaga nieco więcej troski, ale odwdzięcza się wyjątkowym pięknem.
                        </p>
                        <p>
                            <h4>Zamsz</h4>
                            Rodzaj skóry szorstkiej, o dłuższym włosiu. Powstaje ze skór, w których usunięto zewnętrzną warstwę, czyli lico. Podobnie jak nubuk, zmienia kolor po przejechaniu po nim dłonią. Delikatny i miękki. Idealnie sprawdza się we wnętrzu – toreb, etui, teczek - tam najczęściej go wykorzystujemy.
                        </p>
                        <p>
                            Natura nie poddaje sięstandaryzacji. Niejednolitośćto wspólna cecha produktów pochodzenia naturalnego.Różnice w odcieniu i fakturze, występujące w obrębie jednego kawałka skóry, są charakterystyczne dla skór naturalnych. Również typowe są widoczne na skórze drobne skazy, powstałe w czasie życia zwierzęcia. Blizny, zadrapania, ślady po ukąszeniach owadów, jarzma powstałe w miejscach fałd skórnych czy przebarwienianie są wadą surowca, lecz świadectwem jego naturalnego pochodzenia.
                        </p>
                    </Content>
                    <Content hidden={showDetails}>
                        <p>
                            Wszytskie elementy wykończeniowe dobieramy bardzo starannie. Cenimy prostotę, unikamy nadmiaru. Nie chodzi przy tym jedynie o walory estetyczne, choć w tej kwestii zdecydowanie podzielamy opinię, że mniej znaczy więcej. Wybieramy prostą formę, bo zazwyczaj kryje rozwiązania bardzo skuteczne i wygodne w użyciu. To kwintesencja funkcjonalności. Bez niepotrzebnych komplikacji i zbędnych ozdobników. Wygląd i funkcja to jednak nie wszystko. Równie dużą wagę przykładamy do jakości stosowanych przez nas elementów wykończenia. Tylko te w najlepszym gatunku gwarantują trwałość i wytrzymałość na poziomie, którego wymagamy od naszych produktów. Piękno HUGBAGa tkwi w detalach. W naszym przekonaniu pomiędzy jakością, funkcjonalnością i estetyką nie ma miejsca na kompromisy. W pięknych przedmiotach te cechy są nierozdzielne.
                        </p>
                    </Content>
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
                <AboutContainer>
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
                </AboutContainer>
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