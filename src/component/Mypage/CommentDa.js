import React from "react";
import "../../css/mypage/CommentDa.css"

const CommentDa = () => {
    return (
      <main className="layout_alr" onClick={(e) => e.stopPropagation()}>
        <div className="alarm_lay">
          <h4 className="alarm_font">코멘트</h4>
            <hr />
            <div className="scroll_box_comment">
              <div className="inner_content_comment">
              <table>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr className="comment_data">
                      {/* 테이블1 */}
                        <td>
                          <td className="td_comment">
                            <div className="table_lay">
                              <div className='comment_box_click'>
                                너 전교 몇등이야?
                                <p className='user_comment'>- 국연수</p>
                              </div>
                            </div>
                          </td>

                          <td className="td_comment">
                            <div className="table_lay">
                              <div className='comment_box_click'>
                                바보네 바보
                                <p className='user_comment'>- 국연수</p>
                              </div>
                            </div>
                          </td>

                          <td className="td_comment">
                            <div className="table_lay">
                              <div className='comment_box_click'>
                                떡볶이 먹으러 가자
                                <p className='user_comment'>- 김지웅</p>
                              </div>
                            </div>
                          </td>
                          <td className="td_comment">
                            <div className="table_lay">
                              <div className='comment_box_click'>
                                떡볶이 먹으러 가자
                                <p className='user_comment'>- 김지웅</p>
                              </div>
                            </div>
                          </td>
                          <td className="td_comment">
                            <div className="table_lay">
                              <div className='comment_box_click'>
                                떡볶이 먹으러 가자
                                <p className='user_comment'>- 김지웅</p>
                              </div>
                            </div>
                          </td>
                          <td className="td_comment">
                            <div className="table_lay">
                              <div className='comment_box_click'>
                                떡볶이 먹으러 가자
                                <p className='user_comment'>- 김지웅</p>
                              </div>
                            </div>
                          </td>
                        </td>

                      {/* 테이블2 */}
                      <td>
                      <td className="td_comment">
                        <div className="table_lay">
                          <div className='comment_box_click'>
                            너 전교 몇등이야?
                            <p className='user_comment'>- 국연수</p>
                          </div>
                        </div>
                      </td>
                      <td className="td_comment">
                        <div className="table_lay">
                          <div className='comment_box_click'>
                            다시 찍자고, 다큐멘터리
                            <p className='user_comment'>- 김지웅</p>
                          </div>
                        </div>
                      </td>
                      <td className="td_comment">
                        <div className="table_lay">
                          <div className='comment_box_click'>
                            가을이 온다
                            <p className='user_comment'>- 아마도</p>
                          </div>
                        </div>
                      </td>
                      <td className="td_comment">
                        <div className="table_lay">
                          <div className='comment_box_click'>
                            가을이 온다
                            <p className='user_comment'>- 아마도</p>
                          </div>
                        </div>
                      </td>
                      <td className="td_comment">
                        <div className="table_lay">
                          <div className='comment_box_click'>
                            가을이 온다
                            <p className='user_comment'>- 아마도</p>
                          </div>
                        </div>
                      </td>
                      <td className="td_comment">
                        <div className="table_lay">
                          <div className='comment_box_click'>
                            가을이 온다
                            <p className='user_comment'>- 아마도</p>
                          </div>
                        </div>
                      </td>
                      </td>
                      </tr>
              </table>
              </div>
            </div>
        </div>
    </main>  
    );
  }

  export default CommentDa;