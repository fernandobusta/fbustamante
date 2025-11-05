import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Subheading } from '@/components/heading'
import Link from 'next/link'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.List>{children}</Card.List>
    </Card>
  )
}

export const metadata = {
  title: 'Work',
  description: 'Professional Experience & Collaborations',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Professional Experience & Collaborations"
      intro="I have a strong interest in telecom systems, network security, and software engineering. Through my work experience, I’ve gained a deep understanding of how signalling, connectivity, and infrastructure come together to keep mobile networks secure and efficient."
    >
      <div className="space-y-20">
        <ToolsSection title="Cellusys, Dublin">
          <Tool title="Integration Engineer">
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              August 2025 - Present
            </Subheading>
            <li>
              Leading onsite deployments and integrations for telecom software
              solutions (SS7, Diameter, GTP, and 5G systems), ensuring seamless
              interoperability across client networks.
            </li>
            <li>
              Acting as a key technical liaison between operators and internal
              engineering teams, translating complex requirements into clear,
              actionable deliverables.
            </li>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Cellusys, Dublin">
          <Tool title="Software Engineer">
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              March 2024 - September 2024 and May 2023 - August 2023
            </Subheading>
            <li>
              Contributed to the development of key roaming products for telecom
              operators, including Steering of Roaming, Roam Welcome and
              Anti-Steering of Roaming Detection.
            </li>
            <li>
              Collaborated within an Agile development team to enhance product
              features and improve system performance.
            </li>
            <li>
              Utilised a diverse tech stack, including Clojure, JavaScript,
              Java, ElasticSearch, AngularJS, and Kibana to build and optimise
              software solutions.
            </li>
            <li>
              Gained hands-on experience and a solid understanding of telecom
              protocols and technologies, such as SS7, Diameter and SIP, with
              exposure to LTE/VoLTE and 5G-NR advancements.
            </li>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Future Connections" subtitle="Madrid">
          <Tool title="Software Engineer Intern">
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              June 2022 - September 2022
            </Subheading>
            <li>
              Developed and maintained full stack web applications using Django,
              leveraging tools like Plotly, Dash, SQL, and Streamlit to create
              dynamic and interactive interfaces.
            </li>
            <li>
              Automated key processes with UI Vision and Python, streamlining
              workflows and increasing operational efficiency.
            </li>
            <li>
              Performed KPI analysis on cell tower data for multinational telec
            </li>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Athletic Boxing Club" subtitle="DCU, Dublin">
          <Tool title="Sponsorship & Events Officer">
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              2023 - Present
            </Subheading>
            Led sponsorship initiatives and managed over 100 members. Developed
            a new club website using Next.js driving over 60-member increase.
            Coordinated events and contributed to a 3-year growth plan.
            <Link href="https://www.dcuboxing.com">dcuboxing.com</Link>
          </Tool>
        </ToolsSection>
        <ToolsSection title="Other Jobs">
          <Tool title="Private Tutor">
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              2019 - Present
            </Subheading>
            Maths, Languages, Programming, and Design
          </Tool>

          <Tool title="Waiter">
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              2018 - 2022
            </Subheading>
            Wedding Catering and Restaurants
          </Tool>

          <Tool title="Volunteer">
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              2016 - 2017
            </Subheading>
            Oxfam, Bath, UK
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
