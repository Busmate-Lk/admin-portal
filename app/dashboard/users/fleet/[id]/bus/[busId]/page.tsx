import { BusDetails } from "@/components/bus-details"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"

export default function BusDetailsPage({
  params,
}: {
  params: { id: string; busId: string }
}) {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "User Management", href: "/dashboard/users" },
    { label: "Fleet Manager", href: `/dashboard/users/fleet/${params.id}` },
    { label: `Bus ${params.busId}` },
  ]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <BusDetails fleetId={params.id} busId={params.busId} />
    </div>
  )
}
