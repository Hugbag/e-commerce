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

type HomeProps = {
    hidden?: boolean;
};
type HomeState = {
    img: string,
    showPersonal: boolean,
    showLeather: boolean,
    showDetails: boolean,
    showWhy: boolean,
    showCustom: boolean,
    showTrustedBy: boolean,
};

class Home extends React.Component <HomeProps, HomeState> {
    state: HomeState = {
        img: 'https://hugbag.pl/assets/dist/img/categories/case.jpg',
        showPersonal: true,
        showLeather: true,
        showDetails: true,
        showWhy: true,
        showCustom: true,
        showTrustedBy: true,
    };

    changeImage = (name: string) => {
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
    };

    toggleContent = (info: string) => {
        switch (info) {
            case "personal":
                this.setState({showPersonal: !this.state.showPersonal, showLeather: true, showDetails: true, });
                break;
            case "leather":
                this.setState({showLeather: !this.state.showLeather, showPersonal: true, showDetails: true, });
                break;
            case "details":
                this.setState({showDetails: !this.state.showDetails, showPersonal: true, showLeather: true, });
                break;
            case "why":
                this.setState({showWhy: !this.state.showWhy, showCustom: true, showTrustedBy: true, });
                break;
            case "custom":
                this.setState({showCustom: !this.state.showCustom, showWhy: true, showTrustedBy: true, });
                break;
            case "trusted-by":
                this.setState({showTrustedBy: !this.state.showTrustedBy, showWhy: true, showCustom: true, });
                break;
        }
    };

