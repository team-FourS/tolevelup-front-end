import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig';
import '../../css/record/GetComment.css'; 
import LoadSpinner from '../Spinner/SpinnerRecord';

const GetComment = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  
  // 스피너
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`api/v1/users/comments/receive?page=${currentPage}&size=3`);
        const data = response.data.result;

        setComments(
          data.content.map((comment) => ({
            commentId: comment.commentId,
            commentText: comment.comment,
            userInfo: {
              level: comment.fromUserData.level,
              name: comment.fromUserData.name,
            },
            registeredAt: formatDate(comment.registeredAt),
          }))
        );
        setTotalPages(data.totalPages);
        // 스피너
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  // 등록일 변경 함수
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Date(dateString)
      .toLocaleDateString('ko-KR', options)
      .replace(/\//g, '.')  // .로 변경
      .replace(/\. /g, '.') 
      .replace(',', '');    
    return formattedDate;
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {loading ? (
        <LoadSpinner />
      ) : (
        <div className="get-container">
          {comments.length === 0 ? (
            <div className="noComments">받은 코멘트가 없습니다.</div>
          ) : (
            <>
              {comments.map((comment, index) => (
                <div key={index} className="get-comment-container">
                  <div className="get-comment-box">
                    <p className="get-comment">{comment.commentText}</p>
                    <p className="get-user-info">{`Lv.${comment.userInfo.level} ${comment.userInfo.name}`}</p>
                  </div>
                  <p className="get-registered-at">{`등록일: ${comment.registeredAt}`}</p>
                </div>
              ))}
              {/* 페이지 네비게이션 */}
              <div className="pagination">
                <button
                  className={`page-button ${currentPage === 0 ? 'disabled' : ''}`}
                  disabled={currentPage === 0}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  {'<'}
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`page-button ${index === currentPage ? 'current' : ''}`}
                    onClick={() => handlePageChange(index)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className={`page-button ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                  disabled={currentPage === totalPages - 1}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  {'>'}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GetComment;
