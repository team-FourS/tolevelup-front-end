import axiosInstance from "../../axiosConfig";
import React, { useEffect, useState } from 'react';
import "../../css/header/Alarm.css";
import user from '../../img/user.png';

const Alarm = () => {
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    axiosInstance.get('api/v1/users/alarm?page=0&size=5')
      .then((res) => {
        // 받아온 알람 데이터를 state에 설정
        setAlarms(res.data.result.content);
      })
      .catch((error) => {
        console.error('알람 데이터를 불러오는 중 에러 발생:', error);
      });
  }, []);

  // alarmType에 따른 알람 메시지를 반환하는 함수
  const getAlarmMessage = (alarmType, fromUserId) => {
    switch (alarmType) {
      case 'FOLLOW':
        return `${fromUserId}님이 팔로우 중입니다.`;
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
      <div className="alarm_lay">
        <h4 className="alarm_font">알람</h4>
        <hr />
        <table>
          <tbody>
            <div className="Alarm_scrollbox">
              {alarms.map((alarm) => (
                <div key={alarm.alarmId} className="alarmbox">
                  <tr>
                    <td className="td">
                      <div className="table_alarm_lay">
                        <img className="profil2" src={user} alt="프로필" />
                        <h5 className="id_alarm">{getAlarmMessage(alarm.alarmType, alarm.fromUserId)}</h5>
                        {/*<h6 className="id_alarm_time">지금</h6> */}
                      </div>
                    </td>
                  </tr>
                </div>
              ))}
            </div>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Alarm;
