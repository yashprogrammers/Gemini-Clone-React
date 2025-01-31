import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setRecentPrompt,
  } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Yash</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  loadPrompt("Suggest a Python library to solve a problem")
                }
              >
                <p>Suggest a Python library to solve a problem</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  loadPrompt("Give me tips to help care for a tricky plant")
                }
              >
                <p>Give me tips to help care for a tricky plant</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  loadPrompt("How to cover engineerig syllabus in one night ? ")
                }
              >
                <p>How to cover engineerig syllabus in one night ?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  loadPrompt(
                    "Write a Html, Css, Js code to Create Blog website"
                  )
                }
              >
                <p>Write a Html, Css, Js code to Create Blog website</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter the prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <div className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem fugiat sequi, consequuntur eaque necessitatibus sunt
            dolorem magni expedita. Magni, omnis?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
