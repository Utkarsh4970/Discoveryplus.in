import styled from "styled-components";
export const Button = styled.button`
    color:${(props) => (props.theme === "ligth" ? "#f0f0f1;" : "#575d68;")};
    background: ${(props) => (props.theme === "ligth" ? "linear-gradient(68deg, #2175d9 39%, #2789ff 69%);" : "#3e4049")};
    font-weight: 500;
    border:none;
    width:100%;
    heigth:48px;
    padding:10px 0;
    border-radius:5px;
`
