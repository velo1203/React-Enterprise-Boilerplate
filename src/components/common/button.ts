import styled from "styled-components";

export const Button = styled.button`
    background-color: var(--primary-color);
    color: var(--font-color);
    border: none;
    border-radius: 5px;
    width: 100px;
    color: white;
    padding: 15px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        opacity: 0.9;
    }
    &:active {
        transform: scale(0.98);
    }
`;
