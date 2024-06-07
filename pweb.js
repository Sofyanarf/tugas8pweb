function formulir() {
    var nama = document.getElementById("Nama").value;
    var tanggalLahir = document.getElementById("Tanggal_lahir_Tahun").value;
    var jenisKelamin = document.querySelector('input[name="Jenis_kelamin"]:checked');
    var alamat = document.getElementById("alamat").value;

    if (nama === "") {
        alert("Nama harus diisi!");
        return false;
    }

    if (tanggalLahir === "") {
        alert("Tanggal lahir harus diisi!");
        return false;
    }

    if (jenisKelamin === null) {
        alert("Jenis kelamin harus dipilih!");
        return false;
    }

    if (alamat === "") {
        alert("Asal kota harus diisi!");
        return false;
    }

    alert(`Nama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin.value}\nAsal Kota: ${alamat}`);

    return true;
}
function showInputMessage(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var messageElement = document.createElement("span");
    messageElement.innerHTML = message;
    messageElement.className = "error";
    inputElement.parentNode.insertBefore(messageElement, inputElement.nextSibling);
  }
  
  function hideInputMessage(inputId) {
    var inputElement = document.getElementById(inputId);
    var nextElement = inputElement.nextSibling;
    if (nextElement && nextElement.className == "error") {
      nextElement.parentNode.removeChild(nextElement);
    }
  }
  
  document.getElementById("Nama").addEventListener("blur", function () {
    var nama = this.value;
    if (nama === "") {
      showInputMessage("Nama", "<br>Nama harus diisi.");
    } else {
      hideInputMessage("Nama");
    }
  });
  document.getElementById("Tanggal_lahir_Tahun").addEventListener("blur", function () {
    var tanggalLahir = this.value;
    if (tanggalLahir === "") {
      showInputMessage("Tanggal_lahir_Tahun", " <br>harus diisi.");
    } else {
      hideInputMessage("Tanggal_lahir_Tahun");
    }
  });
  document.querySelectorAll('input[name="Jenis_kelamin"]:checked').addEventListener("blur", function () {
    var jenisKelamin = this.value;
    if ( jenisKelamin === "") {
      showInputMessage('input[name="Jenis_kelamin"]:checked', "<br>Nama harus diisi.");
    } else {
      hideInputMessage("Jenis_kelamin");
    }
  });
  document.getElementById("alamat").addEventListener("blur", function () {
    var alamat = this.value;
    if (alamat === "") {
      showInputMessage("alamat", " <br>harus diisi.");
    } else {
      hideInputMessage("alamat");
    }
  });
 
