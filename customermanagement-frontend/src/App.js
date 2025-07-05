import AddCustomerComponent from "./component/AddCustomerComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListcustomerComponent from "./component/ListCustomerComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListcustomerComponent />} />
          <Route path="/customer" element={<ListcustomerComponent />} />
          <Route path="/add-customer" element={<AddCustomerComponent />} />
          <Route path="/add-customer/:id" element={<AddCustomerComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
