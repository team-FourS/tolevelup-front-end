import React, {useEffect, useState} from 'react';
import axiosInstance from '../../axiosConfig';
import LoadSpinnerfeed from '../Spinner/SpinnerFeedcharComponent';
import "../../css/feed/FeedUserCharacter.css";


const FeedUserCharacter = (props) => {
    
  const feeduserId = props.feedId;
  const [Loadingf, setLoadingf] = useState(true);
  //운동
  const [feedcharactername, setfeedcharactername] = useState("");
  const [feedcharacterlevel, setfeedcharacterlevel] = useState("");
  const [feedcharacterimg, setfeedcharacterimg] = useState("");

  //식습관
  const [feedcharactername2, setfeedcharactername2] = useState("");
  const [feedcharacterlevel2, setfeedcharacterlevel2] = useState("");
  const [feedcharacterimg2, setfeedcharacterimg2] = useState("");

  //문화
  const [feedcharactername3, setfeedcharactername3] = useState("");
  const [feedcharacterlevel3, setfeedcharacterlevel3] = useState("");
  const [feedcharacterimg3, setfeedcharacterimg3] = useState("");

  //취미
  const [feedcharactername4, setfeedcharactername4] = useState("");
  const [feedcharacterlevel4, setfeedcharacterlevel4] = useState("");
  const [feedcharacterimg4, setfeedcharacterimg4] = useState("");

  useEffect(() => {

        axiosInstance
        .get(`otherCharacter/${feeduserId}`)
        .then((res) => {
          //운동
          setfeedcharactername(res.data[2].userCharacter.character_name);
          setfeedcharacterlevel(res.data[2].level);

          const imageUrl = res.data[2].userCharacter.character.img;
          const finalImageUrl = imageUrl.endsWith(".png") ? imageUrl : imageUrl + ".png";
          axiosInstance
          .get(`image?imageName=${finalImageUrl}`, { responseType: 'arraybuffer' })
          .then((imageRes) => {
            const blob = new Blob([imageRes.data], { type: 'image/png' });
            const reader = new FileReader();
            reader.onload = () => {
              setfeedcharacterimg(reader.result);
              setLoadingf(false);
            };
            reader.readAsDataURL(blob);

          })
          .catch((error) => {
          });

          //식습관
          setfeedcharactername2(res.data[1].userCharacter.character_name);
          setfeedcharacterlevel2(res.data[1].level);

          const imageUrl2 = res.data[1].userCharacter.character.img;
          const finalImageUrl2 = imageUrl2.endsWith(".png") ? imageUrl2 : imageUrl2 + ".png";
          axiosInstance
          .get(`image?imageName=${finalImageUrl2}`, { responseType: 'arraybuffer' })
          .then((imageRes) => {
            const blob = new Blob([imageRes.data], { type: 'image/png' });
            const reader = new FileReader();
            reader.onload = () => {
              setfeedcharacterimg2(reader.result);
              setLoadingf(false);
            };
            reader.readAsDataURL(blob);
          })
          .catch((error) => {
          });

          //문화
          setfeedcharactername3(res.data[0].userCharacter.character_name);
          setfeedcharacterlevel3(res.data[0].level);

          const imageUrl3 = res.data[0].userCharacter.character.img;
          const finalImageUrl3 = imageUrl3.endsWith(".png") ? imageUrl3 : imageUrl3 + ".png";
          axiosInstance
          .get(`image?imageName=${finalImageUrl3}`, { responseType: 'arraybuffer' })
          .then((imageRes) => {
            const blob = new Blob([imageRes.data], { type: 'image/png' });
            const reader = new FileReader();
            reader.onload = () => {
              setfeedcharacterimg3(reader.result);
              setLoadingf(false);
            };
            reader.readAsDataURL(blob);
          })
          .catch((error) => {
          });

          //취미
          setfeedcharactername4(res.data[3].userCharacter.character_name);
          setfeedcharacterlevel4(res.data[3].level);

          const imageUrl4 = res.data[3].userCharacter.character.img;
          const finalImageUrl4 = imageUrl4.endsWith(".png") ? imageUrl4 : imageUrl4 + ".png";
          axiosInstance
          .get(`image?imageName=${finalImageUrl4}`, { responseType: 'arraybuffer' })
          .then((imageRes) => {
            const blob = new Blob([imageRes.data], { type: 'image/png' });
            const reader = new FileReader();
            reader.onload = () => {
              setfeedcharacterimg4(reader.result);
              setLoadingf(false);
            };
            reader.readAsDataURL(blob);
          })
          .catch((error) => {
          });
        })
        .catch((error) => {
        });
  });

    return (
        <main className="FeedUserCharacter">
            <h3 className='feed-character-title'>{feeduserId}님의 캐릭터</h3>
            <div className="scroll_feed_box">
                  <div className="inner_content">
                        <div className='feed_char_box'>
                        {Loadingf ? (
                          <LoadSpinnerfeed />
                          ) : (
                          <div className='feed_char_text'>
                            <img className="user_profile_feed_char" src={feedcharacterimg} alt="프로필" />
                                <div className='char_name'>
                                    <div className='Feed_char_username'>{feedcharactername}</div>
                                    <div className='Feed_char_level'>Lv. {feedcharacterlevel}</div>
                                    <div className='Feed_char_complete'>완료미션 __개</div>
                                </div>
                          </div>)}
                        </div>
                        <div className='feed_char_box2'>
                        {Loadingf ? (
                          <LoadSpinnerfeed />
                          ) : (
                          <div className='feed_char_text'>
                            <img className="user_profile_feed_char" src={feedcharacterimg2} alt="프로필" />
                                <div className='char_name'>
                                    <div className='Feed_char_username'>{feedcharactername2}</div>
                                    <div className='Feed_char_level'>Lv. {feedcharacterlevel2}</div>
                                    <div className='Feed_char_complete'>완료미션 __개</div>
                                </div>
                          </div>)}
                        </div>
                        <div className='feed_char_box3'>
                        {Loadingf ? (
                          <LoadSpinnerfeed />
                          ) : (
                          <div className='feed_char_text'>
                            <img className="user_profile_feed_char" src={feedcharacterimg3} alt="프로필" />
                                <div className='char_name'>
                                    <div className='Feed_char_username'>{feedcharactername3}</div>
                                    <div className='Feed_char_level'>Lv. {feedcharacterlevel3}</div>
                                    <div className='Feed_char_complete'>완료미션 __개</div>
                                </div>
                          </div>)}
                        </div>
                        <div className='feed_char_box4'>
                        {Loadingf ? (
                        <LoadSpinnerfeed />
                        ) : (
                          <div className='feed_char_text'>
                            <img className="user_profile_feed_char" src={feedcharacterimg4} alt="프로필" />
                                <div className='char_name'>
                                    <div className='Feed_char_username'>{feedcharactername4}</div>
                                    <div className='Feed_char_level'>Lv. {feedcharacterlevel4}</div>
                                    <div className='Feed_char_complete'>완료미션 __개</div>
                                </div>
                          </div>)}
                        </div>
                      </div>
                    </div>
        </main>
        
    )
}

export default FeedUserCharacter;