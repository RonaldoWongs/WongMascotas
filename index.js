const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const payButton = document.querySelector(".payButton");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

payButton.addEventListener("click", () => {
  payment.style.display = "none";

  Swal.fire({
    title: '¡Gracias por tu donación!',
    text: 'Tu apoyo es muy valioso para nosotros.',
    icon: 'success',
    confirmButtonText: 'Cerrar',
    width: 600,
    padding: '3em',
    customClass: {
      title: 'custom-title',
      content: 'custom-content',
      popup: 'custom-popup'
    },
    background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://sweetalert2.github.io/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    position: 'center'
  });
});
