import { Component } from "react";
import "./App.css";
import Education from "./Education";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerInfo: {
        name: "Thibault Chezaud",
        field: "Computer Science",
        email: "tac47@njit.edu",
        web: "https://thiczd.github.io/portfolio",
        mobile: "0123456789",
      },

      personalProfile: {
        title: "Personal Profile",
        description:
          "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
      },
      workExperience: {
        job1: "Job Title at Company (August 2022 – December 2023)",
        job2: "Job Title at Company (August 2020 – December 2021)",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
      },
      skill: {
        skill: "A Key Skill",
      },
      education: {
        title1: "New Jersey Insitute of Technlogy",
        description1: "BS in Computer Science",
        date1: "2022-2024",
        gpa1: "3.20",
        title2: "Ocean County College",
        description2: "AS in Computer Science",
        date2: "2020-2022",
        gpa2: "3.5",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Header headerInfo={this.state.headerInfo}></Header>

        <div className="portfolio">
          <PersonalProfile
            personalProfile={this.state.personalProfile}
          ></PersonalProfile>
          <WorkExperience
            workExperience={this.state.workExperience}
          ></WorkExperience>
          <Skills skill={this.state.skill}></Skills>
          <Education education={this.state.education}></Education>
        </div>
      </div>
    );
  }
}

export default App;
