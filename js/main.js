var btnCalculate = document.getElementById("btn");

btnCalculate.addEventListener("click", function () {
  let nameBurger = document.getElementById("burgerName").value;
  console.log(nameBurger);
  if (nameBurger.length < 1 || nameBurger == " ") {
    alert("Inserisci Name");
  } else {
    pricecal();
  }
});

function pricecal() {
  const prezfisso = 50;
  var prezelement = 0;
  var price = 0;
  var square = document.getElementsByClassName("checkbox");

  for (let i = 0; i < square.length; i++) {
    if (square[i].checked == true) {
      prezelement += parseInt(square[i].value);
    }
  }

  var validCoupon = ["abc", "123"];
  var coupon = document.getElementById("coupon").value;

  if (coupon != "") {
    if (validCoupon.includes(coupon)) {
      price = (prezelement + prezfisso) * 0.8; //sconto 20 %
    } else {
      alert("Coupon non valido");
      price = prezelement + prezfisso;
    }
  } else {
    price = prezelement + prezfisso;
  }

  document.getElementById("prezzo").innerHTML = "$ " + price;
}
