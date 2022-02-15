import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";

const Roadmap = () => {
  return (
    <div className="footer">
      <div className="footerInner">

        <p>KEEP UP WITH</p>
        
        <img src="/mad-logo.png" />

        <p className="mad">
          At Mad Realities, our shows are created, participated, 
          and casted by you. Sign up to get notified about drops, 
          programming, and IRL events in NYC.
        </p>

        <div className="emailForm">
          <input type="text" name="email" />
          sign up
        </div>

        <p className="iconLinks">
          <a href="#"><img src="/icon-insta.svg" /></a>
          <a href="#"><img src="/icon-twitter.svg" /></a>
          <a href="#"><img src="/icon-discord.svg" /></a>
          <a href="#"><img src="/icon-opensea.svg" /></a>
        </p>

        <p className="copyright">Made with ❤ on the internet️. © Mad Realities 2021. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Roadmap;