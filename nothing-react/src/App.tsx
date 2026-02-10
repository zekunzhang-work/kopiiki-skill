import { Preloader } from './components/layout/Preloader';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroHomeA } from './components/sections/HeroHomeA';
import { AboutHomeA } from './components/sections/AboutHomeA';
import { HalvesHomeA } from './components/sections/HalvesHomeA';
import { TabsHomeA } from './components/sections/TabsHomeA';
import { ColumnHomeA } from './components/sections/ColumnHomeA';
import { SingleTestimonialHomeA } from './components/sections/SingleTestimonialHomeA';
import { LayoutsHomeA } from './components/sections/LayoutsHomeA';
import { StatsHomeA } from './components/sections/StatsHomeA';
import { FeaturesHomeA } from './components/sections/FeaturesHomeA';
import { CtaB } from './components/sections/CtaB';
import './App.css';

function App() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main>
        <HeroHomeA />
        <AboutHomeA />
        <HalvesHomeA />
        <TabsHomeA />
        <ColumnHomeA variant="a" />
        <SingleTestimonialHomeA />
        <LayoutsHomeA />
        <StatsHomeA />
        <FeaturesHomeA />
        <ColumnHomeA variant="b" />
        <CtaB />
      </main>
      <Footer />
    </>
  );
}

export default App;
