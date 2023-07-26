import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import "../css/CommentDa.css"

const CommentDa = () => {
    return (
      <main className="layout_alr">

        {/* <Header/> */}

        <div className="alarm_lay">
          <h4 className="alarm_font">코멘트</h4>
          <hr />

          <table>
            <thead>
                {/* <tr>
                  <th>이미지</th>
                  <th>아이디</th>
                </tr> */}
            </thead>
            <tbody>
              <tr>
                <td className="td">
                  <div className="table_lay">
                    {/* <div className="inner_content"> */}
                        <div className='comment_box'>
                            너 전교 몇등이야?
                            <p className='user_comment'>- 국연수</p>
                        </div>
                    </div>
                  {/* </div> */}

                  <div className="table_lay">
                    {/* <div className="inner_content"> */}
                        <div className='comment_box'>
                            다시 찍자고, 다큐멘터리
                            <p className='user_comment'>- 김지웅</p>
                        </div>
                    </div>
                  {/* </div> */}
                </td>
            </tr>
            </tbody>
          </table>
        </div>

        {/* <Footer/> */}
      </main>  
    );
  }

  export default CommentDa;