import Swal from "sweetalert2";
function Sign() {
  const handleClick = () => {
    Swal.fire({
      title: 'Soon',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  return(
    <div>
    <button onClick={handleClick}>Sign</button>
  </div>
  )
}

export default Sign