import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import HomeVideo from "./HomeVideo";
import JoiningSlide from "./JoinSlide";
import "./css/home.css";
import UspSlide from "./UspSlide";
import { HomeContext } from "../../contexts/homeContext";
import { AuthContext } from "../../contexts/authContext";
import Preloader from "../../Preloader/Preloader";
const Home = () => {
  const { isAdmin } = useContext(AuthContext);
  const { content } = useContext(HomeContext);

  return (
    <div>
      {content.isReady ? (
        <div className="home-content">
          {isAdmin ? (
            <a href="/edit/homepage">
              <Button variant="primary" size="lg" block>
                Edit homepage
              </Button>
            </a>
          ) : null}

          <div className="course-preview ">
            <div className="course-preview-heading">
              Master new faster skills faster than ever
              <div className="course-preview-heading2">
                Choose from many fast-paced short courses
              </div>
            </div>

            <div className="home-video">
              <HomeVideo content={content.content} />
            </div>
            <div>
              <UspSlide content={content.content} />
            </div>
            <div className="join-slide">
              <JoiningSlide content={content.content} />
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default Home;
