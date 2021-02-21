import { Form, Input, Button, Menu, Item } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { color } from '../pages/lives/'
import styled from 'styled-components'
import img from '../assets/img/bkg-sidebar.jpg'

const Image = styled.img`
    height: 32vmin;
    pointer-events: none;

    @media (min-width: 320px) and (max-width: 1024px) {
        height: 50vmin;
        padding-left: 10px;
    }
`

const Figure = styled.figure`
    padding: 12% 0 0 40%;

    @media (min-width: 320px) and (max-width: 1024px) {
        height: 50vmin;
        padding-left: 0px;
        padding-top: 40%;
    }
`

const SideNav = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 35%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #04355C; /* Blue */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        height: 100vh;
        z-index: -1; 

        p {
            font-size: 16px;
            text-align: left;
        }
        
        
    }
`

const ImageSide = styled.img`
    height: 25vmin;
    pointer-events: none;

    @media (min-width: 320px) and (max-width: 1024px) {
        filter: blur(40px);     
    }


`

const TextContainer = styled.span`
    width: 70%;
    color: white;
    margin: 2.5rem;
    paddin-top: 1.5rem;
    font-size: 17px;
    text-align: left;

    @media (min-width: 320px) and (max-width: 1024px) {
        filter: blur(20px);     
    }
`

const TitleContainer = styled.span`
    width: 50%;
    color: white;
    text-align: center;
    font-size: 17px;

    h1 {
        font-size: 22px;
        color: white;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        filter: blur(20px);     
    }
`

const FormContainer = styled(Form)`
    padding: 0 0 0 40%;

    p {
        text-align: left;
        font-weight: bold;
        padding: 0 10% 0 27%;
    }

    h3 {
        padding-left: 1.5%;
        color: red;
        font-weight: bold;
        padding-top: 2%;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
       width: 95%;
       padding-top: 40%;
       padding-left: 3%;
       
       p {
         font-size: 18px;
         font-weight: bold;
         color: #fff;
         padding-right: 25%;
         text-align: center;
       }

       h3 {
           color: white;
       }
    }
  
    @media (min-width: 1366px) and (max-width: 4000px) {
      p {
        padding-right: 28%;
        text-align: center;
      }
    }
`

const StyledButton = styled(Button)`
    background-color: #714191;
    width: 30%;
    height: 50px;
    border-radius: 10px;
    font-weight: bold;

    @media (min-width: 320px) and (max-width: 1024px) {
       width: 80%;
       color: #fff;
    }
`

const StyledInput = styled(Input.Password)`
    width: 30%;
    height: 50px;
    border-radius: 10px;

    @media (min-width: 320px) and (max-width: 1024px) {
       left: 0px;
       width: 80%;     
    }
`

const PageContainer = styled.div`
    width: 70%;
    margin: 2rem auto;
    text-align: left;
    padding: 0 5% 5% 15%;

    h2 {
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size: 22px;
        font-weight: bold;
    }

    p {
        font-size: 18px;
    }

    figure {
        display: flex;
        justify-content: center;
    }

    iframe {
        margin-left: 20%;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin: 2rem auto;
        text-align: left;
        padding: 0 5% 5% 5%;
        
        h3 {
            font-size: 18px;
        }

        p {
            font-size: 16px;
        }

        a {
            font-size: 16px;
        }

        iframe {
            margin-left: 10%;
        }
    }
    
`

const HeaderContainer = styled.div`
    h2 {
        font-size: 26px;
        font-weith: bold;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
       h2 {
            font-size: 18px;
            font-weith: bold;
        }
    }
`

const Img = styled.img`
    width: 90%;
    height: 80%;
`

const StyledHeader = styled.header`
    background-color: #f9f9f9;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 0;
    padding-left: 10%;
    width: 100%;
    height: 70px;
    border-bottom: 5px solid #5fdbfa;
    display: flex;
    align-items: center;

    h1 {
        font-weight: bold;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        height: 100px;
        background-color: #05143c;


    }
`
const StyledMenuButton = styled.button`
    border-style: none;
    background-color: rgba(255, 0, 0, 0);
    outline: none; 
    
    @media (min-width: 320px) and (max-width: 1024px) {
        padding-left: 0px;
    }
`

const Hamburguer = styled(MenuOutlined)`
    font-size: 40px;
    font-weight: bold;
    color: #5fdbfa;
    /*border: 1px solid;
    padding: 5px;
    border-radius: 5px;*/ 

    @media (min-width: 320px) and (max-width: 1024px) {
        color: #fff;
        font-size: 26px;
    }
`

const CloseButton = styled(CloseOutlined)`
    font-size: 40px;
    font-weight: bold;
    color: #5fdbfa;

    @media (min-width: 320px) and (max-width: 1024px) {
        color: #fff;
        font-size: 26px;
        font-weight: bold;
    }
