import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import JourneySections from './components/JourneySections.jsx';
import JourneySpine from './components/JourneySpine.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import FeatureShowcase from './components/FeatureShowcase.jsx';

export default function App() {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to main content</a><Navbar /><main id="main-content"><JourneySpine /><Hero /><ProductShowcase /><FeatureShowcase /><JourneySections /></main></div>;
}
