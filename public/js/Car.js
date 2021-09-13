const postCar = async (event) => {
  event.preventDefault();

  console.log("Testing if it goes in here");

  const carMake = document.querySelector("#make-postcar").value.trim();
  const carModel = document.querySelector("#model-postcar").value.trim();
  const carYear = document.querySelector("#year-postcar").value.trim();
  const carColor = document.querySelector("#color-postcar").value.trim();
  const carMileage = document.querySelector("#mileage-postcar").value.trim();
  const carPrice = document.querySelector("#price-postcar").value.trim();
  const carNew = document.querySelector("#new-postcar:checked") ? true : false;

  console.log(
    carMileage + carMake + carModel + carYear + carColor + carPrice + carNew
  );

  if (
    carMake &&
    carModel &&
    carYear &&
    carColor &&
    carMileage &&
    carPrice &&
    carNew
  ) {
    const response = await fetch("/api/cars", {
      method: "POST",
      body: JSON.stringify({
        carMake,
        carModel,
        carYear,
        carColor,
        carMileage,
        carPrice,
        carNew,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      console.log("You sucessfully submitted you car!");
    } else {
      alert("Failed to submit your car!");
    }
  }
};

document.querySelector(".postCar-form").addEventListener("submit", postCar);
