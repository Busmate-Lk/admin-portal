import { TimekeeperProfile } from "@/components/timekeeper-profile"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"

export default function TimekeeperProfilePage({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "User Management", href: "/dashboard/users" },
    { label: "Timekeeper Profile" },
  ]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <TimekeeperProfile userId={params.id} />
    </div>
  )
}
