import React from 'react'
import Logo from '../../Assets/logo.svg'
import { HeaderContainer, Wrapper, LogoContainer, HeaderLogo } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Wrapper>
                <LogoContainer>
                    <HeaderLogo src={Logo} alt=""/>
                </LogoContainer>
            </Wrapper> 
        </HeaderContainer>
    )
}

export default Header 