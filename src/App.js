import "./App.css";
import React from "react";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui cards">
      <ApprovalCard
        avatar={faker.image.avatar()}
        author={faker.person.fullName()}
        date={faker.date.recent().toDateString()}
        comment={faker.lorem.sentences(3)}
      />
      <ApprovalCard
        avatar={faker.image.avatar()}
        author={faker.person.fullName()}
        date={faker.date.recent().toDateString()}
        comment={faker.lorem.sentences(3)}
      />{" "}
      <ApprovalCard
        avatar={faker.image.avatar()}
        author="Vasya"
        date={faker.date.recent().toDateString()}
        comment={faker.lorem.sentences(3)}
      />
    </div>
  );
};

export default App;
