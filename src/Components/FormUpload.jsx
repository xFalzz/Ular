import React, { useState } from "react"

const ImageUploadForm = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (event) => {
    setImageUpload(event.target.files[0])
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file))
      onChange(file)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Upload with Preview</h1>
      <form>
        <div className="flex mb-4">
          <input type="file" id="imageUpload" className="hidden" onChange={handleImageChange} />
          <label
            htmlFor="imageUpload"
            className="cursor-pointer border-dashed border-2 border-gray-400 rounded-lg p-4 w-72 h-auto flex items-center justify-center">
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
                <p className="text-gray-600">Klik untuk memilih gambar</p>
              </div>
            )}
          </label>
        </div>
      </form>
    </div>
  )
}

export default ImageUploadForm;
