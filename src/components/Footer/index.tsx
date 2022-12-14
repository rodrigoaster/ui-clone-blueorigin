import { Container, FooterNavLinks, FooterItem, FooterLink } from './styles'

export function Footer() {
    return (
        <Container>
            <FooterNavLinks>
            <span>BY ASTER ©</span>
                <FooterItem>
                    <FooterLink target="_blank" href="https://instagram.com/rodrigaster">
                        INSTAGRAM
                    </FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink target="_blank" href="https://twitter.com/rodrigaster">
                        TWITTER
                    </FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink target="_blank" href="https://www.linkedin.com/in/rodrigoaster/">
                        LINKEDIN
                    </FooterLink>
                </FooterItem>
            </FooterNavLinks>
        </Container>
    );
}