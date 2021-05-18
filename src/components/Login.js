import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="dp" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last 
                        Dragon for an additional fee with a Disney+
                        subscription. As of 03/26/21, the price of
                        Disney+ and the Disney Bundle will increase
                        by $1.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="dp"/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
};

export default Login;

const Container = styled.section `
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div `
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%100vh;
`

const BgImage = styled.div `
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
`

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        width: 75%;
    }
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    min-height: 1px;
    width: 100%;
`

const SignUp = styled.a `
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`
const Description = styled.p `
    letter-spacing: 1.5px;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CTALogoTwo = styled(CTALogoOne)`
    max-width: 600px;
    margin-bottom : 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;