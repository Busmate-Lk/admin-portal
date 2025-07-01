import { PassengerProfile } from "@/components/passenger-profile"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"

export default function PassengerProfilePage({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "User Management", href: "/dashboard/users" },
    { label: "Passenger Profile" },
  ]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <PassengerProfile userId={params.id} />
    </div>
  )
}
