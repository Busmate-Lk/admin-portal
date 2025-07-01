import { FleetProfile } from "@/components/fleet-profile"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"

export default function FleetProfilePage({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "User Management", href: "/dashboard/users" },
    { label: "Fleet Manager Profile" },
  ]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <FleetProfile userId={params.id} />
    </div>
  )
}
