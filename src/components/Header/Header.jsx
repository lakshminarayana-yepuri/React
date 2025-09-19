import reactImage from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundemental','crucial','core','essential','important','key',  'necessary', 'vital', 'critical', 'indispensable', 'pivotal', 'paramount', 'significant', 'noteworthy', 'meaningful', 'substantial', 'considerable', 'weighty', 'serious', 'grave', 'momentous', 'decisive', 'deciding', 'decisive', 'deciding', 'influential', 'consequential', 'eventful', 'historic', 'historic', 'epoch-making', 'epochal', 'landmark', 'turning point', 'watershed', 'defining' ];

export function genRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}

export default function Header(){
  const description = reactDescriptions[genRandomInt(35)];
  return (
    <div>
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}