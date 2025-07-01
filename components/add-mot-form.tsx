"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Upload,
  User,
  Calendar,
  Shield,
  Mail,
  Phone,
  MapPin,
  Building,
  UserCheck,
  Key,
  Clock,
} from "lucide-react"
import Link from "next/link"

export function AddMotForm() {
  const [accessLevel, setAccessLevel] = useState("administrator")
  const [formData, setFormData] = useState({
    fullName: "",
    employeeId: "",
    email: "",
    phone: "",
    nic: "",
    department: "",
    jobTitle: "",
    officeLocation: "",
    reportingManager: "",
    username: "",
    tempPassword: "",
    twoFactor: true,
    accountStatus: true,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              <Link href="/dashboard/users">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to User Management
              </Link>
            </Button>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add Ministry of Transport Official</h1>
            <p className="text-gray-600">
              Create a new user account for Ministry of Transport personnel with appropriate access levels and
              permissions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="xl:col-span-3 space-y-8">
            {/* Personal Information */}
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Personal Information</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Basic personal details of the official</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeId" className="text-sm font-medium text-gray-700">
                      Employee ID <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="employeeId"
                      placeholder="MOT/2024/001"
                      value={formData.employeeId}
                      onChange={(e) => handleInputChange("employeeId", e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Official Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        placeholder="name@gov.lk"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-11 pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        placeholder="+94 77 123 4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-11 pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nic" className="text-sm font-medium text-gray-700">
                      NIC Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nic"
                      placeholder="123456789V"
                      value={formData.nic}
                      onChange={(e) => handleInputChange("nic", e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Profile Photo</Label>
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gray-100">
                          <User className="h-6 w-6 text-gray-400" />
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="h-11">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ministry Details */}
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Building className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Ministry Details</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Official employment and department information</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="department" className="text-sm font-medium text-gray-700">
                      Department <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transport-regulation">Transport Regulation Division</SelectItem>
                        <SelectItem value="road-safety">Road Safety Department</SelectItem>
                        <SelectItem value="public-transport">Public Transport Authority</SelectItem>
                        <SelectItem value="licensing">Vehicle Licensing Department</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700">
                      Job Title <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="jobTitle"
                      placeholder="Transport Officer"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="officeLocation" className="text-sm font-medium text-gray-700">
                      Office Location <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <Input
                        id="officeLocation"
                        placeholder="Colombo Central Office"
                        value={formData.officeLocation}
                        onChange={(e) => handleInputChange("officeLocation", e.target.value)}
                        className="h-11 pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reportingManager" className="text-sm font-medium text-gray-700">
                      Reporting Manager
                    </Label>
                    <Input
                      id="reportingManager"
                      placeholder="Director Name"
                      value={formData.reportingManager}
                      onChange={(e) => handleInputChange("reportingManager", e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appointmentDate" className="text-sm font-medium text-gray-700">
                      Date of Appointment
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <Input id="appointmentDate" type="date" className="h-11 pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="securityClearance" className="text-sm font-medium text-gray-700">
                      Security Clearance Level
                    </Label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select clearance level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="level1">Level 1 - Public</SelectItem>
                        <SelectItem value="level2">Level 2 - Internal</SelectItem>
                        <SelectItem value="level3">Level 3 - Confidential</SelectItem>
                        <SelectItem value="level4">Level 4 - Secret</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Access & Permissions */}
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">System Access & Permissions</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Define user access levels and system permissions</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium text-gray-900 mb-4 block">Access Level</Label>
                    <RadioGroup value={accessLevel} onValueChange={setAccessLevel} className="space-y-4">
                      <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="administrator" id="administrator" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="administrator" className="font-medium text-gray-900 cursor-pointer">
                            MOT Administrator
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">
                            Full access to reports, data, and system configuration. Can manage all users and settings.
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span className="flex items-center">
                              <UserCheck className="h-3 w-3 mr-1" />
                              User Management
                            </span>
                            <span className="flex items-center">
                              <Shield className="h-3 w-3 mr-1" />
                              System Config
                            </span>
                            <span className="flex items-center">
                              <Key className="h-3 w-3 mr-1" />
                              Full Access
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="timekeeper" id="timekeeper" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="timekeeper" className="font-medium text-gray-900 cursor-pointer">
                            Time Keeper
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">
                            Can approve routes, view analytics, and manage schedules. Limited administrative access.
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              Schedule Management
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              Route Approval
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="inspector" id="inspector" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="inspector" className="font-medium text-gray-900 cursor-pointer">
                            Transport Inspector
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">
                            View-only access to compliance and inspection data. Can generate reports.
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Shield className="h-3 w-3 mr-1" />
                              View Only
                            </span>
                            <span className="flex items-center">
                              <Building className="h-3 w-3 mr-1" />
                              Compliance Data
                            </span>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Setup */}
            <Card className="shadow-sm border-gray-200">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Key className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Account Setup</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">Configure login credentials and security settings</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                      Username <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="username"
                      placeholder="j.perera"
                      value={formData.username}
                      onChange={(e) => handleInputChange("username", e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tempPassword" className="text-sm font-medium text-gray-700">
                      Temporary Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="tempPassword"
                      type="password"
                      placeholder="TempPass123!"
                      value={formData.tempPassword}
                      onChange={(e) => handleInputChange("tempPassword", e.target.value)}
                      className="h-11"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label htmlFor="twoFactor" className="text-sm font-medium text-gray-900">
                        Two-Factor Authentication
                      </Label>
                      <p className="text-xs text-gray-600 mt-1">Enhance security with 2FA</p>
                    </div>
                    <Switch
                      id="twoFactor"
                      checked={formData.twoFactor}
                      onCheckedChange={(checked) => handleInputChange("twoFactor", checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label htmlFor="accountStatus" className="text-sm font-medium text-gray-900">
                        Account Status
                      </Label>
                      <p className="text-xs text-gray-600 mt-1">Enable/disable account access</p>
                    </div>
                    <Switch
                      id="accountStatus"
                      checked={formData.accountStatus}
                      onCheckedChange={(checked) => handleInputChange("accountStatus", checked)}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="expiryDate" className="text-sm font-medium text-gray-700">
                      Account Expiry Date (Optional)
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <Input id="expiryDate" type="date" className="h-11 pl-10" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* User Preview Sidebar */}
          <div className="xl:col-span-1">
            <div className="sticky top-6">
              <Card className="shadow-sm border-gray-200">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                  <CardTitle className="text-lg text-center">User Preview</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center space-y-6">
                  <Avatar className="w-20 h-20 mx-auto border-4 border-white shadow-lg">
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-100 to-indigo-100">
                      <User className="h-8 w-8 text-blue-600" />
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{formData.fullName || "New MOT Official"}</h3>
                    <p className="text-sm text-gray-600">{formData.jobTitle || "Transport Officer"}</p>
                    <p className="text-sm text-gray-600">{formData.officeLocation || "Central Office Colombo"}</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Employee ID:</span>
                      <span className="font-medium text-gray-900">{formData.employeeId || "MOT/2024/001"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Access Level:</span>
                      <span className="text-blue-600 font-medium capitalize">{accessLevel}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Status:</span>
                      <span className={`font-medium ${formData.accountStatus ? "text-green-600" : "text-red-600"}`}>
                        {formData.accountStatus ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">2FA:</span>
                      <span className={`font-medium ${formData.twoFactor ? "text-green-600" : "text-red-600"}`}>
                        {formData.twoFactor ? "Enabled" : "Disabled"}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3 text-gray-900">Security Requirements</h4>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-left">
                      <ul className="text-xs text-amber-700 space-y-2">
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-amber-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Password must be 8+ characters
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-amber-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Must include uppercase, lowercase, number
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-amber-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          2FA required for Administrator access
                        </li>
                        <li className="flex items-start">
                          <span className="w-1 h-1 bg-amber-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          Account expires in 90 days if unused
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <Button
            variant="outline"
            className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
            asChild
          >
            <Link href="/dashboard/users">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Cancel
            </Link>
          </Button>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              Save & Add Another
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              <UserCheck className="h-4 w-4 mr-2" />
              Create User Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
