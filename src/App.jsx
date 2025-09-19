import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent=<h1>Please select a topic to see an example.</h1>;
  if(selectedTopic){
    tabContent=(
      <div id='tab-content'>
        <h1>{EXAMPLES[selectedTopic].title}</h1>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }


  function handleClick(selected) {
    setSelectedTopic(selected);
    // console.log(selected);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((concept)=><CoreConcepts key={concept.title} {...concept} />)}
          </ul>
          {/* <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul> */}
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick('components')} >Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')} >Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick('state')} >State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
