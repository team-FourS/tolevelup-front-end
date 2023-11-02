import React from 'react';
import user from '../../img/main-exercise.png';
import "../../css/feed/FeedUserCharacter.css";


const FeedUserCharacter = () => {
    
    return (
        <main className="FeedUserCharacter">
            <h3 className='feed-character-title'>__님의 캐릭터</h3>
            <div className="scroll_feed_box">
                  <div className="inner_content">
                        <div className='feed_char_box'>
                          <div className='feed_char_text'>
                            <img className="user_profile_feed_char" src={user} alt="프로필" />
                                <div className='char_name'>
                                    <div className='Feed_char_username'>운동이</div>
                                    <div className='Feed_char_level'>Lv. __</div>
                                    <div className='Feed_char_complete'>완료미션 __개</div>
                                </div>
                          </div>
                        </div>
                        <div className='feed_char_box2'>
                          <div className='feed_char_text'>
                            <img className="user_profile_feed_char" src={user} alt="프로필" />
                                <div className='char_name'>
                                    <div className='Feed_char_username'>먹보</div>
                                    <div className='Feed_char_level'>Lv. __</div>
                                    <div className='Feed_char_complete'>완료미션 __개</div>
                                </div>
                          </div>
                        </div>
                        <div className='feed_char_box3'>
                          <div className='feed_char_text'>
                            <img className="user_profile_feed_char" src={user} alt="프로필" />
                                <div className='char_name'>
                                    <div className='Feed_char_username'>시청자</div>
                                    <div className='Feed_char_level'>Lv. __</div>
                                    <div className='Feed_char_complete'>완료미션 __개</div>
                                </div>
                          </div>
                        </div>
                        <div className='feed_char_box4'>
                          <div className='feed_char_text'>
                            <img className="user_profile_feed_char" src={user} alt="프로필" />
                                <div className='char_name'>
                                    <div className='Feed_char_username'>칼국수</div>
                                    <div className='Feed_char_level'>Lv. __</div>
                                    <div className='Feed_char_complete'>완료미션 __개</div>
                                </div>
                          </div>
                        </div>
                        </div></div>
        </main>
        
    )
}

export default FeedUserCharacter;