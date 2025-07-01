"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Edit, Ban } from "lucide-react"
import { useRouter } from "next/navigation"

const users = [
  {
    id: 1,
    name: "John Silva",
    email: "john.silva@email.com",
    type: "Passenger",
    status: "Active",
    lastLogin: "2 hours ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Maria Fernando",
    email: "maria.fernando@email.com",
    type: "Conductor",
    status: "Active",
    lastLogin: "1 day ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "John Silva",
    email: "john.silva@email.com",
    type: "Fleet",
    status: "Active",
    lastLogin: "2 hours ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Maria Fernando",
    email: "maria.fernando@email.com",
    type: "MOT",
    status: "Active",
    lastLogin: "1 day ago",
    avatar: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Maria Fernando",
    email: "maria.fernando@email.com",
    type: "Time Keeper",
    status: "Active",
    lastLogin: "1 day ago",
    avatar: "/placeholder.svg",
  },
]

export function UserTable() {
  const router = useRouter()

  const handleRowClick = (user: any) => {
    const userType = user.type.toLowerCase()
    switch (userType) {
      case "passenger":
        router.push(`/dashboard/users/passenger/${user.id}`)
        break
      case "conductor":
        router.push(`/dashboard/users/conductor/${user.id}`)
        break
      case "mot":
        router.push(`/dashboard/users/mot/${user.id}`)
        break
      case "time keeper":
        router.push(`/dashboard/users/timekeeper/${user.id}`)
        break
      case "fleet":
        router.push(`/dashboard/users/fleet/${user.id}`)
        break
      default:
        break
    }
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Checkbox />
            <span className="text-sm text-gray-600">Select All</span>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Suspend
            </Button>
            <Button variant="outline" size="sm" className="bg-green-50 text-green-700 border-green-200">
              Activate
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
              Send Message
            </Button>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>User Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="cursor-pointer hover:bg-gray-50" onClick={() => handleRowClick(user)}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.name}</span>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.type === "Passenger"
                      ? "default"
                      : user.type === "Conductor"
                        ? "secondary"
                        : user.type === "Fleet"
                          ? "outline"
                          : user.type === "MOT"
                            ? "destructive"
                            : "default"
                  }
                  className={
                    user.type === "Passenger"
                      ? "bg-blue-100 text-blue-800"
                      : user.type === "Conductor"
                        ? "bg-green-100 text-green-800"
                        : user.type === "Fleet"
                          ? "bg-yellow-100 text-yellow-800"
                          : user.type === "MOT"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-teal-100 text-teal-800"
                  }
                >
                  {user.type}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-600">{user.lastLogin}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4 text-green-600" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Ban className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="p-6 border-t flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing 1 to 10 of 13,302 results</p>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm" className="bg-blue-600 text-white">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
