import { ConductorProfile } from "@/components/conductor-profile"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"

export default function ConductorProfilePage({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "User Management", href: "/dashboard/users" },
    { label: "Conductor Profile" },
  ]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <ConductorProfile userId={params.id} />
    </div>
  )
}
