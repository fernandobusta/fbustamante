import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getDictionary } from '../dictionaries'

function RoleEntry({ title, dates, children }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
          {dates}
        </span>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
          <span
            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
        <Section title={wDict.cellusys} subtitle={wDict.cellusys_subtitle}>
          <div className="space-y-8">
            <RoleEntry title={wDict.integration_engineer} dates={wDict.date_ie}>
              <BulletList items={[wDict.ie_b1, wDict.ie_b2]} />
            </RoleEntry>
            <RoleEntry title={wDict.se_cellusys} dates={wDict.date_se}>
              <BulletList
                items={[wDict.se_b1, wDict.se_b2, wDict.se_b3, wDict.se_b4]}
              />
            </RoleEntry>
          </div>
        </Section>

        <Section
          title={wDict.future_connections}
          subtitle={wDict.future_connections_subtitle}
        >
          <div className="space-y-8">
            <RoleEntry title={wDict.se_intern} dates={wDict.date_se_intern}>
              <BulletList
                items={[
                  wDict.se_intern_b1,
                  wDict.se_intern_b2,
                  wDict.se_intern_b3,
                ]}
              />
            </RoleEntry>
          </div>
        </Section>

        <Section title={wDict.dcu_abc} subtitle={wDict.dcu_abc_subtitle}>
          <div className="space-y-8">
            <RoleEntry title={wDict.sponsorship_officer} dates={wDict.date_officer}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {wDict.officer_text}{' '}
                <a
                  href="https://www.dcuboxing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-zinc-800 underline underline-offset-2 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
                >
                  dcuboxing.com
                </a>
              </p>
            </RoleEntry>
          </div>
        </Section>

        <Section title={wDict.other_jobs}>
          <div className="space-y-8">
            <RoleEntry title={wDict.private_tutor} dates={wDict.date_tutor}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {wDict.tutor_text}
              </p>
            </RoleEntry>
            <RoleEntry title={wDict.waiter} dates={wDict.date_waiter}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {wDict.waiter_text}
              </p>
            </RoleEntry>
            <RoleEntry title={wDict.volunteer} dates={wDict.date_volunteer}>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {wDict.volunteer_text}
              </p>
            </RoleEntry>
          </div>
        </Section>
      </div>
    </SimpleLayout>
  )
}
