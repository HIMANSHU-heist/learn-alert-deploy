import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  MapPin,
  FileText,
  BarChart3,
  Calendar,
  Bell
} from "lucide-react";

const TrainerDashboard = () => {
  const trainees = [
    {
      id: 1,
      name: "Sarah Johnson",
      progress: 85,
      lastActive: "2 hours ago",
      currentModule: "Fire Safety Protocols",
      status: "Active"
    },
    {
      id: 2,
      name: "Mike Chen",
      progress: 92,
      lastActive: "1 day ago",
      currentModule: "Medical Emergency Response",
      status: "Active"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      progress: 67,
      lastActive: "3 hours ago",
      currentModule: "Natural Disaster Preparedness",
      status: "Active"
    },
    {
      id: 4,
      name: "David Kim",
      progress: 45,
      lastActive: "5 days ago",
      currentModule: "Evacuation Procedures",
      status: "Inactive"
    }
  ];

  const upcomingSessions = [
    {
      title: "Advanced Rescue Techniques",
      date: "Today, 2:00 PM",
      attendees: 24,
      location: "Training Center A"
    },
    {
      title: "Emergency Communications Workshop",
      date: "Tomorrow, 10:00 AM", 
      attendees: 18,
      location: "Virtual Session"
    },
    {
      title: "Multi-Agency Coordination Drill",
      date: "Friday, 9:00 AM",
      attendees: 45,
      location: "Main Facility"
    }
  ];

  const alerts = [
    {
      type: "weather",
      message: "Severe thunderstorm warning - 3 trainees in affected area",
      time: "15 minutes ago",
      severity: "high"
    },
    {
      type: "system",
      message: "New certification requirements updated",
      time: "2 hours ago", 
      severity: "medium"
    },
    {
      type: "emergency",
      message: "SOS alert from Trainee #247 - Resolved",
      time: "1 day ago",
      severity: "low"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Trainer Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor trainee progress, manage sessions, and oversee emergency response training programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Stats Overview */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  Active Trainees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">127</div>
                <p className="text-sm text-muted-foreground">+12 this week</p>
              </CardContent>
            </Card>

            <Card className="border-success/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <CheckCircle className="w-5 h-5 mr-2 text-success" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success mb-2">89</div>
                <p className="text-sm text-muted-foreground">Completed this month</p>
              </CardContent>
            </Card>

            <Card className="border-warning/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning mb-2">3</div>
                <p className="text-sm text-muted-foreground">Requires attention</p>
              </CardContent>
            </Card>

            <Card className="border-emergency/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="w-5 h-5 mr-2 text-emergency" />
                  Avg. Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-emergency mb-2">73%</div>
                <p className="text-sm text-muted-foreground">Across all modules</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}  
          <div className="lg:col-span-3">
            <Tabs defaultValue="trainees" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="trainees">Trainee Management</TabsTrigger>
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="trainees" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trainee Progress Overview</CardTitle>
                    <CardDescription>
                      Monitor individual trainee performance and engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {trainees.map((trainee) => (
                        <div key={trainee.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{trainee.name}</h4>
                              <Badge 
                                variant={trainee.status === "Active" ? "default" : "secondary"}
                              >
                                {trainee.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground mb-2">
                              Current: {trainee.currentModule}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="w-3 h-3 mr-1" />
                              Last active: {trainee.lastActive}
                            </div>
                          </div>
                          <div className="ml-6 text-right">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {trainee.progress}%
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sessions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Training Sessions</CardTitle>
                    <CardDescription>
                      Manage and schedule training sessions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingSessions.map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2">{session.title}</h4>
                            <div className="flex items-center text-sm text-muted-foreground mb-1">
                              <Calendar className="w-4 h-4 mr-2" />
                              {session.date}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-2" />
                              {session.location}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-primary mb-2">
                              {session.attendees} attendees
                            </div>
                            <div className="space-x-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="default" size="sm">
                                Start
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Government Reporting</CardTitle>
                    <CardDescription>
                      Generate and submit compliance reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-24 flex-col">
                        <FileText className="w-8 h-8 mb-2" />
                        Monthly Progress Report
                      </Button>
                      <Button variant="outline" className="h-24 flex-col">
                        <BarChart3 className="w-8 h-8 mb-2" />
                        Certification Analytics
                      </Button>
                      <Button variant="outline" className="h-24 flex-col">
                        <Users className="w-8 h-8 mb-2" />
                        Trainee Demographics
                      </Button>
                      <Button variant="outline" className="h-24 flex-col">
                        <AlertTriangle className="w-8 h-8 mb-2" />
                        Incident Reports
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Real-time Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Real-time Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.map((alert, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg border-l-4 ${
                      alert.severity === 'high' ? 'border-emergency bg-emergency/5' :
                      alert.severity === 'medium' ? 'border-warning bg-warning/5' :
                      'border-muted bg-muted/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <AlertTriangle 
                        className={`w-4 h-4 mt-0.5 ${
                          alert.severity === 'high' ? 'text-emergency' :
                          alert.severity === 'medium' ? 'text-warning' :
                          'text-muted-foreground'
                        }`} 
                      />
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="text-sm">{alert.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="default" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Create New Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Send Announcement
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerDashboard;