import styles from './About.module.scss'

export default function About() {
  return (
    <div className={styles.About}>
      <img alt="Hailey Sellars" className={styles.photo} />
      <div className={styles.aboutInfo}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Skills</h3>
        <div>
          <i class="devicon-javascript-plain"></i>
        </div>
        <div>
          <i class="devicon-express-original"></i>
        </div>
        <div>
          <i class="devicon-nodejs-plain"></i>
        </div>
        <div>
          <i class="devicon-mongodb-plain"></i>
        </div>
        <div>
          <i class="devicon-react-original"></i>
        </div>
        <div>
          <i class="devicon-nextjs-original"></i>
        </div>
        <div>
          <i class="devicon-html5-plain"></i>
        </div>
        <div>
          <i class="devicon-css3-plain"></i>
        </div>
        <div>
          <i class="devicon-sass-original"></i>
        </div>
        <div>
          <i class="devicon-vscode-plain"></i>
        </div>
        <div>
          <i class="devicon-git-plain"></i>
        </div>
        <div>
          <i class="devicon-figma-plain"></i>
        </div>
        <div>
          <i class="devicon-photoshop-plain"></i>
        </div>
        <div>
          <i class="devicon-illustrator-plain"></i>
        </div>
        <div>
          <i class="devicon-jest-plain"></i>
        </div>
        <button>Download Resume</button>
      </div>
    </div>
  )
}
