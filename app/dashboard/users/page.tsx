import { PageHeader } from "@/components/page-header"
import { UserStats } from "@/components/user-stats"
import { UserFilters } from "@/components/user-filters"
import { UserTable } from "@/components/user-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function UsersPage() {
  return (
    <div className="p-6">
      <PageHeader
        title="User Management"
        subtitle="Manage system users and their permissions"
        showSearch={true}
        showPerformanceIndicator={false}
      />
      <UserStats />

      {/* Add User Button */}
      <div className="flex justify-end mb-6">
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/dashboard/users/add-mot">
            <Plus className="h-4 w-4 mr-2" />
            Add MoT User
          </Link>
        </Button>
      </div>

      <UserFilters />
      <UserTable />
    </div>
  )
}
