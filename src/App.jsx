import './App.css'
import ListNews from './components/ListNews/ListNews'
import { NewProvider } from "./context/NewState"
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/listNews" element={
            <NewProvider>
              <ListNews />
            </NewProvider>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
