import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const jobsPromise = fetch("http://localhost:3000/careerCood")
    .then(res => res.json());

  return (
    <div>
      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <HotJobs jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;