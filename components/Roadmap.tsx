import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmapInner">
        <h2>Roadmap</h2>

        <h3>Phase 1</h3>

        <div className="phaseBlock">
          <div className="phaseStep">
            ✅ Mint 170 ETH worth of our <span className="colorHotPink">Genesis Rose NFTs</span> 🌹 on <span className="colorOrange">OpenSea</span> ⛵
          </div>
          
          <div className="phaseStep">
            ✅ Hit <span className="colorGreen">1000+ community members</span> 👥 co-creating ✍️ our first show <span className="colorHotPink">Proof of Love</span> 💞 alongside our core team. 
          </div>
        </div>

        <div className="phaseBlock">
          <div className="phaseStep">
            🆕 <span className="colorHotPink">Valentine’s Day 2022,</span> our <span className="colorYellow">casting contest</span> 🏆 for our first bachelors and bachelorettes will open up. Nominate your friends and vote 🗳️ on auditions as <span className="colorTeal">the first decentralized casting crew</span> 🎬
          </div>
        </div>

        <div className="phaseBlock">
          <div className="phaseStep">
            🆕 Starting in March 2022, <span className="colorOrange">Sunday nights are Mad Realities nights at ✨Bright Moments✨</span> in Soho and in the metaverse. <span className="colorPurple">Watch Proof of Love 💞 8PM ET</span> on Mad Realities or in person if you are a Genesis Membership 🌹 holder. Free to watch on Youtube.
          </div>
        </div>
       
        <div className="phaseBlock">
          <div className="phaseStep">
            🆕 At the end of the 6 week Season 0, there will be a <span className="colorGreen">Snapshot vote</span> for whether or not <span className="colorHotPink">Proof of Love</span> 💞 should continue or if there should be a <span className="colorTeal">call for proposals</span> for new show formats. 
          </div>
        </div>

        <h3>Phase 2</h3>
        
        <div className="phaseBlock">
          <div className="phaseStep">
            🌀 <span className="colorOrange">Season 1</span> will kick off in Fall 🍂 2022. A <span className="colorYellow">small cohort of creatives</span> ‍🎨 will be picked to be incubated and brought into <span className="colorPink">the Mad Realities Universe</span> 🌍.
          </div>
        </div>

        <div className="phaseBlock">
          <div className="phaseStep">
            🌀 <span className="colorGreen">Mad Realities owns “Reality TV”</span> 📺 as a category, recreating hit unscripted formats in this web3 paradigm and building out consistent bangers with <span className="colorHotPink">the power of thousands of minds</span> in our community co-creating ✍
          </div>
        </div>

        <h3>Phase 3</h3>
        <div className="phaseBlock">
          <div className="phaseStep">
            ⛓️ We build out an underlying <span className="colorPurple">protocol</span> + our own distribution 🚚 platform sitting on top of it, so that <span className="colorTeal">anyone can make shows</span> 🎥, each with their own economy and community
          </div>
        </div>

        <div className="phaseBlock">
          <div className="phaseStep">
            ⛓️ Mad Realities becomes <span className="colorOrange">the world’s first 🥇decentralized media platform</span> focused on shared experiences, co-creation, and ownership at the community layer. Every show is <span className="colorHotPink">a social network and content channel in one</span> ♻️
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;