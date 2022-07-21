import React from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { GrApps } from "react-icons/gr"

const Home = (props) => {
  const [state, setState] = React.useState("");
  const searchGoogle = (e) => {
    props.history.push({ pathname: "/search", state });
  };
  
  return (
    <>
      <div className="nav">
        <a href="https://mail.google.com/mail/u/0/"> <li>Gmail</li></a>
        <a href="https://www.google.co.in/imghp?hl=en&authuser=0&ogbl"><li>Images</li></a>
        <a href="https://www.google.co.in/intl/en/about/products"><li><GrApps className="1" /></li></a>
        <a href="https://munna-portfolio.ml/"><li><img src="/images/user.jpg" alt="" /></li></a>
      </div>
      <div className="home">
        <div className="home__container">
          <div className="home__logo">
            <img src="/images/googleLogo.png" alt="Logo" />
          </div>
          <form className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home__input"
              onChange={(e) => setState(e.target.value)}
              value={state}
              required
            />
            <div className="home__group">
              <input type="submit" className="home__btn" value="Google Search" />
              <a className="home__btn" href="https://www.google.com/doodles">I'm Feeling Lucky</a>
            </div>
            <FaSistrix className="search__icon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>
      <div className="goffer">
        <h4>Google offered in:
          <a href="https://www.google.com/setprefs?sig=0_GbNqUZw2AHoldmFbL5Zd4ihyUKM%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjLhOeVyvr4AhV2RmwGHf4QA0kQ2ZgBCBA">  हिन्दी</a>
          <a href="https://www.google.com/setprefs?sig=0_GbNqUZw2AHoldmFbL5Zd4ihyUKM%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjLhOeVyvr4AhV2RmwGHf4QA0kQ2ZgBCBE"> বাংলা</a>
          <a href="https://www.google.com/setprefs?sig=0_GbNqUZw2AHoldmFbL5Zd4ihyUKM%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjLhOeVyvr4AhV2RmwGHf4QA0kQ2ZgBCBI"> తెలుగు</a>
          <a href="https://www.google.com/setprefs?sig=0_GbNqUZw2AHoldmFbL5Zd4ihyUKM%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjLhOeVyvr4AhV2RmwGHf4QA0kQ2ZgBCBM"> मराठी </a>
          <a href="https://munna-portfolio.ml/">  தமிழ்
            ગુજરાતી
            ಕನ್ನಡ
            മലയാളം
            ਪੰਜਾਬੀ</a>
        </h4>
      </div>
      <div className="india">
        <h4>India</h4>
      </div>
      <div className="links" >
        <ul>
          <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1"><li>About</li></a>
          <a href="https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"><li>Advertising</li></a>
          <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"><li>Business</li></a>
          <a href="https://google.com/search/howsearchworks/?fg=1"><li>How Search works</li></a>
          <a href="https://policies.google.com/privacy?hl=en-IN&fg=1"><li>Privacy</li></a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1"><li>Terms</li></a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1"><li>Settings</li></a>
        </ul>
      </div>
    </>
  );
};

export default Home;