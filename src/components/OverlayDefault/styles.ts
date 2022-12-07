import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerBlock = styled.div`
    > h2 {
        font-size: 75px;
    }

    > h3 {
        font-size: 75px;
    }
` 

export const Button = styled.button`
    border: 1px solid #ccc;
    

    padding: 15px 45px;

    text-transform: uppercase;
    color: #fff;

    font-weight: bold;
` 