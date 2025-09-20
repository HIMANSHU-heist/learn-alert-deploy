import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, GraduationCap, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-emergency-training.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Shield className="w-20 h-20 text-white mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Surakshit Bharat
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Comprehensive Emergency Training Platform for a Safer India
          </p>
          
          {/* Dashboard Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Trainee Portal</h3>
                <p className="text-white/80 mb-6">
                  Access training modules, track progress, and participate in interactive learning
                </p>
                <Link to="/trainee">
                  <Button variant="secondary" size="lg" className="w-full">
                    Enter Trainee Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Trainer Portal</h3>
                <p className="text-white/80 mb-6">
                  Manage trainees, monitor progress, and oversee certification processes
                </p>
                <Link to="/trainer">
                  <Button variant="secondary" size="lg" className="w-full">
                    Enter Trainer Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          {/* Emergency Button */}
          <div className="mt-12">
            <Button variant="emergency" size="lg" className="shadow-emergency">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Emergency SOS
            </Button>
          </div>
        </div>
      </main>
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Building Resilient Communities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering citizens with essential emergency preparedness skills through comprehensive training programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Interactive Training</h3>
                <p className="text-muted-foreground">
                  Engaging modules covering disaster preparedness, first aid, and emergency response protocols
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Alerts</h3>
                <p className="text-muted-foreground">
                  Instant notifications for weather warnings, emergency situations, and safety updates
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Network</h3>
                <p className="text-muted-foreground">
                  Connect with local emergency responders and build stronger community resilience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;