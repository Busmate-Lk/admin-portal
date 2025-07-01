"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Bus, LayoutDashboard, Users, MessageSquare, BarChart3, Settings, ChevronRight } from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "User Management",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Broadcast Messaging",
    href: "/dashboard/broadcast/history",
    icon: MessageSquare,
  },
  {
    name: "System Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "System Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-80 bg-[#1e3b8b] text-white flex flex-col shadow-2xl">
      {/* Header */}
      <div className="px-8 py-6 bg-[#1e3b8b] border-b border-blue-700">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <Bus className="h-7 w-7 text-[#1e3b8b]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">BUSMATE LK</h1>
            <p className="text-blue-200 text-sm font-medium">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 py-8">
        <div className="space-y-2">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/dashboard/broadcast/history" && pathname.startsWith("/dashboard/broadcast")) ||
              (item.href === "/dashboard/users" && pathname.startsWith("/dashboard/users")) ||
              (item.href === "/dashboard/analytics" && pathname.startsWith("/dashboard/analytics")) ||
              (item.href === "/dashboard/settings" && pathname.startsWith("/dashboard/settings"))

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ease-in-out",
                  isActive
                    ? "bg-white text-[#1e3b8b]"
                    : "text-white hover:bg-blue-700 hover:text-white"
                )}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                <ChevronRight className={cn(
                  "h-4 w-4 transition-all duration-200",
                  isActive
                    ? "text-[#1e3b8b]"
                    : "text-blue-200 group-hover:text-white"
                )} />
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-6 py-6 border-t border-blue-700">
        <div className="flex items-center space-x-3 p-4 bg-blue-700 rounded-lg">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">System Online</p>
            <p className="text-xs text-blue-200">All services operational</p>
          </div>
        </div>
      </div>
    </div>
  )
}
