import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalContext"
const Modal = () => {
    const { modalPhoto, setModalPhoto } = useContext(GlobalContext);
    return (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalPhoto("")}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalPhoto}
              alt="Preview"
              className="max-w-full max-h-[90vh] rounded-md shadow-lg"
            />
            <button
              onClick={() => setModalPhoto("")}
              className="absolute top-2 right-2 text-white p-2"
            >
              ✕
            </button>
          </div>
        </div>
    )
}
export default Modal;