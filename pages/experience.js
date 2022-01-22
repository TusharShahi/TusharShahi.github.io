import Experience from "../src/components/Exp/Experience";
const ExperiencePage = () => <Experience />;
export const getStaticProps = async () => {
  return {
    props: {} // will be passed to the page component as props
  };
};

export default ExperiencePage;
