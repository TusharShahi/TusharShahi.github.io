import Work from "../src/components/Work/Work";
const WorkPage = () => <Work />;
export const getStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

export default WorkPage;
