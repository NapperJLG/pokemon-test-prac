import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    height: 50px;
    background-color: #310080;
`

export const Wrapper = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: 100%;
`

export const LogoContainer = styled.div`
    display: block;
    width: 120px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
`

export const HeaderLogo = styled.img`
    display: block;
    width: 100%;
    margin: 0;
`