import "./main.css";
import me from "../../assets/me.jpg";
export default function Main() {
  const textStyle = {
    versatile: { color: "#e67e22", fontWeight: "bold" }, // Example color
    experienced: { color: "#e67e22", fontWeight: "bold" }, // Example color
    skills: { color: "#e67e22", fontWeight: "bold" }, // Example color
    aws: { color: "#e67e22", fontWeight: "bold" }, // Example color
  };
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary typewriter">
              Hello, I'm Sai Gowtham Chintala
            </h1>
            <p className="hero-description">
              <span style={textStyle.versatile}>Versatile</span> and
              <span style={textStyle.experienced}> experienced</span> software
              engineer skilled in
              <span style={textStyle.skills}> MERN Stack, Python, and AWS</span>
              . Expertise in developing scalable web applications and
              microservices with MongoDB, Express.js, React.js, and Node.js.
              Strong in backend API design, responsive frontend development, and
              optimizing database performance. Proficient in AWS services like{" "}
              <span style={textStyle.aws}>EC2, S3, Lambda, and RDS</span>.
            </p>
            <a
              href="https://1drv.ms/w/c/ab989f9fd84bed1f/Ebg-B4P91sROphEpa2pcpHEBmOSdHHmsRD3mRivhqkQHQg?e=LCGDzv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--full margin-right-sm"
            >
              View Resume
            </a>
            <a href="/#" className="btn btn--outline">
              Connect With Me
            </a>
          </div>
          <div className="hero-img-box">
            <img
              src={me}
              alt="A boy infront of a computer!"
              className="hero-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
