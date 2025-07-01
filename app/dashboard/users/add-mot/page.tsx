import { PageHeader } from "@/components/page-header"
import { AddMotForm } from "@/components/add-mot-form"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AddMotUserPage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "User Management", href: "/dashboard/users" },
    { label: "Add MoT User" },
  ]

  return (
    <div>
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <NavigationBreadcrumb items={breadcrumbItems} />
      </div>
      <div className="p-6">
        <PageHeader
          title="Add MoT User"
          subtitle="Create a new Ministry of Transport user account"
          showSearch={false}
          showPerformanceIndicator={false}
          actions={
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/users">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Users
              </Link>
            </Button>
          }
        />
        <AddMotForm />
      </div>
    </div>
  )
}
