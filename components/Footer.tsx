import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";

const Roadmap = () => {
  return (
    <div className="footer">
      <div class="footerInner">

        <p>KEEP UP WITH</p>
        
        <img src="/mad-logo.png" />

        <p class="mad">
          At Mad Realities, our shows are created, participated, 
          and casted by you. Sign up to get notified about drops, 
          programming, and IRL events in NYC.
        </p>

        <div class="emailForm">
          <input type="text" name="email" />
          sign up
        </div>

        <p class="copyright">Made with ❤ on the internet️. © Mad Realities 2021. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Roadmap;