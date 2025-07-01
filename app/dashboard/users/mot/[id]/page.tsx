import { MotAdminProfile } from "@/components/mot-admin-profile"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"

export default function MotAdminProfilePage({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "User Management", href: "/dashboard/users" },
    { label: "MoT Admin Profile" },
  ]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <MotAdminProfile userId={params.id} />
    </div>
  )
}
