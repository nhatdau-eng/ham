        function feetToMeter(feet) { return feet*0.305;}
        function meterToFeet(meter) { return meter * 3.279;}
        function layGiaNhap() {
            return Number(document.getElementById("soNhap").value);
        }

        function hienThiKetQua(text) {
            document.getElementById("ketQua").innerText = text;
        }

        function chuyenFeetSangMeter() {
            let so = layGiaNhap();
            if (isNaN(so) || so === 0) {
                hienThiKetQua(" Vui lòng nhập số hợp lệ!");
                return;
            }
            hienThiKetQua(`✅ ${so} feet = ${feetToMeter(so).toFixed(4)} meter`);
        }
        function chuyenMeterSangFeet() {
            let so = layGiaNhap();
            if (isNaN(so) || so === 0) {
                hienThiKetQua(" Vui lòng nhập số hợp lệ!");
                return;
            }
            hienThiKetQua(`✅ ${so} meter = ${meterToFeet(so).toFixed(4)} feet`);
        }