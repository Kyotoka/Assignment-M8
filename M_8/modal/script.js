document.addEventListener("DOMContentLoaded", function () {
    let openModalBTN = document.getElementById("openmodalBtn"); // lowercase
    let closeModalBTN = document.getElementById("closemodalBtn"); // lowercase
    let modal = document.getElementById("mymodal"); // lowercase

    // open the modal
    openModalBTN.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // close the modal
    closeModalBTN.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // close the modal if user clicks outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
