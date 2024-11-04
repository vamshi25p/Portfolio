import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/hero-1.png";
import heroDark from "../../assets/heroDark.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import LinkedInLight from "../../assets/linkedin-light.svg";
import LinkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const heroIcon = theme === "light" ? heroImage : heroDark;
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? LinkedInLight : LinkedInDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroIcon}
          alt="Profile picture of Vamshi Krishna"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vamshi
          <br />
          Krishna
          <br />
          Pandugula
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://x.com/Vamshi456789" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/vamshi25p" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/pandugula-vamshi-krishna-25p"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Engineer. <br /> Innovator. <br /> Problem Solver.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
