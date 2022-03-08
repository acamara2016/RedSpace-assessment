import styled, { keyframes } from 'styled-components';
import Lottie from 'react-lottie-player';
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

export const Input = styled.input`
    border-radius: 30px;
    font-size:0.8rem;
    padding: 0.6rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
export const Loading = styled(Lottie)`
    width: 45%;
    display: inline-flex;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    @media only screen and (max-width: 850px) {
        width: 75%;
    }
`;

export const Icon = styled.img`
    width: 24px;
`;

export const Main = styled.main`
    margin: 5% 10%;
`;

export const CharacterHeader = styled.div`
`;

export const Typography = styled.p`
    margin: 5px;
`;

export const CharacterTitle = styled.h2`
    animation: 1s ${pulseAnimation};
`;
export const CardSubTitle = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 20px;
    row-gap: 20px;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        grid-template-columns: auto;
        column-gap: 10px;
        row-gap: 10px;
    }
    @media only screen and (max-width: 850px) {
        column-gap: 15px;
        row-gap: 15px;
    }
`;

export const GridItem = styled.div`
    max-width: 300px;
    padding: 10px;
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    color: white;
    border-radius: 30px;
    cursor: pointer;
    font-size:0.8rem;
    padding: 0.6rem;
`;