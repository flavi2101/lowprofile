import GitHubCalendar from './GithubCalendar'

export default function GithubActivityBox() {
  return (
    <section className={`card flex flex-grow items-center justify-center `}>
      <GitHubCalendar className="transform text-grey xl:scale-[1.5]" />
    </section>
  )
}
