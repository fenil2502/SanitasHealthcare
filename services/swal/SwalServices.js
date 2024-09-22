import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Navigate, Routes } from "../../navigation/NavigationLib";
// import "../../styles/globals.css";

const MySwal = withReactContent(Swal)
class SwalServices {

  /** Confirm  */
  async Confirm(title, text, saveBtnText, cancelBtnText) {
    return (MySwal.fire({
      title: title,
      text: text,
      icon: 'question',
      iconHtml: '<span className="warning-body"><span className="warnning-icons"><img src="/warningtick.png"/></span>',
      showCancelButton: true,
      confirmButtonText: saveBtnText,
      cancelButtonText: cancelBtnText,
      showCloseButton: true,
      allowOutsideClick: false,
      allowEscapeKey: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        return true;
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        return false;
      }
    })
    )
  }

  // Prasad Changes
  async ConfirmDelete(title, text, saveBtnText, cancelBtnText) {
    return (MySwal.fire({
      title: title,
      text: text,
      icon: 'question',
      iconHtml: '<span className="warning-body"><span className="warnning-icons"><img src="/delete.png"/></span>',
      showCancelButton: true,
      confirmButtonText: saveBtnText,
      cancelButtonText: cancelBtnText,
      showCloseButton: false,
      allowOutsideClick: false,
      allowEscapeKey: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        return true;
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        return false;
      }
    })
    )
  }


  async Warning(text) {
    MySwal.fire({
      title: 'warning',
      text: text,
      icon: "warning",
      iconHtml: '<span className="warning-body"></span><span className="warnning-icons"><img src="/warningtick.png"/></span>',
      showCancelButton: true,
      allowOutsideClick: false,
      allowEscapeKey: true,
      reverseButtons: true
    });
  }

  async Error(text) {
    MySwal.fire({
      title: 'Oops!',
      text: text,
      icon: "warning",
      iconHtml: '<span className="warning-body"><span className="warnning-icons"><img src="/warningtick.png"/></span>',
      showCancelButton: false,
      allowOutsideClick: false,
      allowEscapeKey: true
    });
  }


  async Alert(text) {
    MySwal.fire({
      text: text,
      icon: "warning",
      iconHtml: '<span className="warning-body"></span><span className="warnning-icons"><img src="/warningtick.png"/></span>',
      showCancelButton: false,
      allowOutsideClick: false,
      allowEscapeKey: true
    });
  }

  async showLoginAlert(text) {
    MySwal.fire({
      text: text,
      icon: "warning",
      iconHtml: '<span className="warning-body"></span><span className="warnning-icons"><img src="/warningtick.png"/></span>',
      showCancelButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: "Login"
    }).then((result) => {
      if (result.value) {
        window.location = "/account/login" + "?redirect=" + window.location.hash
      }
    });
  }

  async Success(text) {
    await MySwal.fire({
      title: "Success",
      text: text,
      icon: "success",
      iconHtml: '<div class="custom-msg"><span className="sa-line success-tip"></span><span className="sucess-icons"><img src="/righttike.png"/></span></div>',
      showCancelButton: false,
      allowOutsideClick: true,
      allowEscapeKey: true
    });
  }

  async AddToCartAlert(text) {
    MySwal.fire({
      text: text,
      icon: "success",
      iconHtml: '<div class="custom-msg"><span className="sa-line success-tip"></span><span className="sucess-icons"><img src="/righttike.png"/></span></div>',
      showCancelButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: "View Cart",
      cancelButtonText: "Continute Shopping",
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Navigate(Routes.ShoppingCart);
      }
    });
  }

  async Toaster(text) {
    MySwal.fire({
      text: text,
      toast: true,
      icon: "success",
      iconHtml: '<div class="custom-msg"><span className="sucess-icons"><img src="/righttike.png"/></span><div>',
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    });
  }


  async ThankYou(title, text) {
    MySwal.fire({
      title: title,
      text: text,
      icon: "info",
      iconHtml: '<span className="sucess-icons"><img src="/righttike.png"/></span>',
      showCancelButton: false,
      allowOutsideClick: false,
      allowEscapeKey: true
    });
  }

  async SuccessWithAction(text, saveBtnText) {
    return (MySwal.fire({
      title: "Success",
      text: text,
      icon: 'success',
      iconHtml: '<div class="custom-msg"><span className="sa-line success-tip"></span><span className="sucess-icons"><img src="/righttike.png"/></span><div>',
      showCancelButton: false,
      confirmButtonText: saveBtnText,
      showCloseButton: false,
      allowOutsideClick: false,
      allowEscapeKey: true,
    }).then((result) => {
      if (result.value) {
        return true;
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        return false;
      }
    })
    )
  }

  async ErrorWithAction(text, saveBtnText) {
    return (MySwal.fire({
      title: "",
      text: text,
      icon: 'warning',
      iconHtml: '<span className="warning-body"></span><span className="warnning-icons"><img src="/warningtick.png"/></span>',
      showCancelButton: false,
      confirmButtonText: saveBtnText,
      showCloseButton: false,
      allowOutsideClick: false,
      allowEscapeKey: true,
    }).then((result) => {
      if (result.value) {
        return true;
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        return false;
      }
    })
    )
  }
  async WarningWithAction(text, saveBtnText) {
    return (MySwal.fire({
      title: 'warning',
      text: text,
      icon: "warning",
      iconHtml: '<span className="warning-body"></span><span className="warnning-icons"><img src="/warningtick.png"/></span>',
      showCancelButton: true,
      confirmButtonText: saveBtnText,
      showCloseButton: false,
      allowOutsideClick: false,
      allowEscapeKey: true,
    }).then((result) => {
      if (result.value) {
        return true;
      } else if (result.dismiss === MySwal.DismissReason.cancel) {
        return false;
      }
    })
    )
  }
}

export default SwalServices;
