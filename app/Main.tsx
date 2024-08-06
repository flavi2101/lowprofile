import DashBoard from '@/components/home/DashBoard'
import RecentPosts from '@/components/home/RecentPosts'

export default function Home() {
  return (
    <div className="space-y-10 divide-y divide-gray-200 dark:divide-gray-700">
      <DashBoard />
      <RecentPosts />
    </div>
  )
}
