import Disclosure from "../components/disclosure";
import { experiences } from "../lib/experience-data";

export default function Experience() {
  return <section id="experience" className="section-shell section-spacing"><div className="section-heading heading-with-copy"><div><h2>Work experience<span className="sage-period">.</span></h2></div><p>Roles, projects, and the work I contributed along the way.</p></div><div className="experience-list">{experiences.map((item) => <article className="experience-item" key={item.id}><div className="experience-date"><span className="timeline-dot" /><span>{item.period}</span></div><div className="experience-body"><h3>{item.title}</h3><p className="experience-company">{item.company}</p><p className="experience-summary">{item.summary}</p><div className="tags">{item.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><Disclosure><ul className="contribution-list">{item.contributions.map(text => <li key={text}>{text}</li>)}</ul></Disclosure></div></article>)}</div></section>;
}
