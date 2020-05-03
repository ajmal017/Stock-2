import React from 'react'
import { useSelector } from 'react-redux'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Toaster = () => {
    const message = useSelector(state => state.errorReducer.message)
    message.map(item => toast.error(item, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    }))

    return (
        < ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            data-testid="toast" />
    )
}

export default Toaster