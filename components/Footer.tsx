import { FAQ_URL, DISCORD_INVITE_URL, INSTAGRAM_URL, TWITTER_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";

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
          <div id="community-embed"></div>
          <script async data-community-embed-id="72c91a4a-602c-4428-ae32-7090799b5bb1" src="https://mgu-embed.community.com/embed.js"></script>
        </div>

        <p className="iconLinks">
          <a href={INSTAGRAM_URL} target="_blank"><img src="/icon-insta.svg" /></a>
          <a href={TWITTER_URL} target="_blank"><img src="/icon-twitter.svg" /></a>
          <a href={DISCORD_INVITE_URL} target="_blank"><img src="/icon-discord.svg" /></a>
          <a href={MEMEBRSHIP_PASS_URL} target="_blank"><img src="/icon-opensea.svg" /></a>
        </p>

        <p className="copyright">Made with ❤ on the internet️. © Mad Realities 2021. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Roadmap;