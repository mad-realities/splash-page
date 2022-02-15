import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">

      <h1>Proof of Love</h1>

      <div className="heroNav">
        <a href="#">👾 Discord</a> &nbsp;&nbsp;&nbsp;
        <a href="#">🐦 Twitter</a> &nbsp;&nbsp;&nbsp;
        <a href="#">⛵ Opensea</a> &nbsp;&nbsp;&nbsp;
        <a href="#">📸 Instagram</a>
      </div>

      <div className="heroContent">
        <p className="youHeard">
          YOU’VE HEARD OF PROOF OF STAKE.<br />
          YOU’VE HEARD OF PROOF OF WORK.<br />
          <br />
          IT’S TIME FOR
        </p>

        <img src="/proofoflove_logo.png" width="436" height="312" className="proofLogo" />
        <img src="/new-show-dropped.png" width="622" height="622" className="starburst" />

        <p className="worldsFirst">the world’s <em>first interactive</em> <span className="colorPurple">dating show</span>, powered by crypto.</p>

        <a href="https://google.com" className="button">wait, what?</a>
      </div>
    </div>
  );
};

export default Hero;