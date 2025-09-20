import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Trophy,
  BookOpen,
  Target,
  ArrowRight
} from "lucide-react";
import quizIcon from "@/assets/quiz-icon.jpg";

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is the first priority in any emergency response situation?",
      options: [
        "Establishing communication with command center",
        "Ensuring scene safety for responders",
        "Beginning victim rescue operations",
        "Setting up equipment and resources"
      ],
      correct: 1,
      explanation: "Scene safety is always the top priority. Responders must ensure their own safety before they can effectively help others."
    },
    {
      id: 2,
      question: "During a building fire, what is the maximum recommended crawling height to avoid smoke inhalation?",
      options: [
        "6 inches from the floor",
        "12 inches from the floor", 
        "18 inches from the floor",
        "24 inches from the floor"
      ],
      correct: 2,
      explanation: "Staying below 18 inches helps avoid the superheated gases and smoke that rise during a fire."
    },
    {
      id: 3,
      question: "What does the 'C' stand for in the ABC approach to emergency medical assessment?",
      options: [
        "Consciousness",
        "Circulation",
        "Cardiac function",
        "Critical injuries"
      ],
      correct: 1,
      explanation: "ABC stands for Airway, Breathing, and Circulation - the three critical life functions assessed in that order."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-warning";
    return "text-emergency";
  };

  const getScoreBadge = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Excellent";
    if (percentage >= 60) return "Good";
    return "Needs Review";
  };

  if (!quizStarted) {
    return (
      <section id="training" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Interactive Training Quiz</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Test your emergency response knowledge with our comprehensive assessment modules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={quizIcon} 
                alt="Emergency training quiz interface" 
                className="w-full rounded-lg shadow-primary"
              />
            </div>
            
            <Card className="border-primary/20 shadow-primary">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <BookOpen className="w-8 h-8 mr-3 text-primary" />
                  Emergency Response Quiz
                </CardTitle>
                <CardDescription className="text-base">
                  Comprehensive assessment covering fundamental emergency response protocols
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-muted-foreground">
                      <Target className="w-5 h-5 mr-2" />
                      Questions
                    </span>
                    <Badge variant="secondary">{questions.length} Total</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-muted-foreground">
                      <Clock className="w-5 h-5 mr-2" />
                      Time Limit
                    </span>
                    <Badge variant="outline">No Time Limit</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-muted-foreground">
                      <Trophy className="w-5 h-5 mr-2" />
                      Passing Score
                    </span>
                    <Badge variant="outline">80%</Badge>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full shadow-primary" 
                  onClick={() => setQuizStarted(true)}
                >
                  Start Quiz
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 shadow-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                {percentage >= 80 ? (
                  <CheckCircle className="w-16 h-16 text-success" />
                ) : (
                  <XCircle className="w-16 h-16 text-emergency" />
                )}
              </div>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
              <CardDescription className="text-lg">
                Here are your results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
                  {percentage}%
                </div>
                <Badge 
                  variant={percentage >= 80 ? "default" : percentage >= 60 ? "secondary" : "destructive"}
                  className="text-base px-4 py-1"
                >
                  {getScoreBadge()}
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Correct Answers</span>
                  <span className="font-semibold">{score} / {questions.length}</span>
                </div>
                <Progress value={percentage} className="h-3" />
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={resetQuiz} className="flex-1">
                  Retake Quiz
                </Button>
                <Button className="flex-1">
                  Continue Training
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Question {currentQuestion + 1} of {questions.length}</h2>
            <Badge variant="outline">
              Score: {score}/{currentQuestion}
            </Badge>
          </div>
          <Progress 
            value={((currentQuestion + 1) / questions.length) * 100} 
            className="h-2" 
          />
        </div>

        <Card className="border-primary/20 shadow-primary">
          <CardHeader>
            <CardTitle className="text-xl leading-relaxed">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left border rounded-lg transition-all ${
                    selectedAnswer === index
                      ? "border-primary bg-primary/10 shadow-primary/20"
                      : "border-border hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedAnswer === index
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground"
                    }`}>
                      {selectedAnswer === index && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-base">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center pt-6">
              <Button 
                variant="outline" 
                onClick={resetQuiz}
              >
                Exit Quiz
              </Button>
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="shadow-primary"
              >
                {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next Question"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;