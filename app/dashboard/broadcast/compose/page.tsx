import { PageHeader } from "@/components/page-header"
import { ComposeMessage } from "@/components/compose-message"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ComposeMessagePage() {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Broadcast Messaging", href: "/dashboard/broadcast/history" },
    { label: "Compose Message" },
  ]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <PageHeader
        title="Compose Message"
        subtitle="Create and send broadcast messages to users"
        showSearch={false}
        showPerformanceIndicator={false}
        actions={
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/broadcast/history">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to History
            </Link>
          </Button>
        }
      />
      <ComposeMessage />
    </div>
  )
}
