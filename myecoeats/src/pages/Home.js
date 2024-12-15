import Banner from "../components/Banner";
import HomeMessage from "../components/HomeMessage";
import TopPicks from "../components/TopPicks";


const Home = () => {
    return ( 
        <div className="vanRegular">
            <Banner/>
            <HomeMessage/>
            <TopPicks/>
        </div>
    );
}
 
export default Home;