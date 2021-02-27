const boxes = document.querySelectorAll(".box");
const h1el = document.querySelector(".h1el");

window.addEventListener("scroll", checkBoxes);

/* checkBoxes(); */

function checkBoxes() {

    const triggerBottom = (window.innerHeight / 5 * 4);

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; //Nesnenin ekrandaki konumunu bize veriyor.

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        }
        else {
            box.classList.remove("show");
        }


    });



}