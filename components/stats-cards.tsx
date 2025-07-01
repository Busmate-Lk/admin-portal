import { Card, CardContent } from "@/components/ui/card"
import { Users, Activity, AlertTriangle, Bus, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
    color: "blue",
  },
  {
    title: "System Uptime",
    value: "99.9%",
    change: "Excellent",
    changeType: "positive",
    icon: Activity,
    color: "green",
  },
  {
    title: "Critical Alerts",
    value: "3",
    change: "Needs attention",
    changeType: "negative",
    icon: AlertTriangle,
    color: "red",
  },
  {
    title: "Total Buses",
    value: "342",
    change: "+5 new",
    changeType: "positive",
    icon: Bus,
    color: "purple",
  },
  {
    title: "Transactions",
    value: "Rs 2.4M",
    change: "Today",
    changeType: "neutral",
    icon: TrendingUp,
    color: "yellow",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className={`border-l-4 ${stat.color === "blue"
          ? "border-l-blue-500"
          : stat.color === "green"
            ? "border-l-green-500"
            : stat.color === "red"
              ? "border-l-red-500"
              : stat.color === "purple"
                ? "border-l-purple-500"
                : "border-l-yellow-500"
          }`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p
                  className={`text-sm ${stat.changeType === "positive"
                    ? "text-green-600"
                    : stat.changeType === "negative"
                      ? "text-red-600"
                      : "text-gray-600"
                    }`}
                >
                  {stat.change}
                </p>
              </div>
              <div
                className={`p-3 rounded-full ${stat.color === "blue"
                  ? "bg-blue-100 text-blue-600"
                  : stat.color === "green"
                    ? "bg-green-100 text-green-600"
                    : stat.color === "red"
                      ? "bg-red-100 text-red-600"
                      : stat.color === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-yellow-100 text-yellow-600"
                  }`}
              >
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
