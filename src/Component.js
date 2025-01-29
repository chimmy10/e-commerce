import { useDispatch, useSelector } from "react-redux";
import {
	previous,
	next,
	click,
	increase,
	decrease,
	addToCart,
} from "./CreateSlice";

const images = [
	"images/image-product-1.jpg",
	"images/image-product-2.jpg",
	"images/image-product-3.jpg",
	"images/image-product-4.jpg",
];

const thumbnails = [
	"images/image-product-1-thumbnail.jpg",
	"images/image-product-2-thumbnail.jpg",
	"images/image-product-3-thumbnail.jpg",
	"images/image-product-4-thumbnail.jpg",
];

function Component() {
	const dispatch = useDispatch();
	const numberId = useSelector((state) => state.commerce.number);
	const activee = useSelector((state) => state.commerce.active);
	const quantitiy = useSelector((state) => state.commerce.quantitiy);

	function handleAddToCart() {
		const product = {
			name: "Fall Limited Edition Sneakers",
			price: 125.0,
			image: "images/image-product-1-thumbnail.jpg", // Replace with the actual image URL
			quantity: quantitiy,
		};

		dispatch(addToCart(product));
		console.log(product.quantity);
	}

	return (
		<div className="md:flex md:items-center md:gap-4 md:justify-center lg:gap-16">
			<div class="relative">
				{images.map((src, index) => (
					<img
						key={index}
						src={src}
						alt="Product"
						className={`w-full h-[300px] object-cover sm:rounded-lg ${
							numberId === index ? "block" : "hidden"
						}`}
					/>
				))}

				<button
					onClick={() => dispatch(previous())}
					className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-full md:hidden ${
						numberId === 0 ? "hidden" : ""
					}`}
				>
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11 1 3 9l8 8"
							stroke="#1D2026"
							strokeWidth="3"
							fill="none"
						/>
					</svg>
				</button>

				<button
					onClick={() => dispatch(next())}
					className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white px-3 py-2 rounded-full md:hidden ${
						numberId === images.length - 1 ? "hidden" : ""
					}`}
				>
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2 1l8 8-8 8"
							stroke="#1D2026"
							strokeWidth="3"
							fill="none"
						/>
					</svg>
				</button>

				<div className="items-center justify-between hidden pt-6 md:flex">
					{thumbnails.map((src, index) => (
						<button key={index} onClick={() => dispatch(click(index))}>
							<img
								src={src}
								alt="Product Thumbnail"
								className={`object-cover w-16 h-16 transition duration-300 border rounded-lg hover:brightness-75 ${
									activee === index
										? "brightness-150 border-2 border-orange-800"
										: ""
								}`}
							/>
						</button>
					))}
				</div>
			</div>

			<div className="md:w-[50%] lg:w-[45%]">
				<div className="px-6 pt-6">
					<p className="text-xs font-bold tracking-widest text-gray-600">
						SNEAKER COMPANY
					</p>
					<p className="mt-2 mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
						Fall Limited Edition Sneakers
					</p>
					<p className="text-sm font-medium text-gray-500">
						These low-profile sneakers are your perfect casual wear comapnion.
						Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer.
					</p>
				</div>
				<div className="p-6">
					<div className="flex items-center justify-between space-x-4 md:flex md:flex-col md:items-start md:space-x-0">
						<div className="flex items-end space-x-2">
							<p className="text-2xl font-bold">$125.00</p>
							<p className="w-12 text-base font-bold text-center text-white border rounded-md bg-gray-950">
								50%
							</p>
						</div>
						<p className="ml-auto text-sm font-bold text-gray-500 line-through md:mt-2">
							$250.00
						</p>
					</div>

					<div className="sm:flex sm:items-center sm:gap-5">
						<div className="my-7 py-3 sm:w-[50%] sm:px-2.5 mx-auto rounded-lg bg-slate-100 flex items-center justify-around">
							<button onClick={() => dispatch(decrease())}>
								<svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
									<defs>
										<path
											d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
											id="a"
										/>
									</defs>
									<use fill="#FF7E1B" fill-rule="nonzero" href="#a" />
								</svg>
							</button>
							<p className="px-12 font-bold">{quantitiy}</p>
							<button onClick={() => dispatch(increase())}>
								<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
									<defs>
										<path
											d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
											id="b"
										/>
									</defs>
									<use fill="#FF7E1B" fill-rule="nonzero" href="#b" />
								</svg>
							</button>
						</div>
						<button
							onClick={handleAddToCart}
							className="flex py-3.5 mx-auto w-[300px] sm:w-[60%] px-4 rounded-lg bg-orange-500 hover:bg-orange-600 transition duration-200 ease-in-out items-center space-x-3 justify-center shadow-md"
						>
							<svg
								className="w-5 h-5 text-black"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 22 20"
							>
								<path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
							</svg>
							<p className="text-sm font-bold text-black">Add to cart</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Component;
