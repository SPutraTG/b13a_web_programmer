function hitungLuasDanKeliling() {
    let radius = parseFloat(document.getElementById("radius").value);

    let luas = Math.PI * Math.pow(radius, 2);

    let keliling = 2 * Math.PI * radius;

    document.getElementById("luas").textContent = luas.toFixed(2);
    document.getElementById("keliling").textContent = keliling.toFixed(2);
}