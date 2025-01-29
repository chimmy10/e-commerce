// import { useDispatch, useSelector } from "react-redux";
// import { previous, next } from "./CreateSlice";

// function BackgroundCopy() {
// 	const dispatch = useDispatch();
// 	const numberId = useSelector((state) => state.commerce.number);
// 	console.log(numberId);

// 	return (
// 		<div>
// 			<div class="relative">
// 				<img
// 					src="images/image-product-1.jpg"
// 					alt="Avatar"
// 					className={`w-full h-[300px] object-cover sm:rounded-lg ${
// 						numberId === 0 ? "block" : "hidden"
// 					}`}
// 					id="0"
// 				/>
// 				<img
// 					src="images/image-product-2.jpg"
// 					alt="Avatar"
// 					className={`w-full h-[300px] object-cover sm:rounded-lg ${
// 						numberId === 1 ? "block" : "hidden"
// 					}`}
// 					id="1"
// 				/>
// 				<img
// 					src="images/image-product-3.jpg"
// 					alt="Avatar"
// 					className={`w-full h-[300px] object-cover sm:rounded-lg ${
// 						numberId === 2 ? "block" : "hidden"
// 					}`}
// 					id="2"
// 				/>
// 				<img
// 					src="images/image-product-4.jpg"
// 					alt="Avatar"
// 					className={`w-full h-[300px] object-cover sm:rounded-lg ${
// 						numberId === 3 ? "block" : "hidden"
// 					}`}
// 					id="4"
// 				/>

// 				<button
// 					onClick={() => dispatch(previous())}
// 					class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-[90%] md:hidden"
// 				>
// 					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
// 						<path
// 							d="M11 1 3 9l8 8"
// 							stroke="#1D2026"
// 							stroke-width="3"
// 							fill="none"
// 							fill-rule="evenodd"
// 						/>
// 					</svg>
// 				</button>

// 				<button
// 					onClick={() => dispatch(next())}
// 					class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-[90%] md:hidden"
// 				>
// 					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
// 						<path
// 							d="m2 1 8 8-8 8"
// 							stroke="#1D2026"
// 							stroke-width="3"
// 							fill="none"
// 							fill-rule="evenodd"
// 						/>
// 					</svg>
// 				</button>
// 				<div className="items-center justify-between hidden pt-6 md:flex">
// 					<img
// 						src="images/image-product-1-thumbnail.jpg"
// 						alt="Avatar"
// 						class="w-16 border rounded-lg h-16 object-cover"
// 					/>
// 					<img
// 						src="images/image-product-2-thumbnail.jpg"
// 						alt="Avatar"
// 						class="w-16 border rounded-lg h-16 object-cover"
// 					/>
// 					<img
// 						src="images/image-product-3-thumbnail.jpg"
// 						alt="Avatar"
// 						class="w-16 border rounded-lg h-16 object-cover"
// 					/>
// 					<img
// 						src="images/image-product-4-thumbnail.jpg"
// 						alt="Avatar"
// 						class="w-16 border rounded-lg h-16 object-cover"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default BackgroundCopy;
