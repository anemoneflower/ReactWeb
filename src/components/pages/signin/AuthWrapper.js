import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import {Link} from 'react-router-dom';
import { shadow } from 'lib/styleUtils';


// 중앙에 위치
const Positioner = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 너비,그림자
const ShadowedBox = styled.div`
    width: 500px;
    ${shadow(2)}
`;

const SigninWrapper = styled.div`
    background:${oc.teal[7]};
    height:5rem;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Signin = styled.div`
    color:white;
    font-size:2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

const AuthWrapper = ({children}) => (
    <Positioner>
        <ShadowedBox>
            <SigninWrapper>
                <Signin>Sign In</Signin>
            </SigninWrapper>
            <Contents>
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>


);

export default AuthWrapper;
