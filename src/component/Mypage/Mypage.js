import React from 'react';
import user from '../../img/user.png'
import {Routes, Route, Link} from "react-router-dom";
import Modify from "./Modify"
import "../../css/mypage/Mypage.css"
import Header from "../Header/Header";
import Footer from "../Footer";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Follower from "./Follower";
import Following from './Following';
import CommentDa from "./CommentDa";
// import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Mypage = () => {
    const data = [
        {
            name: '3월',
            uv: 4000,
            pv: 2,
            amt: 2400,
          },
          {
            name: '4월',
            uv: 3000,
            pv: 18,
            amt: 2210,
          },
          {
            name: '5월',
            uv: 2000,
            pv: 28,
            amt: 2290,
          },
          {
            name: '6월',
            uv: 2780,
            pv: 21,
            amt: 2000,
          },
          {
            name: '7월',
            uv: 1890,
            pv: 18,
            amt: 2181,
          },
          {
            name: '8월',
            uv: 2390,
            pv: 3,
            amt: 2500,
          },
          {
            name: '9월',
            uv: 3490,
            pv: 10,
            amt: 2100,
          },
      ];

    // const demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    const [follower, setWer] = useState(false);
    const [fallowing, setWing] = useState(false);
    const [comment, setCommen] = useState(false);

    return (
        
        <main>
            
            <Header />
            <Routes>
                <Route path="/modify" element={<Modify />} />
            </Routes>
            
            <div className='set'>
                <div className='Mains-right'></div>
                    <div className="square1">        
                        <div className='bold1'>
                            <div className='space'>
                                <img className ="mypage_profile" src={user} alt='프로필'></img>
                                    <div className="nickname">
                                        <h4> 최우식
                                            <p className='userid'>_whoops</p>
                                        </h4>
                                        <h5 className='userint'>싫어하는거요? 국연수요.</h5>
                                    </div>
                            <Link to="/modify">    
                                <button className='btnpro'>프로필 편집</button>
                            </Link>
                            </div>
                        </div>

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
                            </div>
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
                            {/* <p className='mission_complete'>완료미션</p>   */}
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{top: 5,right: 30,left: 20,bottom: 5,}}
                                barSize={20}>
                                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} style={{position:'absolute'}}/>
                                        <YAxis />
                                            <Tooltip />
                                                <Legend />
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                                </BarChart>
                            </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </main>
                    <div className='Mains-left'></div>
                </div>
            <Footer/>
        </main>
        )
    }
export default Mypage;