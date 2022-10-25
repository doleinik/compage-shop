import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import * as PropTypes from "prop-types";

function Pagination(props) {
    return null;
}

Pagination.propTypes = {
    shape: PropTypes.string,
    count: PropTypes.number,
    variant: PropTypes.string
};

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
    );
}

export default App;
