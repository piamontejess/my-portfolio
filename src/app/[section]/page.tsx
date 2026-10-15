import Home from "../page";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["about", "experience", "skills", "contact"].map(section => ({ section }));
}

export default Home;
