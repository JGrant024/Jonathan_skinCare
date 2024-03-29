import logo from "../assets/Images/Essentiald_logo.avif";
import apply from "../assets/Images/apply.png";

function Home() {
  return (
    <>
      <div
        style={{
          textAlign: "right",
          display: "Flex",
          color: "tan",
        }}
      >
        <h1 style={{ fontFamily: "Oswald" }}>
          Welcome to Essentiald Skincare{" "}
        </h1>
      </div>
      <div>
        <img src={logo} alt="EssentialD Skin Logo" />
        <p
          style={{
            color: "tan",
            fontFamily: "Oswald",
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Try out some of the nourshing Vanilla Butter Cream{" "}
        </p>
        <img src={apply} alt="apply_to_skin" />
      </div>
    </>
  );
}

export default Home;
