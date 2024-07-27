import "./main.css";
import me from "../../assets/me.jpg";
export default function Main() {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">Hello, I'm Sai Gowtham Chintala</h1>
            <p className="hero-description">
              Versatile and experienced software engineer skilled in MERN Stack,
              Python, and AWS. Expertise in developing scalable web applications
              and microservices with MongoDB, Express.js, React.js, and Node.js.
              Strong in backend API design, responsive frontend development, and
              optimizing database performance. Proficient in AWS services like
              EC2, S3, Lambda, and RDS.
            </p>
            <a
              href="https://1drv.ms/w/c/ab989f9fd84bed1f/Ebg-B4P91sROphEpa2pcpHEBmOSdHHmsRD3mRivhqkQHQg?e=LCGDzv"
              className="btn btn--full margin-right-sm"
            >
              View Resume
            </a>
            <a href="#" className="btn btn--outline">
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
