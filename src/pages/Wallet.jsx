import { Link } from "react-router-dom";

function Wallet() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  mb-4 text-slate-800">Wallet</h1>
      <p className="mb-4 text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat
        nam praesentium animi, molestias ad, sed omnis magnam, recusandae maxime
        numquam molestiae. Voluptas soluta sequi quod explicabo incidunt
        reiciendis quia.
      </p>
      <p className="mb-4 text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nihil
        voluptas error unde velit excepturi, animi adipisci repellendus earum
        iure, eligendi voluptatibus atque possimus ab odit repellat praesentium?
        Ad molestias quis, rerum facilis quisquam incidunt alias veniam,
        consequatur nam natus, rem quia!
      </p>
      <p className="mb-8 text-slate-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque maxime
        enim cumque aperiam magni quis aliquid vitae ea ullam sunt accusamus
        quod quos dignissimos, veritatis nesciunt ex eveniet, harum obcaecati!
      </p>

      <Link to="/add-wallet">
        <span className="bg-slate-700 text-white px-6 py-3 mt-9 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Add Wallet
        </span>
      </Link>
    </div>
  );
}

export default Wallet;
