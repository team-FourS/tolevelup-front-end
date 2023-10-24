import axiosInstance from "../../axiosConfig";
import React, { useEffect, useState } from 'react';
import "../../css/header/Alarm.css";
import user from '../../img/user.png';
import LoadSpinner from '../Spinner/SpinnerAlarm';

const Alarm = () => {
  const [alarms, setAlarms] = useState([]);
  const [Loading,setLoading] = useState(true);//스피너
  // const setallDeletes = useState('');//알람 전체 삭제

  //알람 부분삭제
  const onClickhandlerdelete = (alarmId) => {
    axiosInstance.delete(`api/v1/users/alarm/${alarmId}`)
      .then((res) => {
        setAlarms(alarms.filter((alarm) => alarm.alarmId !== alarmId));
        // setLoading(false);
      })
      .catch((error) => {
        console.error('알람 부분 데이터를 삭제하는 중 에러 발생:', error);
      });
  };

  //알람 전체 삭제
  const onClickhandleAllrdelete = () => {
    axiosInstance.delete('api/v1/users/alarm')
      .then((res) => {
        // setallDeletes(res.data.result.content);
        setAlarms([]);
        // console.log(res.data.result.content);
        setLoading(false);
      })
      .catch((error) => {
        console.error('알람 전체 데이터를 삭제하는 중 에러 발생:', error);
      });
  };

  useEffect(() => {
    axiosInstance.get('api/v1/users/alarm?page=0&size=20')
      .then((res) => {
        setAlarms(res.data.result.content);
        console.log(res.data.result.content);
        setLoading(false);
      })
      .catch((error) => {
        console.error('알람 데이터를 불러오는 중 에러 발생:', error);
      });

  }, []);

  // alarmType에 따라 메시지를 반환
  const getAlarmMessage = (alarmType, fromUserId) => {
    switch (alarmType) {
      case 'FOLLOW':
        return `${fromUserId}님이 팔로우하기 시작했습니다.`;
      case 'NEW_LIKE':
        return `${fromUserId}님이 좋아요를 눌렀습니다.`;
      case 'NEW_COMMENT':
        return `${fromUserId}님이 코멘트를 달았습니다.`;
      default:
        return '';
    }
  };

  return (
    <main className="layout_alr">
      {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
      <div className="alarm_lay_madal">
        <h4 className="alarm_font_modal">알람</h4>
          <div>
            <h6 className="alarm_alldelete" onClick={()=>onClickhandleAllrdelete()}>전체삭제</h6>
            <hr />
          </div>
        
        <table>
        <tbody>
            <div className="Alarm_scrollbox">
              {alarms.length === 0 ? (
                // 알람 목록이 비어 있는 경우 '받은 알림이 없습니다.' 메시지를 표시
                <div className="no-alarms">받은 알림이 없습니다.</div>
              ) : (
                alarms.map((alarm) => (
                  <div key={alarm.alarmId} className="alarmbox">
                    <tr>
                      <td className="td">
                        <div className="table_alarm_lay">
                          <img className="profil2" src={user} alt="프로필" />
                          <h5 className="id_alarm">{getAlarmMessage(alarm.alarmType, alarm.fromUserId)}</h5>
                          <h6 className="id_alarm_delete" onClick={() => onClickhandlerdelete(alarm.alarmId)}>삭제</h6>
                        </div>
                      </td>
                    </tr>
                  </div>
                ))
              )}
            </div>
          </tbody>
        </table>
      </div>
      )}
    </main>
  );
};

export default Alarm;
