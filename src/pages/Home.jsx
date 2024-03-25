import logo from "../assets/Images/Essentiald_logo.avif";
import apply from "../assets/Images/apply.png";

function Home() {
  return (
    <>
      <h1> ~ Welcome to Essentiald Skincare ~ </h1>
      <div>
        <img src={logo} alt="EssentialD Skin Logo" />
        <p>Try out some of the nourshing Vanilla Butter Cream </p>
        <img src={apply} alt="" />
      </div>
    </>
  );
}

export default Home;
