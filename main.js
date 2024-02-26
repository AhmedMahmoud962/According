/// explain for code in video 18 ===> 12m
const pluses = document.querySelectorAll(".plus");

pluses.forEach(item => {
    item.addEventListener("click", (eo) => {

        const paragraph = eo.target.parentElement.parentElement.getElementsByClassName("paragraph")[0];

        // used toggle to change  add,remove
        paragraph.classList.toggle("active");

        if (paragraph.classList.contains("active")) {
            paragraph.style.height = `${paragraph.scrollHeight}px`
        } else {

            paragraph.style.height = `0`

        }
        /// + & -
        item.classList.toggle("hide-plus")
        if (item.classList.contains("hide-plus")) {
            item.innerText = "ــ"
            item.style.transform = "translateY(-8px)"
        } else {
            item.innerText = "+"
            item.style.transform = "translateY(0)"
        }

    })
});