import React, { useState, useEffect } from "react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { storage } from "../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from "uuid"
import PaginationButton from "./Pagination"
import Swal from "sweetalert2"

function Gallery() {
	const [imageUpload, setImageUpload] = useState(null)
	const [imageList, setImageList] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const imagesPerPage = 6 // Number of images per page
	const maxUploadSizeInBytes = 2 * 1024 * 1024 // 2MB

	const getUploadedImagesCount = () => {
		const uploadedImages = localStorage.getItem("uploadedImages")
		return uploadedImages ? parseInt(uploadedImages) : 0
	}

	const incrementUploadedImagesCount = () => {
		const uploadedImages = getUploadedImagesCount()
		localStorage.setItem("uploadedImages", uploadedImages + 1)
	}

	const resetUploadedImagesCount = () => {
		localStorage.removeItem("uploadedImages")
	}

	const imageListRef = ref(storage, "images/")

	const uploadImage = () => {
		if (imageUpload == null) return
		const uploadedImagesCount = getUploadedImagesCount()

		if (uploadedImagesCount >= 5) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Im sorry, you can only upload 5 photos.",
			})
			return
		}

		if (imageUpload.size > maxUploadSizeInBytes) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "The maximum size for a photo is 2MB",
			})
			setSelectedImage(null) // Reset preview image if any
			return
		}

		const imageRef = ref(storage, `images/${imageUpload.name}-${uuidv4()}`)
		uploadBytes(imageRef, imageUpload)
			.then((snapshot) => {
				getDownloadURL(snapshot.ref)
					.then((url) => {
						setImageList((prev) => [...prev, url])
						incrementUploadedImagesCount()
					})
					.catch((error) => {
						console.log(error)
					})
				setSelectedImage(null) // Reset selected image
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Image Uploaded Successfully",
					showConfirmButton: false,
					timer: 1500,
					customClass: {
						popup: "my-custom-popup", // Atur kelas khusus untuk popup
						title: "my-custom-title", // Atur kelas khusus untuk judul
						icon: "my-custom-icon", // Atur kelas khusus untuk ikon
					},
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}

	useEffect(() => {
		listAll(imageListRef)
			.then((response) => {
				const imagePromises = response.items.map((item) => getDownloadURL(item))
				Promise.all(imagePromises)
					.then((urls) => {
						setImageList(urls)
					})
					.catch((error) => {
						console.log(error)
					})
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	const getPaginatedImages = () => {
		const indexOfLastImage = currentPage * imagesPerPage
		const indexOfFirstImage = indexOfLastImage - imagesPerPage
		return imageList.slice(indexOfFirstImage, indexOfLastImage)
	}

	const paginatedImages = getPaginatedImages()

	const handlePageChange = (event, newPage) => {
		setCurrentPage(newPage)
	}

	const [selectedImage, setSelectedImage] = useState(null)

	const handleImageChange = (event) => {
		setImageUpload(event.target.files[0])
		const file = event.target.files[0]
		if (file) {
			setSelectedImage(URL.createObjectURL(file))
		}
	}

	return (
		<div>
			<div className="md:flex md:px-[20%] px-0 flex-col md:flex-row relative md:bottom-0 bottom-5">
				<div className="md:w-1/2 w-[100%] md:px-0 px-[19%] text-white flex justify-center items-center">
					<div className="md:text-left text-center relative md:left-[4.5%] md:bottom-10">
						<h1 className="text-3xl md:text-5xl font-bold mb-4 w-full">
							Upload Your Snake's Best Shots!
						</h1>
					</div>
				</div>

				<div className="md:w-1/2 w-full flex justify-center items-center flex-col">
					<div className=" mx-auto p-4">
						<form>
							<div className="flex mb-4">
								<input
									type="file"
									id="imageUpload"
									className="hidden"
									onChange={handleImageChange}
								/>
								<label
									htmlFor="imageUpload"
									className="cursor-pointer border-dashed border-2 border-gray-400 rounded-lg p-4 w-full h-auto flex items-center justify-center">
									{selectedImage ? (
										<div className="w-full h-full overflow-hidden">
											<img
												src={selectedImage}
												alt="Preview Gambar"
												className="w-full h-full object-cover"
											/>
										</div>
									) : (
										<div className="text-center px-5 py-8">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												className="h-12 w-12 mx-auto text-gray-400">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 6v6m0 0v6m0-6h6m-6 0H6"
												/>
											</svg>
											<p className="text-gray-600">click to select an image</p>
										</div>
									)}
								</label>
							</div>
						</form>
					</div>

					<button
						type="button"
						className="py-2.5 w-[60%] mb-0 md:mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						onClick={uploadImage}>
						UPLOAD
					</button>
				</div>
			</div>

			<br />
			<b
				className="text-[48px] mt-0  text-white  pt-5 opacity-[90%] flex items-center justify-center border-t-[8px] border-[#232323] shadow-lg"
				id="Gallery">
				Gallery
			</b>

			<div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-10" id="ContainerGallery">
				<div className="-m-1 flex flex-wrap md:-m-2">
					<div className="flex w-1/2 flex-wrap">
						<div className="w-1/2 p-1 md:p-2" id="ContainerImgGallery">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={paginatedImages[0]}
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2" id="ContainerImgGallery">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={paginatedImages[1]}
							/>
						</div>
						<div className="w-full p-1 md:p-2" id="ContainerImgGallery">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={paginatedImages[2]}
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1 md:p-2" id="ContainerImgGallery">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={paginatedImages[3]}
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2" id="ContainerImgGallery">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={paginatedImages[4]}
							/>
						</div>
						<div className="w-1/2 p-1 md:p-2" id="ContainerImgGallery">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src={paginatedImages[5]}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="ButtonPagination">
				<div className="pagination-container">
					<div className="pagination-wrapper">
						<PaginationButton
							currentPage={currentPage}
							totalPages={Math.ceil(imageList.length / imagesPerPage)}
							onPageChange={handlePageChange}
						/>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
	)
}

const PaginationLink = () => {
	return (
		<MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
			<Routes>
				<Route path="*" element={<Gallery />} />
			</Routes>
		</MemoryRouter>
	)
}

export default PaginationLink
