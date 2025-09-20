import { Button } from "@/components/ui/button";
import { Shield, Users, BookOpen, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-emergency-training.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Emergency training professionals working together" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="mb-8">
          <Shield className="w-20 h-20 mx-auto mb-6 text-white drop-shadow-lg" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Emergency Training
            <span className="block text-emergency-glow">Platform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Comprehensive disaster preparedness training for emergency responders. 
            Interactive quizzes, real-time weather alerts, and professional certification programs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button variant="emergency" size="lg" className="text-lg px-8 py-4">
            <Users className="w-6 h-6 mr-3" />
            Trainee Dashboard
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
            <Shield className="w-6 h-6 mr-3" />
            Trainer Portal
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-3">Interactive Training</h3>
            <p className="text-white/90">Comprehensive modules covering emergency response protocols and disaster management.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-emergency-glow" />
            <h3 className="text-xl font-semibold mb-3">SOS Emergency</h3>
            <p className="text-white/90">One-click emergency alerts with location tracking and automated response coordination.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-3">Real-time Monitoring</h3>
            <p className="text-white/90">Live weather alerts, session tracking, and comprehensive government reporting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;