import styles from "./ProjectsStyles.module.css";
import gamehub from "../../assets/game-console_2780137.png";
import ProjectCard from "../../common/ProjectCard";
import dsa from "../../assets/hackathon_17336015.png";
import healio from "../../assets/healio.svg";
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gamehub}
          link="https://game-hub-e324.vercel.app/"
          h3="Game Hub"
          p="Video Game Finder"
        />
        <ProjectCard
          src={dsa}
          link="https://dsaproblemtracker.netlify.app/"
          h3="DSA Tracker"
          p="Coding Progress Tracker"
        />
        <ProjectCard
          src={healio}
          link="https://patient-management-healio.vercel.app/"
          h3="Healio"
          p="Patient Management System"
        />
      </div>
    </section>
  );
};

export default Projects;
