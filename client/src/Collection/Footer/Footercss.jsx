import styled from 'styled-components' 


export const Footercss = styled.div`

p {
    font-size: 15px;
}

#footer {
 background: #000011;
 padding: 10px;
 color: #f4f4f8;
}
#top_content {
    justify-content: space-between;

    @media (max-width: 1080px) {
        flex-direction: column;
      }
}
.logos {
    margin-right: 15px;
    height: 50%;
}
.logos2 {
    margin-right: 10px;
    padding-right:10px;
}
.flex_wrapper {

    display: flex
}

.right_content {
    p {
        margin-bottom: 3px;
    }
}
#bottom_content {
    margin-top: 20px;
    p {
        margin-bottom: 0px;
        margin-right: 15px;
    }
}
#top_right {
    @media (max-width: 457px) {
        flex-direction: column;
      }
}
.top_left {
    img {
        @media (max-width: 550px) {
            margin-top: 10px;
        }
    }
}

`


