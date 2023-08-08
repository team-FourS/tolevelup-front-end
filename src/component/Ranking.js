// import React,{useState} from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import "../css/Ranking.css";
// import styled from 'styled-components';
// import { MAIN_DATA } from './MainData';
// import Fifth from './Fifth';

// const Rank = () => {

// const [content, setContent] = useState();


//   const handleClickButton = e => {
//     const { name } = e.target;
//     setContent(name);

//   };

//   const selectComponent = {
//     fifth: <Fifth />,
//   };

//   console.log(content);

//   const Container = styled.div`
//   {props => props.theme.flex('center', 'center')}
//   height: 20vh;
// `;

// const Button = styled.button`
//   padding: 1rem 2rem;
//   margin-right: 1rem;
//   color: blue;
//   background-color: #eeeeee;
//   border-radius: 2rem;
//   active: red;
// `;

// const Content = styled.div`
//   {props => props.theme.flex('center', 'center')}

// `;
//     return (
//       <main className="layout_ranking">
//         <Header/>
//           <div>
//       <Container>
//       {MAIN_DATA.map(data => {
//         return (
//           <Button onClick={handleClickButton} name={data.name} key={data.id}>
//             {data.text}
//           </Button>
//         );
//       })}
//     </Container>
//     {content && <Content>{selectComponent[content]}</Content>}
//   </div>

          
//          <Footer/>
//        </main>  
//     );
//   }

//   export default Rank;
import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../css/Ranking.css";
import styled from 'styled-components';
import { MAIN_DATA } from './MainData';
import Fifth from './Fifth';

const Rank = () => {
  const [content, setContent] = useState();

  const handleClickButton = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    fifth: <Fifth />,
  };

  console.log(content);

  const Container = styled.div`
    {props => props.theme.flex('center', 'center')}
    height: 30vh;
    margin-left:20vh;
  `;

  // Styled-components 변수명 변경
  const CustomButton = styled.button`
    padding: 1rem 2rem;
    // margin-right: 1rem;
    margin: 10px;
    color: ${props => (props.active ? 'white' : 'blue')}; /* 버튼 활성화 시 색 변경 */
    background-color: ${props => (props.active ? 'blue' : 'lightgray')}; /* 버튼 활성화 시 색 변경 */
    border-radius: 2rem;
    border: none;
  `;

  const Content = styled.div`
    {props => props.theme.flex('center', 'center')}

  `;

  return (
    <main className="layout_ranking">
      <Header />
      <div>
        <Container>
          {MAIN_DATA.map(data => {
            return (
              <CustomButton
                onClick={handleClickButton}
                name={data.name}
                key={data.id}
                active={content === data.name} // 버튼 활성화 여부에 따라 스타일 변경
              >
                {data.text}
              </CustomButton>
            );
          })}
        </Container>
        {content && <Content>{selectComponent[content]}</Content>}
      </div>
      <Footer />
    </main>
  );
}

export default Rank;