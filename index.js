let bookname = document.getElementById("bookname");
let author = document.getElementById("author");
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let tbody = document.getElementById("tbody");
let details = document.getElementById("details");


details.addEventListener('submit', detailsubmit);


function detailsubmit(e) {
    if (bookname.value != "" && author.value != "") {
        let type
        if (r1.checked) {
            type = "Fiction"
        }
        else if (r2.checked) {
            type = "Programming";
        }
        else if (r3.checked) {
            type = "Cooking";
        }

        tbody.innerHTML += `<tr>
                                <td>${bookname.value}</td>
                                <td>${author.value}</td>
                                <td>${type}</td>
                            </tr>`

        let box = {
            bookname: bookname.value,
            author: author.value,
            radio: type
        }
        console.log(box)

        bookname.value = "";
        author.value = "";


    }

    e.preventDefault();
}