    render() {
        const { img, showPersonal, showLeather, showDetails, showWhy, showCustom, showTrustedBy } = this.state;

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
                        <li onClick={() => this.toggleContent("why")}>dlaczego HUGBAG?</li>
                        <li onClick={() => this.toggleContent("custom")}>personalizacja</li>
                        <li onClick={() => this.toggleContent("trusted-by")}>zaufali nam</li>
                    </StyledListLeft>
                    <Content hidden={showWhy} >
                        <p>Dlaczego HUGBAG sprawdza się w biznesie? Przedmioty firmowe to nie tylko miły gest wobec klientów czy współpracowników, ale bardzo konkretne narzędzie marketingowe, które ma przynieść określone efekty. Jaki przedmiot sprawdzi się w tej roli najlepiej?</p>
                        <p>Wysokiej jakości, solidny ponieważ wrażenie, jakie robi jest przenoszone na firmę, która go podarowała, a któż nie chciałby być tak dobrze oceniony? Wytrzymały ponieważ każda firma chciałaby, by przedmiot z jej logo służył obdarowanemu jak najdłużej. Funkcjonalny ponieważ wtedy cieszy nie tylko oczy. Piękny ponieważ ludzie lubią otaczać się rzeczami pięknymi, a klienci, kontrahenci, współpracownicy i własna załoga nie są tutaj wyjątkiem. Z potencjałem, by stać się przedmiotem osobistym ponieważ ten pułap osiągają tylko najbardziej trafione upominki.</p>
                        <p>HUGBAG taki właśnie jest. Mówimy to bez fałszywej skromności. Tworzymy produkty, których sami z przyjemnością używamy. Proszę sobie wyobrazić swoje logo na przedmiocie używanym często, z przyjemnością, przez lata… Brzmi jak marzenie każdego specjalisty od marketingu. Lubimy spełniać marzenia naszych Klientów. Zapraszamy do kontaktu.</p>
                    </Content>
                    <Content hidden={showCustom} >
                        <h3>Kolorystyka</h3>
                        <p>HUGBAG wygląda ciekawie w każdym kolorze, lecz w biznesie klasyka prezentuje się zdecydowanie najlepiej. Brązy, beże czy czerń pasują do każdego stylu i współgrają z każdą kolorystyką firmową. Naturalne odcienie powinny też zadowolić gusta kontrahentów i pracowników, a to znacząco zwiększa prawdopodobieństwo, że polubią oni podarowanego im firmowego HUGBAGa. Na życzenie Klientów szyjemy również ze skór w odcieniach mniej typowych, za to możliwie najbardziej spójnych z identyfikacją wizualną ich firm. Choć jednak bardzo tego żałujemy, w przypadku skór naturalnych paleta dostępnych kolorów jest ograniczona. Może więc jednak elegancka, ponadczasowa czerń…?</p>
                        <h3>Cena</h3>
                        <p>HUGBAG to autorska manufaktura. Przedmioty wykonujemy osobiście, na zamówienie i według potrzeb Klienta. Z tego powodu tylko niewielkie ilości produktów dostępne są od ręki. Na ostateczną wartość zamówienia składa się szereg czynników: wielkość zamówienia, wybrany rodzaj skóry i wykończenia, kolorystyka produktu, zakres jego personalizacji oraz skomplikowanie i rozmiar znakowania. Często spełniamy życzenia specjalne, realizujemy zamówienia nietypowe i podejmujemy się usług dodatkowych. Dlatego wycenę przygotowujemy indywidualnie dla każdego Klienta. W tej sprawie prosimy o kontakt mailowy lub telefoniczny. Szybko odpowiadamy.</p>
                        <h3>Opcje znakowania</h3>
                        <p>Znakujemy metodą wycisku, z użyciem specjalnej matrycy, przygotowywanej dla konkretnego Klienta. Na każdym HUGBAGu możemy wykonać inne znakowanie, w tym personalizację imienną. Logo do znakowania należy przesłać do nas w formie elektronicznej. Przyjmujemy pliki w formatach: cdr, ai, eps, pdf, przy czym wszystkie elementy graficzne oraz fonty w pliku powinny zostać zapisane jako grafika wektorowa. Maksymalny wymiar pola znakowania wynosi 75 x 75 mm.</p>
                        <h3>Minimalna wielkość zamówienia</h3>
                        <p>Realizacja zamówienia jest możliwa już od jednej sztuki. Niektóre rodzaje skór, szczególnie w nietypowych odcieniach, sprowadzamy indywidualnie dla danego Klienta. W takich sytuacjach może istnieć konieczność zamówienia w garbarni minimalnej ilości surowca.</p>
                        <h3>Czas realizacji zamówienia</h3>
                        <p>Nasze realizacje uwzględniają indywidualne potrzeby Klientów. Z tego powodu tylko niewielkie ilości produktów są dostępne od ręki. Czas realizacji ustalamy odrębnie dla każdego zamówienia. Zależy on przede wszystkim od wybranego rodzaju skóry (niektóre skóry są dostępne od ręki, inne sprowadzamy specjalnie dla Klienta), preferowanego rodzaju wykończenia oraz ilości sztuk. Bez względu na wielkość zamówienia, rodzaj użytej skóry i sezon – maksymalny czas realizacji wynosi 30 dni roboczych, od przyjęcia zlecenia, do momentu dostarczenia gotowych produktów do Klienta. Zapewniamy jednak, że choć na HUGBAGa warto poczekać, to zwykle nie trzeba aż tak długo.</p>
                        <h3>Zamówienia indywidualne</h3>
                        <p>Nie lubimy mówić, że „się nie da”. Tworzymy na miarę potrzeb naszych Klientów. Większe, mniejsze, z kolorowym szwem lub całe w innym kolorze, z innym zapięciem, z dodatkowym paskiem lub dziurką. Możemy stworzyć nawet coś całkiem nowego, innego niż to, co mamy w ofercie. U nas „da się” bardzo wiele. Zapraszamy do kontaktu.</p>
                    </Content>
                    <Content hidden={showTrustedBy} >
                        <h3>Adrenaline Addicts</h3>
                        <a href='adrenalineaddicts.eu'>adrenalineaddicts.eu</a>
                        <h3>ALARO</h3>
                        <a href='www.alaro.pl'>www.alaro.pl</a>
                        <h3>AMC Polska</h3>
                        <a href='www.amctv.pl'>www.amctv.pl</a>
                        <h3>ATM Grupa</h3>
                        <a href='www.atmgrupa.pl'>www.atmgrupa.pl</a>
                        <h3>Bieszczadzkie Drezyny Rowerowe</h3>
                        <a href='drezynyrowerowe.pl'>drezynyrowerowe.pl</a>
                        <h3>Buck Studio</h3>
                        <a href='www.buck.pl'>www.buck.pl</a>
                        <h3>CAMPO</h3>
                        <a href='campomoderngrill.pl'>campomoderngrill.pl</a>
                        <h3>DMC Poland</h3>
                        <a href='dmcpoland.com'>dmcpoland.com</a>
                        <h3>Double Brand</h3>
                        <a href='doubledesign.pl'>doubledesign.pl</a>
                        <h3>Gerresheimer</h3>
                        <a href='www.gerresheimer.com'>www.gerresheimer.com</a>
                        <h3>Kompania Piwowarska</h3>
                        <a href='www.kp.pl'>'www.kp.pl</a>
                        <h3>Legnicka Specjalna Strefa Ekonomiczna</h3>
                        <a href='lsse.eu'>lsse.eu</a>
                        <h3>Urząd Marszałkowski Województwa Dolnośląskiego</h3>
                        <a href='www.umwd.dolnyslask.pl'>www.umwd.dolnyslask.pl</a>
                        <h3>Opera</h3>
                        <a href='www.opera.wroclaw.pl'>www.opera.wroclaw.pl</a>
                        <h3>PURO</h3>
                        <a href='purohotel.pl'>purohotel.pl</a>
                        <h3>Titot</h3>
                        <a href='titot.pl'>titot.pl</a>
                        <h3>Titot</h3>
                        <a href='titot.pl'>titot.pl</a>
                        <h3>WATAHA</h3>
                        <a href='www.hbo.pl/wataha'>www.hbo.pl/wataha</a>
                        <h3>Węglohut</h3>
                        <a href='www.weglohut.pl/firma.html'>www.weglohut.pl/firma.html</a>
                        <h3>Zamek Topacz</h3>
                        <a href='www.zamektopacz.pl'>www.zamektopacz.pl</a>
                    </Content>
                </AboutContainer>
            </section>
            <section>
                <SectionHeadline>Kontakt</SectionHeadline>
                <AboutContainer>
                    <Row>
                        <Col>
                        <AddressSection>
                            <img src='' />
                            <p>A. Ostrowskiego 30/127 53-238 Wrocław</p>
                            <p>e-mail: biuro@hugbag.pl</p>
                            <p>Znajdź nas na: Facebook, Instagram</p>
                        </AddressSection>
                        </Col>
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