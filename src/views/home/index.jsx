import { useHistory } from 'react-router-dom';
import MainTemplate from '../../layouts/main.jsx';
import DynamicPresentation from '../../components/home/dynamicPresentation/index.jsx';
import NextPage from '../../components/shared/next-page/index.jsx';

function Home() {
    const history = useHistory();
    if(window.localStorage.mawsitename.length) history.push('/about-me');

    return(
        <MainTemplate>
            <div className="pt-10">
                <DynamicPresentation />
                <NextPage title="Continuar" link="/about-me" />
            </div>
        </MainTemplate>
    );
};

export default Home;