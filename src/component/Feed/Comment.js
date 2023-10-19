import React, { useState,useEffect } from 'react';
import "../../css/feed/Comment.css"
import axiosInstance from '../../axiosConfig';
const Comment = () => {

    const [comment, setComment] = useState('');
    const [userId, setUserId] = useState([]);
    // const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    // const [userIds, setUserIds] = useState([]);
  //   const setuserId = useState([]);

  const postComment = () => {
    // 댓글 게시 요청
    axiosInstance.post(`api/v1/feeds/${userId}/comments`, {
        comment: comment
    })
    .then((res) => {
        console.log('댓글 게시 완료:', res.data);
        // 게시된 댓글을 댓글 목록에 추가
        setComments([...comments, { comment: comment, user: '현재 사용자' }]);
        // 댓글 내용 초기화
        setComment('');
    })
    .catch((error) => {
        console.error('댓글 게시 실패:', error);
    });
};

// 컴포넌트가 처음 렌더링될 때와 userId가 변경될 때만 실행
useEffect(() => {
    // 사용자 정보를 가져오는 요청
    axiosInstance.get('api/v1/feeds')
        .then((res) => {
            const userId = res.data.result.map(item => item.userData.userId);
            setUserId(userId);
        })
        .catch((error) => {
            console.log('사용자 정보를 가져오는데 실패했습니다:', error);
        });
}, [userId]);

  
  // useEffect(() => {
  //     const fetchData = async (userId) => {
  //         try {
  //             const res = await axiosInstance.get(`api/v1/feeds/${userId}/comments?page=0&size=5`);
  //             console.log(res.data);
  //             // setFeedData(res.data.result);
  //             const userIds = res.data.result.content.map((item) => item.fromUserData.userId);
  //             console.log(userIds);
  //             // 여기에서 userIds를 사용하여 대상 사용자 ID를 설정할 수 있습니다.
  //             if (userIds) {
  //               setuserId(userIds);
  //           }
  //         } catch (error) {
  //             console.error("API 호출 에러:", error);
  //         }
  //     };

  //     fetchData();
  // });

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };


  // const handlePostComment = async () => {
    
  //   if (!userId) {
  //     console.error('사용자 ID가 없습니다.');
  //     return;
  //   }

  //   const id = userId;
  //   try {
  //     // 댓글을 게시합니다.
  //     const response = await axiosInstance.post(`api/v1/feeds/${id}/comments`, {
  //       comment: comment
  //     });
  //     console.log('게시 완료:', response);
  
  //     // 댓글을 게시한 후, 화면에 추가합니다.
  //     // setComments((prevComments) => [...prevComments, comment]);
  
  //     // 댓글 입력 필드 초기화
  //     setComment('');
  //   } catch (error) {
  //     console.error('게시 실패:', error);
  //   }
  // };

  return(
    <div>
      <div className='all_comment_box'>
        <div className="comment_scroll_box">
            <div className='feed_comment_box'>
            <p className='comment_text'>여기 코멘트 내용 값 불러오기</p>
              <p className='user_feed_comment'>닉네임</p>  
            </div>

            <div className='feed_comment_box'>
            <p className='comment_text'>코멘트 내용 가져오기</p>
              <p className='user_feed_comment'>닉네임</p>  
            </div>

            <div className='feed_comment_box'>
            <p className='comment_text'>여기 코멘트 내용 값 불러오기</p>
              <p className='user_feed_comment'>닉네임</p>  
            </div>

            <div className='feed_comment_box'>
            <p className='comment_text'>여기 코멘트 코멘트 내용 불러오기</p>
              <p className='user_feed_comment'>닉네임</p>  
            </div>
        </div>
        
        <div className="comment_write_box">
          <input type='text'
            className='input_comment_textarea'
            placeholder="코멘트 달기..."
            value={comment}
            onChange={handleCommentChange} />
          <button className='comment_button'
            onClick={postComment}>
            게시
            </button>
        </div>
      </div>
    </div>
  )

}

export default Comment;