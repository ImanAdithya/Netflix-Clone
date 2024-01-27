import {Main} from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

export const Home = () => {
    return (
        <>
            <Main></Main>
            <Row rowID='1' title="UpComing" fetchURL={requests.requestUpcoming}></Row>
            <Row rowID='2' title="Popular" fetchURL={requests.requestPopular}></Row>
            <Row rowID='3' title="Trending" fetchURL={requests.requestTrending}></Row>
            <Row rowID='4' title="Top Rated" fetchURL={requests.requestTopRated}></Row>
            <Row rowID='5' title="Horror" fetchURL={requests.requestHorror}></Row>
        </>
    )
}
