    // /* Created By GLCZ7 - NGUYEN TIEN MINH 
    // Vui lòng không sao chép , có sao chép thì cre vào */
const oclockInput = document.getElementById("oclockInput");
        const clockDiv = document.querySelector(".clock");
        oclockInput.addEventListener("input", function() {
            const inputClock = oclockInput.value;
            clockDiv.textContent = inputClock;
        }); 

const moneyInput = document.getElementById("moneyInput");
        const moneyDiv = document.querySelector(".money");
        moneyInput.addEventListener("input",function() {
            const inputMoney = moneyInput.value;
            moneyDiv.textContent = inputMoney;
        });
const magiaodichInput = document.getElementById("magiaodichInput");
        const magiaodichDiv = document.querySelector(".magiaodich");
        magiaodichInput.addEventListener("input",function() {
            const inputmagiaodich = magiaodichInput.value;
            magiaodichDiv.textContent = inputmagiaodich;
        });

// const nguoinhanInput = document.getElementById("nguoinhanInput");
//         const nguoinhanDiv = document.querySelector(".nguoinhan");
//         nguoinhanInput.addEventListener("input",function() {
//             const inputnguoinhan = nguoinhanInput.value;
//             nguoinhanDiv.textContent = inputnguoinhan;
//         });
const nguoinhanInput = document.getElementById("nguoinhanInput");
const nguoinhanDiv = document.querySelector(".nguoinhan");
const errorMessage = document.getElementById("error-message");
nguoinhanInput.addEventListener("input", function() {
    const inputValue = nguoinhanInput.value.trim(); 
    if (inputValue === "NGUYEN TIEN MINH") {
        errorMessage.style.display = "block";
        nguoinhanDiv.textContent = "Gửi bill thật đi.";
        nguoinhanInput.setCustomValidity("Gửi bill thật đi.");
    } else {
        errorMessage.style.display = "none";
        nguoinhanDiv.textContent = inputValue;
        nguoinhanInput.setCustomValidity(""); 
    }
});

const stknguoinhanInput = document.getElementById("stknguoinhanInput");
const stknguoinhanDiv = document.querySelector(".stknguoinhan");
const errorMessage2 = document.getElementById("error-message2");
        stknguoinhanInput.addEventListener("input", function() {
            const inputValue = stknguoinhanInput.value.trim(); 
            if (inputValue === "64642942007" || inputValue ==="0788071683") {
                errorMessage2.style.display = "block";
                stknguoinhanDiv.textContent = "Gửi bill thật đi.";
                stknguoinhanInput.setCustomValidity("Gửi bill thật đi.");
            } else {
                errorMessage2.style.display = "none";
                stknguoinhanDiv.textContent = inputValue;
                stknguoinhanInput.setCustomValidity(""); 
            }
        });
const nganhangInput = document.getElementById("nganhangInput");
        const nganhangDiv = document.querySelector(".nganhang");
        nganhangInput.addEventListener("input",function() {
            const inputnganhang = nganhangInput.value;
            nganhangDiv.textContent = inputnganhang;
        });

const anhnganhangInput = document.getElementById("anhnganhangInput");
        const anhnganhangPreview = document.getElementById("anhnganhangPreview");

        anhnganhangInput.addEventListener("change", function() {
            const file = anhnganhangInput.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function(e) {
                    anhnganhangPreview.src = e.target.result;
                };

                reader.readAsDataURL(file);
            } else {
                anhnganhangPreview.src = "";
            }
        });

const taikhoannguonInput = document.getElementById("taikhoannguonInput");
        const taikhoannguonDiv = document.querySelector(".taikhoannguon");
        taikhoannguonInput.addEventListener("input",function() {
            const inputtaikhoannguon = taikhoannguonInput.value;
            taikhoannguonDiv.textContent = inputtaikhoannguon;
        });

const tentaikhoannguonInput = document.getElementById("tentaikhoannguonInput");
        const tentaikhoannguonDiv = document.querySelector(".tentaikhoannguon");
        tentaikhoannguonInput.addEventListener("input",function() {
            const inputtentaikhoannguon = tentaikhoannguonInput.value;
            tentaikhoannguonDiv.textContent = inputtentaikhoannguon;
        });

const noidungckInput = document.getElementById("noidungckInput");
        const noidungckDiv = document.querySelector(".noidungck");
        noidungckInput.addEventListener("input",function() {
            const inputnoidungck = noidungckInput.value;
            noidungckDiv.textContent = inputnoidungck;
        });

const thoigianInput = document.getElementById("thoigianInput");
        const thoigianDiv = document.querySelector(".thoigian");
        thoigianInput.addEventListener("input",function() {
            const inputthoigian = thoigianInput.value;
            thoigianDiv.textContent = inputthoigian;
        });


function captureAndDownload() {

    const captureDiv = document.querySelector('.bill');

    html2canvas(captureDiv).then(function(canvas) {
        // Tạo một liên kết để tải xuống hình ảnh
        const downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL();
        downloadLink.download = 'FakeBill_GLCZ7.png'; 
        downloadLink.click(); 
    });
}
