import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Wallet from "./pages/Wallet";
import Rules from "./pages/Rules";
import Description from "./pages/Description";
import News from "./pages/News";
import Event from "./pages/Event";
import AddWallet from "./pages/AddWallet";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/wallet-management" element={<Wallet />} />
          <Route path="/event" element={<Event />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/description-shares" element={<Description />} />
          <Route path="/news" element={<News />} />
          <Route path="/add-wallet" element={<AddWallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
