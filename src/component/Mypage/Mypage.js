import user from '../../img/user.png'
import {Routes, Route, Link} from "react-router-dom";
import PwCheck from "./PwCheck"
import "../../css/mypage/Mypage.css"
import Header from "../Header/Header";
import Footer from "../Footer";
import Modal from "../Modal/Modal";
import Follower from "./Follower";
import Following from './Following';
import CommentDa from "./CommentDa";
import axios from 'axios';
// import { PureComponent } from 'react';
import React, { useState } from 'react';

const Mypage = () => {

    // const [users, setUsers] = useState([]);

    const [follower, setWer] = useState(false);
    const [fallowing, setWing] = useState(false);
    const [comment, setCommen] = useState(false);
    
    // useEffect(() => {
    //     axios.get('api/v1/users/login')
    //         .then(response => {
    //             setUsers(response.data);
    //         });
    // }, []);


    // useEffect(() => {
    //     // API 호출
    //     axios
    //         .get(`api/v1/users/my/${userId}`)
    //         .then((response) => {
    //         // setUserInfo(response.data);
    //         })
    //         .catch((error) => {
    //         console.error('회원 정보를 불러오는 중 오류 발생: ', error);
    //         });
    //     }, [userId]);

    const [inputId, setInputId] = useState({}); // 사용자 정보를 저장할 상태

    const {Token} = localStorage.getItem('token');
    const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${Token}`, // 헤더에 토큰을 포함
        },
      });
                 axiosInstance
                 .get('api/v1/users/my')
                 .then((res) => {
                   // 요청 성공 시 처리
                   setInputId({ id: res.data.result.id, // 데이터를 상태에 저장
                 name: res.data.result.name, });
                 })
                 .catch((error) => {
                //    console.error('API 호출 중 오류 발생:', error);
                console.log('API 아오진짜', inputId);
                 });

    return (
        <main className='mypage_main'>
            
            <Header />
            <Routes>
                <Route path="/pwcheck" element={<PwCheck />} />
            </Routes>
            
            <div className='set'>
                <div className='Mains-right'></div>
                    <div className="square1">        
                        <div className='bold1'>
                            <div className='space'>
                                <img className ="mypage_profile" src={user} alt='프로필'></img>
                                    <div className="nickname">
                                        {/* <h4>{users && <textarea value={JSON.stringify(users)} readOnly={true}/>} */}
                                            <p className='userid'>_whoops</p>
                                            {/* </h4> */}
                                        <h4> {inputId.id}
                                            {/* <p className='userid'> {userId.id} </p> */}
                                        </h4>
                                        {/* <h5 className='userint'> {userId.intro} </h5> */}
                                    </div>
                            <Link to="/check">    
                                <button className='btnpro'>프로필 편집</button>
                            </Link>
                            </div>
                        </div>

                        <div className="advice">
                            {/* <div className="inner_content">
                                <div className='comment_box'>
                                    너 전교 몇등이야?
                                    <p className='user_comment'>- 국연수</p>
                                </div>
                                <div className='comment_box'>
                                    다시 찍자고, 다큐멘터리
                                    <p className='user_comment'>- 김지웅</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <main className='square2'>
                        <div className="square3">
                            <div className='main_counter'>
                                <div className='count' onClick={() => setWer(!follower)}>
                                    {follower && (
                                        <Modal closeModal={() => setWer(!follower)}>
                                            <Follower />
                                        </Modal>
                                    )}
                                    <div className='cntnum'><strong>0</strong></div>
                                    <div className='follower_following_comment'>팔로워</div>
                                </div>
                        <div className='count' onClick={() => setWing(!fallowing)}>
                        {fallowing && (
                            <Modal closeModal={() => setWing(!fallowing)}>
                                <Following />
                            </Modal>
                            )}

                            <div className='cntnum'><strong>0</strong></div>
                            <div className='follower_following_comment'>팔로잉</div>
                        </div>

                    <div className='count' onClick={() => setCommen(!comment)}>
                        {comment && (
                            <Modal closeModal={() => setCommen(!comment)}>
                                <CommentDa />
                            </Modal>
                            )}

                            <div className='cntnum'><strong>0</strong></div>
                            <div className='follower_following_comment'>코멘트</div>
                    </div>
                        
                    <div className="text">
                    <div className="mission_bar">
                        <div className='bar_title'>
                            <strong className="locate">운동</strong>
                            <strong className="locate">식습관</strong>
                            <strong className="locate">문화생활</strong>
                            <strong className="locate">취미</strong>
                        </div>
                        <div>
                            <div className="main_bar">
                            <div className="status-hp">
                                    <div className="bar">
                                        <div className="exercise_currentBar" style={{width:'48px'}}></div>    
                                    </div>
                                </div>
                
                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="eat_currentBar" style={{width:'120px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="culture_currentBar" style={{width:'80px'}}></div>    
                                    </div>
                                </div>

                                <div className="status-hp">
                                    <div className="bar">
                                        <div className="hobby_currentBar" style={{width:'180px'}}></div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className='statistics'>
                        
                            <div className="scroll_box">
                                <div className="inner_content">
                                    <div className='comment_box'>
                                    너 전교 몇등이야?
                                    <p className='user_comment'>- 국연수</p>
                                </div>
                                <div className='comment_box'>
                                    다시 찍자고, 다큐멘터리
                                    <p className='user_comment'>- 김지웅</p>
                                </div>
                                <div className='comment_box'>
                                    다시 찍자고, 다큐멘터리
                                    <p className='user_comment'>- 김지웅</p>
                                </div>
                            </div>
                        </div>                          
                    </div>
                         </div>
                            </div>
                        </main>
                    <div className='Mains-left'></div>
                </div>
                {/* </motion.div> */}
            <Footer/>
        </main>
        )
    }
export default Mypage;