`

const MenuContainer = styled.div`
    margin: 1rem;
`

const HeaderTitleContainer = styled.div`
    margin: 1rem;
    color: #05143c;
    font-size: 15px;
    font-weight: bold;

    @media (min-width: 320px) and (max-width: 1024px) {
      display: flex;
      justify-content: flex-end;
      width: inherit;
      padding-right: 1rem;

        h1 {
            color: #fff;
            font-size: 20px;
        }
    }
`


const StyledIframe = styled.iframe`
    margin: 0rem auto;
    padding: 0 10% 10% 30%;
    border: none;
    height: 100vh;

    ::-webkit-scrollbar {
        width: 8px;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        padding: 0 0% 10% 0%;
    }
`

const IframeTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 2rem auto;
    padding: 0 0 0 30.5%;

    h3 {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        padding-left: 2%;

        h3 {
            font-size: 26px;
            text-align: left;
        }

    }
    
`

const SideNavModules = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 8%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #04355C; /* Blue */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        display: none;
    }
`

const ImageSideBarModules = styled.img`
    height: 8vmin;
    pointer-events: none;

`

const StyledSideMenu = styled(Menu)`
    background-color: #f9f9f9;
    border: none;
    font-size: 16px;
    font-weight: bold;    
`

const MenuItem = styled(Menu.Item)`
    background-color: none;
`

const SideBarLessonsMenu = styled.div`
    height: 90%; /* Full-height: remove this if you want "auto" height */
    width: 20%; /* Set the width of the sidebar */
    position: fixed;  /*Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 70px; /* Stay at the top */
    left: 8%;
    background-color: #f9f9f9; /* Light grey*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding: 10px 0 50px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f9f9f9;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(#0479fb, #5fdbfa);
        border-radius: 20px;
        box-shadow: 0 0 20px 5px gray;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #5fdbfa;
        box-shadow: 0 0 0px 5px #e6f7fe;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        padding: 0 0 0 0;
        left: 0;
        top: 100px;
    }
`

const SiderLivesContainer = styled.button`
    width: 85%;
    background-color: #714191;
    margin: 10px 0 10px 0;
    padding: 10px 0 0 0;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 5px grey;
    outline: none;
    cursor: pointer;

    h2 {
        font-weight: bold;
        font-size: 18px;
        color: #fff;
    }

    &:hover {
        background-color: #a75fcb;
        box-shadow: 0 0 15px #5fdbfa;

        h2 {
            text-shadow: 0 0 5px #fff;
        }
    }
`

//Live page

const Header = styled.header`
    background-color: #00013c;
    height: 650px;

    figure {
        padding: 50px 0 0 80px;
    }

    img {
       height: 32vmin;
    }

    h2 {
        color: #00dbff;
        font-size: 52px;
        font-weight: 800;
        font-style: italic 
    }

    h3 {
        color: #fff;
        font-size: 32px;
        width: 700px;
        margin: 0rem auto;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        height: 450px;
        padding: 0 0 0 0;
        left: 0;
        top: 100px;

        figure {
            padding: 50px 0 0 0;
        }

        img {
            height: 32vmin;
        }

        h2 {
            color: #00dbff;
            font-size: 32px;
            font-weight: 800;
            font-style: italic 
        }

        h3 {
            color: #fff;
            font-size: 22px;
            width: 300px;
            margin: 0rem auto;
        }
    }

    
`

const BackgroundSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem auto;
    width: 1400px;

    h2 {
        color: #00013c;
        font-size: 52px;
        font-weight: 700;
        font-style: italic;
        width: 1900px;
        height: 100px;
    }

    h3 {
        font-size: 32px;
        color: #00013c;
        width: 600px;
    }

    h4 {
        font-size: 32px;
        font-weight: 700;
        color: #00dbff;
        width: 600px;
        height: 30px;
    }

    p {
        font-size: 42px;
        font-weight: 700;
        color: #00013c;
        height: 20px;
    }

    iframe {
        margin: 2rem;
    }

    div {
        margin: 0;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 320px;

        h2 {
            color: #00013c;
            font-size: 32px;
            font-weight: 700;
            font-style: italic;
            width: 300px;
        }

        h3 {
            font-size: 22px;
            color: #00013c;
            width: 90%;
            padding: 0 0 0 5%;
        }

        h4 {
            font-size: 32px;
            font-weight: 700;
            color: #00dbff;
            width: 100%;
            height: 30px;
        }

        p {
            font-size: 32px;
            font-weight: 700;
            color: #00013c;
        }

        iframe {
            margin: 0;
        }

        
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        width: 1200px;
    }
`

const ContentContainer = styled.div`
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 320px;

        iframe {
            padding: 0;
        }
    }    
`

