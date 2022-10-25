import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Success = () => {
  return Swal.fire({
    title: "Task save!",
    text: "Do you want to continue",
    icon: "success",
    confirmButtonText: "Cool",
  });
};

const Error = () => {
  return Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Success,
  Error
};
