import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";

const About = () => {
  return (
    <div class="about">
      <img src="tvs-left.png" />
      <img src="tvs-right.png" />
      <div class="aboutInner">
        <div class="aboutIntro">
          <div>our shows are</div>
          <div class="colorHotPink">created</div>
          <div class="colorPurple">participated</div>
          <div class="colorGreen">casted</div>
          <div class="colorTeal">owned</div>
          <div>by <span class="colorPurple">you</span>.</div>
        </div>

        <p>Mad Realities is reimagining entertainment for the modern world, powered by crypto.</p>

        <a href="https://google.com" class="button">join our discord</a>
      </div>
    </div>
  );
};

export default About;