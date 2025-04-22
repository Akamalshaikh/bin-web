import { useData } from '../context/DataContext';
import BinCard from '../components/BinCard';
import Promo from '../components/Promo';
import '../styles/BinCard.css';

const Home = () => {
  const { bins, promos } = useData();
  
  return (
    <div className="container">
      <h1 className="text-center mb-lg" style={{ color: 'var(--primary-color)' }}>
        Daily b!ns by @Glllaxy
      </h1>
      
      <p className="text-center mb-lg">
        Get <a href="https://t.me/dailyb1ns" target="_blank" rel="noopener">top quality method free here</a>
      </p>
      
      {promos.length > 0 && <Promo />}
      
      <div className="bins-grid">
        {bins.map((bin) => (
          <BinCard key={bin.id} bin={bin} />
        ))}
      </div>
    </div>
  );
};

export default Home;