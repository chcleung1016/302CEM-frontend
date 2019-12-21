import React from "react";
import Section from "../Components/Section";
import Herotitle from "../Components/Herotitle";
import Breadcrumb from "../Components/Breadcrumb";
export default () => {
  return (
    <div>
      <Herotitle title="302CEM Project" subtitle="Home"></Herotitle>
      <div
        className="container"
        style={{ backgroundColor: "white", marginTop: 20 }}
      >
        <div className="box">
          <Section
            title="Project"
            subtitle="This project gives all users access to our public database which, using advanced technology, is able to provide you with global analytics for any content creator, live streamer, or brand. Whether you are looking up popular YouTube creators, or Twitch streamers playing a specific game, 302CEM project has you covered! We are always looking to expand our features to give our users the best experience possible."
          ></Section>
          <Section
            title="The Requirements"
            subtitle="You will be assigned to a team of between 3 and 4 students and will be provided with a project title. Your module lecturer will be your user. Your team will be required to understand users’ requirements and build a web-based solution that they are. The web-based solution must provide a frontend application which is supported by a respective backend system.At the end of the module, your team will be required to submit a team video demonstration of your web-based solution which will contribute 10% of the module grade. Also, you will be required to write and submit an individual reflective report which will contribute 50% towards your final module grade. The remaining 40% of the module grade is awarded for the written examination which will take place during the December exam fortnight. The work will be assessed using the attached grading rubric."
          ></Section>
        </div>
      </div>
    </div>
  );
};
