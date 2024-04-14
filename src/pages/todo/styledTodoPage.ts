import styled from "styled-components";

export const StyledTodoPage = styled.div`
    display: flex;
    padding-top: 50px;
    flex-direction: column;
`;

export const StyledTodoPageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h1 {
        flex-grow: 1;
    }
    & > form {
        flex-grow: 1;
        display: flex;
        gap: 10px;
        align-items: center;
    }
`;
