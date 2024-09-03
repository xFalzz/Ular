const Footer = () => {
	return (
		<footer class="" id="Footer">
			<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div class="md:flex md:justify-between">
					<div class="mb-6 md:mb-0">
						<a href="" class="flex items-center">
							<img src="public/images/snake-svgrepo-com.svg" alt="" className="h-8 mr-3 relative bottom-1" />
							<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								Snake's
							</span>
						</a>
					</div>
					<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 class="mb-6 text-sm font-semibold uppercase text-white">Thanks to</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<a href="#" class="hover:underline">
										ChatGPT
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<a href="https://www.instagram.com/nawfaljr__" class="hover:underline ">
										Instagram
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/@nawfaljr" class="hover:underline">
										Youtube
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold uppercase text-white">Id</h2>
							<ul class="text-gray-400 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<a href="#" class="hover:underline">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="#" class="hover:underline">
										Terms &amp; Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
						<a href="https://www.youtube.com/@nawfaljr" class="text-gray-300 hover:text-white dark:hover:text-white">

						<svg  height="1.1em" className="relative top-[0.5%]" viewBox="0 0 576 512"><path fill="rgb(209 213 219 / var(--tw-text-opacity)" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>

							<span class="sr-only">Youtube</span>
						</a>
						<a href="https://www.instagram.com/nawfaljr__" class="text-gray-300 hover:text-white dark:hover:text-white">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="sr-only">Instagram</span>
						</a>
						<a href="https://personal-card-nopal.vercel.app/" class="text-gray-300 hover:text-white dark:hover:text-white">
						<svg xmlns="" height="1.1em" viewBox="0 0 448 512"><path fill="rgb(209 213 219 / var(--tw-text-opacity)" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
							<span class="sr-only">My Website</span>
						</a>
						<a href="https://github.com/xFalzz" class="text-gray-300 hover:text-white dark:hover:text-white">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									
								/>
							</svg>
							<span class="sr-only">GitHub account</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