const SectionGroup = styled.div`
    
`

const FooterPageLives = styled.footer`
    background-color: #00013c;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    figure {

    }

    img {
        height: 15vmin;
    }

    p {
        font-size: 22px;
        color: #fff;
    }
`

const ButtonCtaLives = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: 22px;
        padding-right: 10%;
        
    }

    button {
        height: 80px;
        width: 600px;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 0px 25px #f2f2f2;
        background-color: #0479fb;
        color: #fff;
        cursor: pointer;
    }

    @media (min-width: 320px) and (max-width: 375px) {
        padding-right: 58%;

        a {
            font-size: 22px;
        }

        button {
            width: 300px;
        }
    }

    @media (min-width: 376px) and (max-width: 425px) {
        a {
            font-size: 22px;
            padding-right: 50%;
        }

        button {
            width: 300px;
        }
    }

    @media (min-width: 426px) and (max-width: 768px) {
        a {
            font-size: 22px;
            padding-right: 30%;
        }

        button {
            width: 300px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        a {
            font-size: 22px;
            padding-right: 15%;
        }

        button {
            width: 300px;
        }
    }
`

const StyledHtmlContent = styled.div`
    width: 60%;
    margin: 0 0 0 30%;
    text-align: left;
    
    

    @media (min-width: 320px) and (max-width: 374px) {
        width: 295px;
        margin: 1rem auto;

      iframe {
        display: none;
      }

      img {
        display: none;
      }

        p {
            width: 300px;
            padding-left: 0 !important;
        }

        pre {
            width: 290px;
        }

        img {
            width: 290px;
        }

        div {
            width: 290px;
        }

        ul {
            padding-left: 0px;
        }

        li {
            width: 200px;
            list-style-type: none;
            margin: 0;
        }

        table {
            width: 300px;
            border: none;
        }

        tbody {
            display: none;
        }

        td {
            width: 250px;
            padding: 0px !important;
        }

        h3{
            width: 290px;
        }

    }

    @media (min-width: 375px) and (max-width: 424px) {
        width: 360px;
        margin: 1rem auto;

      iframe {
        display: none;
      }

      img {
        display: none;
      }

        p {
            width: 360px;
            padding-left: 0 !important;
        }

        pre {
            width: 360px;
        }

        img {
            width: 360px;
        }

        div {
            width: 360px;
        }

        ul {
            padding-left: 0px;
        }

        li {
            width: 360px;
            list-style-type: none;
            margin: 0;
        }

        table {
            width: 360px;
            border: none;
        }

        tbody {
            display: none;
        }

        td {
            width: 360px;
            padding: 0px !important;
        }

        h3{
            width: 290px;
        }

    }

    @media (min-width: 425px) and (max-width: 767px) {
        margin: 2rem;

      iframe {
        display: none;
      }

      img {
        display: none;
      }

        p {
            width: 390px;
            padding-left: 0 !important;
        }

        pre {
            width: 390px;
        }

        img {
            width: 390px;
        }

        div {
            width: 390px;
        }

        ul {
            padding-left: 0px;
        }

        li {
            width: 390px;
            list-style-type: none;
            margin: 0;
        }

        table {
            width: 390px;
            border: none;
        }

        tbody {
            display: none;
        }

        td {
            width: 390px;
            padding: 0px !important;
        }

        h3{
            width: 390px;
        }

    }

    @media (min-width: 768px) and (max-width: 1023px) {
        margin: 2rem;
      
      iframe {
        display: none;
      }

      img {
        display: none;
      }

        p {
            width: 700px;
            padding-left: 0 !important;
        }

        pre {
            width: 700px;
        }

        img {
            width: 700px;
        }

        div {
            width: 700px;
        }

        ul {
            padding-left: 0px;
        }

        li {
            width: 700px;
            list-style-type: none;
            margin: 0;
        }

        table {
            width: 700px;
            border: none;
        }
        
        tbody {
          display: none;
        }

        td {
            width: 700px;
            padding: 0px !important;
        }

        h3{
            width: 700px;
        }

    }
`

export {
    Image,
    Figure,
    ImageSide,
    SideNav,
    TextContainer,
    TitleContainer,
    FormContainer,
    StyledButton,
    StyledInput,
    PageContainer,
    HeaderContainer,
    Img,
    StyledMenuButton,
    Hamburguer,
    MenuContainer,
    HeaderTitleContainer,
    CloseButton,
    StyledHeader,
    StyledIframe,
    IframeTitle,
    SideNavModules,
    ImageSideBarModules,
    StyledSideMenu,
    MenuItem,
    SideBarLessonsMenu,
    SiderLivesContainer,
    Header,
    BackgroundSection,
    SectionGroup,
    FooterPageLives,
    ButtonCtaLives,
    ContentContainer,
    StyledHtmlContent
}