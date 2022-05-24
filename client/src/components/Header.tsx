import styled from 'styled-components';
import Search from '../components/Search';

const Header = styled.header`
   width: 100%;
   height: 650px;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   img {
       width: 100%;
       height: 100%;
       background-size: cover;
       object-fit: cover;
       filter: brightness(70%);
       position: relative;
       z-index: 2;

   }
   h1 {
        font-family: 'Pacifico', cursive;
       position: absolute;
       color: white;
       z-index: 5;
       font-size: 68px;
   }

   p {
       position: absolute;
       color: white;
       z-index: 5;
       font-size: 20px;
       width: 60%;
       margin-top: 15rem;
   }
`;

const MainHeader = () => {
    return<>
        <Header>
        <Search/>
        <h1>Filipino Cuisine</h1>
        <p>Filipino cuisine is popular for its delicious taste and appetizing aroma. You can easily tell apart Filipino food from other cuisines due to its color and the manner it is served too. Its distinctive colors, aroma, and flavors result in a full sensory experience with each bite.</p>
       <img src="https://cdn.vox-cdn.com/thumbor/Y1PiIVJQUqE5VuLHdfjbwX9staQ=/0x0:3125x2500/1200x800/filters:focal(1313x1000:1813x1500)/cdn.vox-cdn.com/uploads/chorus_image/image/69158950/small_plates.0.jpg" alt="Filipino dish"/>
    </Header>
         </>   
}

export default MainHeader;