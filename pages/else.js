import Myself from "../src/components/Myself/Myself";
const ElsePage = () => <Myself />;

export const getStaticProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
export default ElsePage;
