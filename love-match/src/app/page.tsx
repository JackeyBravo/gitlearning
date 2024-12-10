'use client'
import PredictionForm from './components/PredictionForm';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        A!恋爱婚姻契合度预测
      </h1>
      <PredictionForm />
    </main>
  );
  
}