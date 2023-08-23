import React from "react";
import "../../css/mypage/CommentDa.css"

const CommentDa = () => {
    return (
      <main className="layout_alr" onClick={(e) => e.stopPropagation()}>
        <div className="alarm_lay">
          <h4 className="alarm_font">코멘트</h4>
            <hr />
              <table>
                <thead>
                  <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr className="comment_data">
                      <td className="td">
                        <div className="table_lay">
                          <div className='comment_box'>
                            너 전교 몇등이야?
                            <p className='user_comment'>- 국연수</p>
                          </div>
                        </div>
                        </td>

                        <td className="td">
                        <div className="table_lay">
                          <div className='comment_box'>
                            다시 찍자고, 다큐멘터리
                            <p className='user_comment'>- 김지웅</p>
                          </div>
                        </div>
                      </td>
                        <td className="td">
                        <div className="table_lay">
                          <div className='comment_box'>
                            다시 찍자고, 다큐멘터리
                            <p className='user_comment'>- 김지웅</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  {/* </tbody> */}

                  {/* <tbody> */}
                  <tr>
                  <td className="td">
                        <div className="table_lay">
                          <div className='comment_box'>
                            다시 찍자고, 다큐멘터리
                            <p className='user_comment'>- 김지웅</p>
                          </div>
                        </div>
                        </td>
                        {/* </tr> */}
                    {/* </tbody> */}
                    {/* <tbody> */}
                    {/* <tr> */}
                    <td className="td">
                        <div className="table_lay">
                          <div className='comment_box'>
                            같이 먹자고, 떡볶이
                            <p className='user_comment'>- 박세연</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
              </table>
        </div>
    </main>  
    );
  }

  export default CommentDa;