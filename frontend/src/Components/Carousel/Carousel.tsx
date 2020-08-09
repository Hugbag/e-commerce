// @ts-ignore

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 1140px;
    margin: 0 auto;
`;

export default () => (
    <StyledDiv>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay >
                <div>
                    <img alt="" src="https://hugbag.pl/uploads/slider/hugbag-2018-04-0926219mecek-slajder.jpg" />
                </div>
                <div>
                    <img alt="" src="https://hugbag.pl/uploads/slider/hugbag-2018-10-16540882.jpg" />
                </div>
                <div>
                    <img alt="" src="https://hugbag.pl/uploads/slider/hugbag-2020-04-3010717slajder_lubasha.jpg" />
                </div>
                <div>
                    <img alt="" src="https://hugbag.pl/uploads/slider/hugbag-2020-04-3084514live_set.jpg" />
                </div>
            </Carousel>
    </StyledDiv>

);
