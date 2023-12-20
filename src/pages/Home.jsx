import { Link } from "react-router-dom";

import deposit from "../assets/1.png";
import withdraw from "../assets/2.png";
import wallet from "../assets/3.png";
import event from "../assets/4.png";
import about from "../assets/5.png";
import rules from "../assets/6.png";
import description from "../assets/7.png";
import news from "../assets/8.png";

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto flex">
      <Link className="flex flex-col" to="/deposit">
        <img className="w-12 h-12" src={deposit} alt="" />
        {/* <h1>Deposit</h1> */}
      </Link>
      <Link className="flex flex-col" to="/withdraw">
        <img className="w-12 h-12" src={withdraw} alt="" />
        {/* <h1>Withdraw</h1> */}
      </Link>
      <Link className="flex flex-col" to="/wallet-management">
        <img className="w-12 h-12" src={wallet} alt="" />
        {/* <h1>Wallet Management</h1> */}
      </Link>
      <Link className="flex flex-col" to="/event">
        <img className="w-12 h-12" src={event} alt="" />
        {/* <h1>Events</h1> */}
      </Link>
      <Link className="flex flex-col" to="/about">
        <img className="w-12 h-12" src={about} alt="" />
        {/* <h1>About Us</h1> */}
      </Link>
      <Link className="flex flex-col" to="/rules">
        <img className="w-12 h-12" src={rules} alt="" />
        {/* <h1>Rules</h1> */}
      </Link>
      <Link className="flex flex-col" to="/description-shares">
        <img className="w-12 h-12" src={description} alt="" />
        {/* <h1>Description of Shares</h1> */}
      </Link>
      <Link className="flex flex-col" to="/news">
        <img className="w-12 h-12" src={news} alt="" />
        {/* <h1>News</h1> */}
      </Link>
    </div>
  );
}
