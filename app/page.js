import Link from "next/link";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome! Stay a while and listen</h1>
      <Courses />
    </div>
  );
};

export default HomePage;
