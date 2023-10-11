import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer";
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

  const Container = styled.div` /* 기록 카테고리 */
    {props => props.theme.flex('center', 'center')}
    margin-top: 150px;  margin-left: 80px;
    width: 160px; height: 300px; 

  `;

  const CustomButton = styled.button` 
    color: ${props => (props.active ? '#0B7903' : '#4C4C4C')}; /* 버튼 활성화 글자색 변경 */
    background-color: ${props => (props.active ? '#E0FFDB' : 'white')}; /* 버튼 활성화 배경색 변경 */
    font-size: 18px; font-weight: bolder;
    width:150px; height: 33px;
    margin-bottom: 10px;
    border: none;
    display: flex;
    cursor: pointer; 
  `;

  const Content = styled.div`
    width: 850px; 
    margin-left:350px;  margin-top: -340px;
  `;

  return (
    <main>
      <Header />
      <div className="record_All">
        <Container className="record_Menu">
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
        {content && 
          <Content className="record_Content">
            {selectComponent[content]}
          </Content>}
      </div>
      <Footer />
    </main>
  );
}

export default MainRecord;