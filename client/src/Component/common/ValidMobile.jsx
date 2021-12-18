import styled from "styled-components";
export const ValidateMobile = styled.div`
font-size: 13px;
font-style: italic;
background-color: transparent;
border-top: 1px solid;
border-color: ${(props)=>(props.isError=="true"? "#ff4040;":"grey;")};
color: #ff4040;
padding: 5px 0;
& > span{
    display:${(props)=>(props.isError=="true"?"block;":"none;")}
}
` 