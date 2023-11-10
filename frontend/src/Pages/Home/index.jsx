import './assets/style.scss'
import Header from '../../Containers/Header'
import Bannercontent from '../../Containers/mainBanner';
import InfoCard from '../../Components/InfoCard';
import Footer from '../../Containers/Footer'

let Home = () => {


  return (
    <div className="main">
      <Header />
        <section className='main'>
            <Bannercontent />
            <InfoCard />
          <Footer />
        </section>
    </div>
  );
}
export default Home;
