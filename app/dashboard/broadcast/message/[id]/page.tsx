import { MessageDetail } from "@/components/message-detail"
import { NavigationBreadcrumb } from "@/components/navigation-breadcrumb"

export default function MessageDetailPage({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Broadcast Messaging", href: "/dashboard/broadcast/history" },
    { label: "Message Details" },
  ]

  return (
    <div className="p-6">
      <NavigationBreadcrumb items={breadcrumbItems} />
      <MessageDetail messageId={params.id} />
    </div>
  )
}
