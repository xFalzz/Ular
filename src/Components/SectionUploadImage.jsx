/* import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const SectionUploadImage = () => {


  return (
    <div className="flex h-auto w-full px-[20%]">
      <div className="w-1/2  flex flex-col justify-center items-center text-white opacity-[90%]">
        <div className="text-left relative md:left-[4.5%] md:bottom-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4  w-full">Unggah Gambar Kucing Anda</h1>
          <button
            type="button"
            className="py-2.5 px-32 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={handleUpload}
          >
            UPLOAD
          </button>
        </div>
      </div>
      <div className=" relative md:left-[5%] md:bottom-[3.5em]">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Image Upload with Preview</h1>
          <form>
            <div className="flex mb-4">
              <input type="file" id="imageUpload" className="hidden" onChange={handleImageChange} />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer border-dashed border-2 border-gray-400 rounded-lg p-4 w-72 h-auto flex items-center justify-center"
              >
                {selectedImage ? (
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={URL.createObjectURL(selectedImage)}
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
                      className="h-12 w-12 mx-auto text-gray-400"
                    >
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
      </div>
    </div>
  );
};

export default SectionUploadImage;
 */
