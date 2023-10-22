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


import MissionImg from "../../img/record/recordMission.png";
import ExpImg from "../../img/record/recordExp.png";
import RankImg from "../../img/record/recordRank.png";
import SendImg from "../../img/record/sendComment.png";
import ReceiveImg from "../../img/record/receiveComment.png";


const Container = styled.div` /* 기록 카테고리 */
    {props => props.theme.flex('center', 'center')}
    margin-top: 150px;  margin-left: 80px;
    width: 160px; height: 300px; 

  `;

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

  const CustomButton = styled.button` 
    color: ${props => (props.active ? '#00A130' : '#4C4C4C')}; /* 버튼 활성화 글자색 변경 */
    background-color: ${props => (props.active ? '#E1F5D7' : 'white')}; /* 버튼 활성화 배경색 변경 */
    font-size: 18px; font-weight: bolder;
    width:170px; height: 33px;
    margin-bottom: 10px;
    border: none;
    display: flex;
    cursor: pointer; 
  `;

  const Content = styled.div`
    width: 850px; 
    margin-left:350px;  margin-top: -340px;
  `;

  const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 8px;
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
                active={content === data.name} 
              >
                {/* 각 레코드에 해당하는 이미지 추가 */}
                {data.name === 'record01' && <Icon src={MissionImg} alt="Record 01" />} 
                {data.name === 'record02' && <Icon src={ExpImg} alt="Record 02" />} 
                {data.name === 'record03' && <Icon src={RankImg} alt="Record 03" />} 
                {data.name === 'record04' && <Icon src={SendImg} alt="Record 04" />} 
                {data.name === 'record05' && <Icon src={ReceiveImg} alt="Record 05"/>} 
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