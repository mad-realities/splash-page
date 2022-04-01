import { FAQ_URL, DISCORD_INVITE_URL, YOUTUBE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL, INSTAGRAM_URL, TWITTER_URL, PROOF_URL } from "../constants/urls";
import Image from "next/image";

const Hero = () => {

  let bannerScrollInterview = 0;

  var scrollBanners = function() {
    let offset = (document.documentElement.scrollTop / 8) + "px"

    let row1 = document.querySelector<HTMLElement>('.madRows div:nth-child(1)')!
    let row2 = document.querySelector<HTMLElement>('.madRows div:nth-child(2)')!
    let row3 = document.querySelector<HTMLElement>('.madRows div:nth-child(3)')!
    let row4 = document.querySelector<HTMLElement>('.madRows div:nth-child(4)')!

    row1.style.backgroundPosition = "-" + offset;
    row2.style.backgroundPosition = offset;
    row3.style.backgroundPosition = "-" + offset;
    row4.style.backgroundPosition = offset;    
  }

  if(typeof window !== "undefined") {
    window.addEventListener("scroll", function(){
      bannerScrollInterview = window.setInterval(scrollBanners, 100);
    })

    window.addEventListener("scrollstop", function(){
      window.clearInterval(bannerScrollInterview);
    })
  }

  return (
    <div className="hero">

      <a href={PROOF_URL} className="madLogo" target="_blank"><h1>Proof of Love</h1></a>

      <div className="heroNav">
        <a href={YOUTUBE_URL} target="_blank">📺 YouTube</a>
        <a href={DISCORD_INVITE_URL} target="_blank">👾 Discord</a>
        <a href={TWITTER_URL} target="_blank">🐦 Twitter</a>
        <a href={MEMEBRSHIP_PASS_URL} target="_blank">⛵ Opensea</a>
        <a href={INSTAGRAM_URL} target="_blank">📸 Instagram</a>
      </div>

      <div className="heroContent">
        <p className="youHeard">
          YOU’VE HEARD OF PROOF OF STAKE.<br />
          YOU’VE HEARD OF PROOF OF WORK.<br />
          <br />
          IT’S TIME FOR
        </p>

        <a href={PROOF_URL} className="proofImage" target="_blank"><img src="/proofoflove_logo.png" width="436" height="312" className="proofLogo" /></a>
        <a href={PROOF_URL}>
          <img src="/new-show-dropped.png" width="622" height="622" className="starburst" />
        </a>

        <p className="worldsFirst">the world’s <em>first interactive</em> <span className="colorPurple">dating show</span> where the community decides what happens (and who happens).</p>

        <div className="heroButtons">
          <a href={YOUTUBE_URL} className="watchNow button" target="_blank">watch now</a>
          <a href={PROOF_URL} className="button" target="_blank">go to casting race</a>
        </div>
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