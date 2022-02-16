import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL, INSTAGRAM_URL, TWITTER_URL, PROOF_URL } from "../constants/urls";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">

      <a href={PROOF_URL} className="madLogo"><h1>Proof of Love</h1></a>

      <div className="heroNav">
        <a href={DISCORD_INVITE_URL} target="_blank">👾 Discord</a>
        <a href={TWITTER_URL} target="_blank">🐦 Twitter</a>
        <a href={MEMEBRSHIP_PASS_URL} target="_blank">⛵ Opensea</a>
        <a href={INSTAGRAM_URL} target="_blank">📸 Instagram</a>
        <a href={FAQ_URL} target="_blank">🤔 FAQ</a>
      </div>

      <div className="heroContent">
        <p className="youHeard">
          YOU’VE HEARD OF PROOF OF STAKE.<br />
          YOU’VE HEARD OF PROOF OF WORK.<br />
          <br />
          IT’S TIME FOR
        </p>

        <a href={PROOF_URL} className="proofImage"><img src="/proofoflove_logo.png" width="436" height="312" className="proofLogo" /></a>
        <img src="/new-show-dropped.png" width="622" height="622" className="starburst" />

        <p className="worldsFirst">the world’s <em>first interactive</em> <span className="colorPurple">dating show</span>, powered by crypto.</p>

        <a href={PROOF_URL} className="button">wait, what?</a>
      </div>

      <div className="madRows">
        <div className="dark"></div>
        <div className="light"></div>
        <div className="dark"></div>
        <div className="light"></div>
      </div>
    </div>
  );
};

export default Hero;