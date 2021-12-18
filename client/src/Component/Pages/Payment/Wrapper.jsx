
import styled  from 'styled-components'
const Wrappers = styled.div`
width: 100%;
height: 100vh;
background-image: url("https://auth.discoveryplus.in/bg-e113e561ce01bbb664774cefd83a4a65.jpg");
background-size: cover;

background-repeat: no-repeat;
position: fixed;
overflow:scroll;
`
export const Wrapper = ({children})=>{
return (
    <Wrappers className="page-container-sighin backgroundwrapper">
        {children}
    </Wrappers>
)
}