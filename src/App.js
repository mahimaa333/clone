import './App.css';
import CollComponent from './CollComponent'

function App() {
  return (
    <div className="App">
      <div className="coll-wrapper">
        <h4 className="coll-head">Let's Collaborate</h4>
        <div className="reveal fade-up">
        <CollComponent 
        heading='AI + RPA is what we do' 
        image='https://www.xivtech.io./rp2.jpg'
        desc='Future-Proof your business. Drive efficiency, profitability and deliver on customer experience'
        linkText='AI + RPA Automation'
        link='https://www.xivtech.io./services/AIandRPAautomation'
        />
        </div>
        <div className="reveal fade-up">
        <CollComponent 
        heading='Make Bolder Choices'
        image='https://www.xivtech.io./p1.png'
        desc='Digital focused strategies to realize market-changing ideas'
        linkText='Build Better Apps'
        link='https://www.xivtech.io./services/enterprise-apps'
        />
        </div>
        <div className="reveal fade-up">
        <CollComponent 
        heading='Innovate with Speed'
        image='https://www.xivtech.io./p2.jpg'
        desc='Create higher quality software, deliver on customer expectations and business goals'
        linkText='DevOps'
        link='https://www.xivtech.io./services/delivery-pipeline-automation'
        />
        </div>
        <div className="reveal fade-up">
        <CollComponent 
        heading='Embrace Cloud'
        image='https://www.xivtech.io./p3.jpg'
        desc='With Cloud-First accelerate innovation and optimize performance'
        linkText='Cloud Services'
        link='https://www.xivtech.io./services/cloud'
        />
        </div>
        <div className="gap">
        </div>
      </div>
    </div>
  );
}

export default App;
