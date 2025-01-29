import { useSelector, useDispatch } from "react-redux";
import { isCartVisible, remove } from "./CreateSlice";

function Cartfull() {
	const cart = useSelector((state) => state.commerce.cart); // Cart items array
	const dispatch = useDispatch();

	// Assuming each product has a price property
	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div className="max-w-xs pb-4 mx-auto mb-4 bg-white border rounded-lg shadow-lg">
			<div className="flex justify-between px-5 pt-4">
				<p className="text-base font-bold text-gray-800">Cart</p>
				<button
					onClick={() => dispatch(isCartVisible())}
					className="text-sm text-gray-500 hover:text-gray-800"
				>
					Close
				</button>
			</div>
			<hr className="my-4 border-t border-gray-300" />
			{cart.length > 0 ? (
				<>
					{cart.map((item, index) => (
						<div
							key={index}
							className="flex items-center justify-between px-5 py-3 space-x-3"
						>
							<img
								src={item.image} // Dynamic image for each cart item
								alt={item.name}
								className="object-cover w-12 h-12 rounded-md"
							/>
							<div>
								<p className="mb-1 text-sm text-gray-500">{item.name}</p>
								<p className="text-sm text-gray-500">
									${item.price.toFixed(2)} x {item.quantity}{" "}
									<span className="font-bold text-black">
										${(item.price * item.quantity).toFixed(2)}
									</span>
								</p>
							</div>
							<button onClick={() => dispatch(remove())}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="gray"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
									/>
								</svg>
							</button>
						</div>
					))}
					<div className="flex justify-between px-5 pt-6 pb-3">
						<p className="text-sm font-bold text-gray-800">Total:</p>
						<p className="text-sm font-bold text-black">
							${totalPrice.toFixed(2)}
						</p>
					</div>
					<div className="px-5">
						<button className="w-full py-3.5 px-4 rounded-lg bg-orange-500 hover:bg-orange-600 transition duration-200 ease-in-out shadow-md">
							<p className="text-sm font-bold text-black">Checkout</p>
						</button>
					</div>
				</>
			) : (
				<div className="px-5 py-6 text-center">
					<p className="text-sm text-gray-500">Your cart is empty</p>
				</div>
			)}
		</div>
	);
}

export default Cartfull;
