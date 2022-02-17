import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";

const About = () => {
  return (
    <div className="about">
      <img src="tvs-left.png" />
      <img src="tvs-right.png" />
      <div className="aboutInner">
        <div className="aboutIntro">
          <div>our shows are</div>
          <div className="colorHotPink">created</div>
          <div className="colorPurple">participated</div>
          <div className="colorGreen">casted</div>
          <div className="colorTeal">decided</div>
          <div>by <span className="colorPurple">you</span>.</div>
        </div>

        <p>Mad Realities is reimagining entertainment for the modern world, powered by crypto.</p>

        <a href={DISCORD_INVITE_URL} className="button">join our discord</a>
      </div>
    </div>
  );
};

export default About;