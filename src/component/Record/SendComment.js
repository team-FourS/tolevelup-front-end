import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig';
import '../../css/record/GetComment.css';
import LoadSpinner from '../Spinner/SpinnerRecord';

const SendComment = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`api/v1/users/comments/send?page=${currentPage}&size=3`);
        const data = response.data.result;

        setComments(
          data.content.map((comment) => ({
            commentId: comment.commentId,
            commentText: comment.comment,
            userInfo: {
              level: comment.toUserData.level,
              name: comment.toUserData.name,
            },
            registeredAt: formatDate(comment.registeredAt),
          }))
        );
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Date(dateString)
      .toLocaleDateString('ko-KR', options)
      .replace(/\//g, '.')
      .replace(/\. /g, '.')
      .replace(',', '');
    return formattedDate;
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await axiosInstance.delete(`api/v1/feeds/comments/${commentId}`);
      const resultCode = response.data.resultCode;

      if (resultCode === 'SUCCESS') {
        const updatedComments = comments.filter((comment) => comment.commentId !== commentId);
        setComments(updatedComments);
      } else {
        console.error('코멘트 삭제 실패');
      }
    } catch (error) {
      console.error('코멘트 삭제 실패:', error);
    }
  };

  return (
    <div>
      {Loading ? (
        <LoadSpinner />
      ) : (
        <div className="get-container">
          {comments.length === 0 ? (
            <div className="noComments">보낸 코멘트가 없습니다.</div>
          ) : (
            <>
              {comments.map((comment, index) => (
                <div key={index} className="get-comment-container">
                  <div className="get-comment-box">
                    <p className="get-comment">{comment.commentText}</p>
                    <p className="get-user-info">{`send to Lv.${comment.userInfo.level} ${comment.userInfo.name}`}</p>

                    <button
                      className="delete-comment-button"
                      onClick={() => handleDeleteComment(comment.commentId)}
                    >
                      X
                    </button>
                  </div>
                  <p className="get-registered-at">{`등록일: ${comment.registeredAt}`}</p>
                </div>
              ))}

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

export default SendComment;
