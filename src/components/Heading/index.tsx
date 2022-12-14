import * as S from './styles'

import Logo from '../../../public/Logo.png'

export function Heading() {
    return (
        <S.Container>
            <S.LogoHeader>
                <img src={Logo} alt="Logo" width={"130px"} height={"100px"}/>
            </S.LogoHeader>
            <S.Navbar>
                <S.Navlinks>
                    <S.NavItem>
                        <S.Navlink>
                            Vehicles & Engines
                        </S.Navlink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.Navlink>
                            About blue
                        </S.Navlink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.Navlink>
                            News
                        </S.Navlink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.Navlink>
                            Careers
                        </S.Navlink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.Navlink>
                            Shop
                        </S.Navlink>
                    </S.NavItem>
                    <S.NavItem>
                        <S.Navlink>
                            Fly to space
                        </S.Navlink>
                    </S.NavItem>
                </S.Navlinks>
            </S.Navbar>
            <S.MenuMobile>

            </S.MenuMobile>
        </S.Container>
    );
}