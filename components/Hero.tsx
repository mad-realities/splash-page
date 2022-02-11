import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div class="heroContent">
        <p class="youHeard">
          YOU’VE HEARD OF PROOF OF STAKE.<br />
          YOU’VE HEARD OF PROOF OF WORK.<br />
          <br />
          IT’S TIME FOR
        </p>

        <img src="/proofoflove_logo.png" width="436" height="312" />
        <img src="/new-show-dropped.png" width="622" height="622" class="starburst" />

        <p class="worldsFirst">the world’s <em>first interactive</em> <span class="colorPurple">dating show</span>, powered by crypto.</p>

        <a href="https://google.com" class="button">wait, what?</a>
      </div>
    </div>
  );
};

export default Hero;