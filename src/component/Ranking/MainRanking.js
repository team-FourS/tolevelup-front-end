import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../css/Ranking.css";
import styled from 'styled-components';
import { MAIN_DATA } from './MainData';
import RankHobby from './RankHobby';
import RankExercise from './RankExercise';
import RankAll from './RankAll';
import RankEat from './RankEat';
import RankCulture from './RankCulture';

const Rank = () => {
  const [content, setContent] = useState();

  const handleClickButton = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <RankAll />,
    second: <RankExercise />,
    third: <RankEat />,
    fourth: <RankCulture />,
    fifth: <RankHobby />,
  };

  console.log(content);

  const Container = styled.div`
    {props => props.theme.flex('center', 'center')}
    height: 30vh;
    margin-left:20vh;
    
  `;

  // Styled-components 변수명 변경
  const CustomButton = styled.button`
    padding: 10px 20px;
    // margin-right: 1rem;
    margin: 10px;
    color: ${props => (props.active ? 'white' : '#a9d28c')}; /* 버튼 활성화 시 색 변경 */
    background-color: ${props => (props.active ? '#a9d28c' : '#fff')}; /* 버튼 활성화 시 색 변경 */
    border-radius: 2rem;
    border-style: solid;
    border-color: #a9d28c;
    box-shadow: 1px 4px 1px #8eb373;
  `;

  const Content = styled.div`
    {props => props.theme.flex('center', 'center')}

  `;

  return (
    <main className="layout_ranking">
      <Header />
      <div>
        <Container>
          {MAIN_DATA.map((data) => {
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