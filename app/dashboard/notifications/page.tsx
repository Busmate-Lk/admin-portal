import { PageHeader } from "@/components/page-header"
import { NotificationPanel } from "@/components/notification-panel"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"
import { Button } from "@/components/ui/button"
import { Bell, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotificationsPage() {
  const breadcrumbItems = [{ label: "Dashboard", href: "/dashboard" }, { label: "Notifications" }]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Notifications"
        subtitle="Stay updated with important system alerts and messages"
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
            <Button variant="outline">Mark All as Read</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Bell className="h-4 w-4 mr-2" />
              Notification Settings
            </Button>
          </div>
        }
      />
      <NotificationPanel />
    </div>
  )
}
