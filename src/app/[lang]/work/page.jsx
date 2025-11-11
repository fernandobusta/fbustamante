import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Subheading } from '@/components/heading'
import Link from 'next/link'
import { getDictionary } from '../dictionaries'

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

export default async function Work({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const wDict = dict.work_page

  return (
    <SimpleLayout title={wDict.title} intro={wDict.intro}>
      <div className="space-y-20">
        {/* Cellusys - Integration Engineer */}
        <ToolsSection title={wDict.cellusys} subtitle={wDict.cellusys_subtitle}>
          <Tool title={wDict.integration_engineer}>
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              {wDict.date_ie}
            </Subheading>
            <li>{wDict.ie_b1}</li>
            <li>{wDict.ie_b2}</li>
          </Tool>
        </ToolsSection>
        {/* Cellusys - Software Engineer */}
        <ToolsSection title={wDict.cellusys} subtitle={wDict.cellusys_subtitle}>
          <Tool title={wDict.se_cellusys}>
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              {wDict.date_se}
            </Subheading>
            <li>{wDict.se_b1}</li>
            <li>{wDict.se_b2}</li>
            <li>{wDict.se_b3}</li>
            <li>{wDict.se_b4}</li>
          </Tool>
        </ToolsSection>
        {/* Future Connections - Software Engineer Intern */}
        <ToolsSection
          title={wDict.future_connections}
          subtitle={wDict.future_connections_subtitle}
        >
          <Tool title={wDict.se_intern}>
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              {wDict.date_se_intern}
            </Subheading>
            <li>{wDict.se_intern_b1}</li>
            <li>{wDict.se_intern_b2}</li>
            <li>{wDict.se_intern_b3}</li>
          </Tool>
        </ToolsSection>
        {/* Athletic Boxing Club - Sponsorship & Events Officer */}
        <ToolsSection title={wDict.dcu_abc} subtitle={wDict.dcu_abc_subtitle}>
          <Tool title={wDict.sponsorship_officer}>
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              {wDict.date_officer}
            </Subheading>
            {/* The Link stays outside the dictionary */}
            {wDict.officer_text}
            <Link href="https://www.dcuboxing.com">dcuboxing.com</Link>
          </Tool>
        </ToolsSection>
        {/* Other Jobs */}
        <ToolsSection title={wDict.other_jobs}>
          <Tool title={wDict.private_tutor}>
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              {wDict.date_tutor}
            </Subheading>
            {wDict.tutor_text}
          </Tool>

          <Tool title={wDict.waiter}>
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              {wDict.date_waiter}
            </Subheading>
            {wDict.waiter_text}
          </Tool>

          <Tool title={wDict.volunteer}>
            <Subheading className="text-zinc-600 dark:text-zinc-400">
              {wDict.date_volunteer}
            </Subheading>
            {wDict.volunteer_text}
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
