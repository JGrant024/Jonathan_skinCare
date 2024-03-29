import logo from "../assets/Images/Essentiald_logo.avif";
import apply from "../assets/Images/apply.png";
import Survey from "../assets/Images/Survey.png";
import Whipped_butter from "../assets/Images/Whipped_butter.png";
import Skin_Investment from "../assets/Images/Skin_Investment.png";
import Boxed_oil from "../assets/Images/Boxed_oil.png";

function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <div className="text-center p-6 bg-amber-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to Essential'd Skincare</h1>
      </div>
      <div className="text-center py-10">
        <img src={logo} alt="EssentialD Skin Logo" className="mx-auto" />
        <p className="text-tan font-oswald text-2xl my-4">
          Try out some of the nourishing Vanilla Butter Cream
        </p>
        <img src={apply} alt="apply_to_skin" className="mx-auto" />
      </div>
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Whipped Butter</h1>
        <img src={Whipped_butter} alt="body_butter" className="mx-auto" />
      </div>
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Love the Skin you're in!</h1>
        <img
          src={Skin_Investment}
          alt="Investment in skin"
          className="mx-auto"
        />
      </div>
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Have You Placed an Order?</h1>
        <img src={Boxed_oil} alt="oil_package" className="mx-auto" />
      </div>
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Surveys are In!</h1>
        <img src={Survey} alt="body_butter" className="mx-auto" />
      </div>
    </div>
  );
}

export default Home;
