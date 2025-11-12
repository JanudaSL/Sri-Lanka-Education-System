import Header from '../app/Components/header';
import IntroductionSection from '../app/Components/introduction';
import Strengths  from '../app/Components/Strengths';
import Kannangara  from '../app/Components/Kannangara';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <IntroductionSection />
      <Strengths />
      <Kannangara />
      {/* Additional page content can go here */}
    
    
    </main>
  );
}