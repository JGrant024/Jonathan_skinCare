import About_Essential from "../assets/Images/About_Essential.mp4";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <div className="max-w-2xl text-center">
        <span className="text-lg font-semibold">EST. JUNE 2020</span>
        <p className="mt-4">Welcome to ESSENTIAL'D SKIN!</p>
        <p className="mt-4">
          Essentiald Skincare was established in 2020. Our Mission is to create
          natural skin products that heal and soothe the body. We are a vegan
          and paraben-free company. Shop some of our products! 
        </p>
      </div>
      <div className="video-wrapper mt-8">
        <video width="640" height="360" controls>
          <source src={About_Essential} />
        </video>
      </div>
    </div>
  );
};

export default About;
