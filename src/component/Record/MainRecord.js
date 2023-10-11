import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer";
import "../../css/ranking/Ranking.css";
import styled from 'styled-components';
import { RECORD_DATA } from './RecordData';
import RecordMission from './RecordMission';
import RecordExp from './RecordExp';
import RecordRanking from './RecordRanking';
import SendComment from './SendComment';
import GetComment from './GetComment';

const MainRecord = () => {
  const [content, setContent] = useState('record01');

  const handleClickButtons = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    record01: <RecordMission />,
    record02: <RecordExp />,
    record03: <RecordRanking />,
    record04: <SendComment />,
    record05: <GetComment />,
  };

  console.log(content);

  const Container = styled.div`
    {props => props.theme.flex('center', 'center')}
    height: 10vh;
    margin-left:55vh;
  `;

  const CustomButton = styled.button` 
    color: ${props => (props.active ? 'white' : '#237A24')}; /* 버튼 활성화 시 색 변경 */
    background-color: ${props => (props.active ? '#a9d28c' : '#fff')}; /* 버튼 활성화 시 색 변경 */
    font-size: 18px; font-weight: bolder;
    cursor: pointer;
    border: none;
    display: flex;
  `;

  const Content = styled.div`
    
  `;

  return (
    <main className="layout_ranking">
      <Header />
      <div>
        <Container>
          {RECORD_DATA.map((data) => {
            return (
              <CustomButton
                onClick={handleClickButtons}
                name={data.name}
                key={data.id}
                active={content === data.name} >
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

export default MainRecord;