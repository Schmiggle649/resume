import "./App.css";
import Section from "./Section";

function App() {
  return (
    <div className="App">
      <h1>Andrew He Huang</h1>
      <h2>Web Developer Resume</h2>
      <p>(630) 853-9675 | andrewhuang2002@gmail.com</p>
      <div class="container">
        <Section
          header="Languages"
          text={[
            "HTML",
            "CSS",
            "JavaScript",
            "SQL",
            "Python",
            "C++",
            "C#",
            "Java",
          ]}
        />
        <Section
          header="Frameworks"
          text={["React", "Node.js", "Express", "jQuery", "Bootstrap"]}
        />
        <Section
          header="Web Development Projects"
          text={["Resume (you are here!)"]}
          links={[{
            project: "Dexmaster",
            url: "https://github.com/Schmiggle649/Dexmaster"
          }]}
        />
        <Section
          header="Work Experience"
          subheader="Tutor / Teaching Assistant"
          text={[
            "University of Utah",
            "August 2023 - May 2024",
            "Tutored students taking deductive logic courses and helped them succeed in their classes",
            "Wrote and graded tests",
          ]}
        />
        <Section
          header="Education"
          subheader="University of Utah"
          text={[
            "Honors Bachelor of Science in Games",
            "Minor in Computer Science",
            "August 2020 - May 2024",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
