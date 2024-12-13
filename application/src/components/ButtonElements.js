import styled from "styled-components";

// Styled button component
export const Button = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: ${({primary}) => (primary ? '#fff' : '#B05FFD')};
        color: ${({dark}) => (dark ? '#010606' : '#fff')};
    }
`;

// Styled basic button component
export const ButtonBasic = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: ${({primary}) => (primary ? '#fff' : '#B05FFD')};
        color: ${({dark}) => (dark ? '#010606' : '#fff')};
    }
`;

// Styled inverted basic button component
export const ButtonBasicInv = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: #000;
        color: #fff;
    }
`
