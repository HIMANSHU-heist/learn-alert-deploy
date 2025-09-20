import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Cloud, 
  MapPin,
  Award,
  Users,
  Target
} from "lucide-react";
import dashboardIcon from "@/assets/dashboard-icon.jpg";
import quizIcon from "@/assets/quiz-icon.jpg";

const TraineeDashboard = () => {
  const trainingModules = [
    {
      id: 1,
      title: "Fire Safety Protocols",
      progress: 85,
      status: "In Progress",
      duration: "2.5 hours",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Medical Emergency Response",
      progress: 100,
      status: "Completed",
      duration: "3 hours",
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Natural Disaster Preparedness",
      progress: 45,
      status: "In Progress",
      duration: "4 hours",
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "Evacuation Procedures",
      progress: 0,
      status: "Not Started",
      duration: "1.5 hours",
      difficulty: "Intermediate"
    }
  ];

  const upcomingSessions = [
    {
      title: "Advanced Rescue Techniques",
      date: "Today, 2:00 PM",
      instructor: "Chief Martinez",
      type: "Live Session"
    },
    {
      title: "Emergency Communications",
      date: "Tomorrow, 10:00 AM",
      instructor: "Sgt. Johnson",
      type: "Workshop"
    }
  ];

  return (
    <section id="dashboards" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Trainee Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your progress, access training modules, and stay updated with emergency alerts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20 shadow-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Award className="w-5 h-5 mr-2 text-success" />
                    Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-success mb-2">73%</div>
                  <p className="text-sm text-muted-foreground">Overall completion</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Active Modules
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <p className="text-sm text-muted-foreground">In progress</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 shadow-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Users className="w-5 h-5 mr-2 text-warning" />
                    Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-warning mb-2">12</div>
                  <p className="text-sm text-muted-foreground">This month</p>
                </CardContent>
              </Card>
            </div>

            {/* Training Modules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-primary" />
                  Training Modules
                </CardTitle>
                <CardDescription>
                  Continue your emergency response training
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {trainingModules.map((module) => (
                  <div key={module.id} className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{module.title}</h3>
                      <Badge 
                        variant={
                          module.status === "Completed" ? "default" : 
                          module.status === "In Progress" ? "secondary" : "outline"
                        }
                      >
                        {module.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {module.duration}
                      </span>
                      <span>Difficulty: {module.difficulty}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <Progress value={module.progress} className="h-2" />
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {module.progress}% complete
                        </span>
                      </div>
                      <Button 
                        variant={module.status === "Completed" ? "outline" : "default"} 
                        size="sm"
                      >
                        {module.status === "Completed" ? "Review" : 
                         module.status === "In Progress" ? "Continue" : "Start"}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Alert */}
            <Card className="border-emergency/30 bg-emergency/5">
              <CardHeader>
                <CardTitle className="flex items-center text-emergency">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Weather Alert
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Severe thunderstorm warning in your area. Review emergency protocols.
                </p>
                <Button variant="emergency" size="sm" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <img src={quizIcon} alt="" className="w-5 h-5 mr-2 rounded" />
                  Take Quiz
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find Emergency Centers
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Cloud className="w-5 h-5 mr-2" />
                  Weather Updates
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium text-sm">{session.title}</h4>
                    <p className="text-xs text-muted-foreground">{session.date}</p>
                    <p className="text-xs text-muted-foreground">
                      {session.instructor} • {session.type}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraineeDashboard;