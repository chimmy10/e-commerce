import Cartfull from "./Cartfull";
import Component from "./Component";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { setIsMobileMenuOpen } from "./CreateSlice";

function App() {
	const visible = useSelector((state) => state.commerce.cartVisible);
	const isMobileMenuOpen = useSelector(
		(state) => state.commerce.isMobileMenuOpen
	);
	const dispatch = useDispatch();

	return (
		<div className="relative lg:px-28">
			<NavBar />

			{/* Main container for the components */}
			<div className="relative sm:px-6 md:px-0">
				{/* Sliding Navigation (Overlay) */}
				<div
					className={`fixed top-0 left-0 h-full bg-gray-100 text-black w-64 transform transition-transform duration-300 z-30 ${
						isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className="p-7">
						<button onClick={() => dispatch(setIsMobileMenuOpen())}>
							<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
								<path
									d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
									fill="#69707D"
									fillRule="evenodd"
								/>
							</svg>
						</button>
						<button className="block py-3 mt-20 text-lg font-bold hover:text-gray-400">
							Collections
						</button>
						<button className="block py-3 text-lg font-bold hover:text-gray-400">
							Men
						</button>
						<button className="block py-3 text-lg font-bold hover:text-gray-400">
							Women
						</button>
						<button className="block py-3 text-lg font-bold hover:text-gray-400">
							About
						</button>
						<button className="block py-3 text-lg font-bold hover:text-gray-400">
							Contact
						</button>
					</div>
				</div>

				{/* Background Dim Effect */}
				<div
					className={`absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ${
						isMobileMenuOpen
							? "opacity-50 z-20"
							: "opacity-0 z-0 pointer-events-none"
					}`}
				></div>

				{/* Main Content */}
				<div className="relative z-10 transition-all duration-300">
					<Component />

					{/* Conditionally render Cartfull */}
					{visible && (
						<div className="absolute top-0 left-0 z-40 w-full h-full p-5 bg-white bg-opacity-75">
							<Cartfull />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
