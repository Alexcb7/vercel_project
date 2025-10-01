import Lightning from './components/Lightning'

function App() {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
      <Lightning
        hue={220}
        xOffset={0}
        speed={1}
        intensity={1}
        size={1}
      />
    </div>
  )
}

export default App

import SplitText from './components/SplitText';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

<SplitText
  text="Hello, GSAP!"
  className="text-2xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>