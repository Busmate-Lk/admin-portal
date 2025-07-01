import { PageHeader } from "@/components/page-header"
import { AdminProfile } from "@/components/admin-profile"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"
import { Button } from "@/components/ui/button"
import { Edit, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const breadcrumbItems = [{ label: "Dashboard", href: "/dashboard" }, { label: "Admin Profile" }]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Admin Profile"
        subtitle="Manage your account settings and preferences"
        showSearch={false}
        showPerformanceIndicator={false}
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        }
      />
      <AdminProfile />
    </div>
  )
}
