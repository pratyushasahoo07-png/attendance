document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector("#button button");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        const date = document.querySelector("input[type='date']").value;
        const subject = document.querySelector("input[type='text']").value;

        let presentStudents = [];
        const rows = document.querySelectorAll("table tr");

        rows.forEach((row, index) => {
            if (index === 0) return; 

            const cells = row.querySelectorAll("td");
            if (cells.length > 0) {
                const regNo = cells[1].innerText.trim();
                const name = cells[2].innerText.trim();
                const present = cells[3].querySelector("input[type='checkbox']").checked;

                if (present) {
                    presentStudents.push({
                        regNo: regNo,
                        name: name
                    });
                }
            }
        });

    
        console.log("Date:", date);
        console.log("Subject:", subject);
        console.log("Present Students:", presentStudents);
        if (presentStudents.length > 0) {
            let list = presentStudents.map(s => `${s.regNo} - ${s.name}`).join("\n");
            alert("Present Students:\n" + list);
        } else {
            alert("No students marked present!");
        }
    });
});