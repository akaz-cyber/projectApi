import { baseURL } from "../conection/const";
import axios from "axios";
import Swal from "sweetalert2";

const successAlert = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'The data is managed successfully',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.href = "/";
    });
  };
  
  const errorAlert = (err) => {
    Swal.fire({
      title: "Error",
      text: err,
      icon: "error",
      confirmButtonText: "OK",
      confirmButtonClass: "btn btn-primary",
    });
  };