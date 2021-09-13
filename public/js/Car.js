let Img;

const postCar = async (event) => {
  event.preventDefault();

  const carMake = document.querySelector("#make-postcar").value.trim();
  const carModel = document.querySelector("#model-postcar").value.trim();
  const carYear = document.querySelector("#year-postcar").value.trim();
  const carColor = document.querySelector("#color-postcar").value.trim();
  const carMileage = document.querySelector("#mileage-postcar").value.trim();
  const carPrice = document.querySelector("#price-postcar").value.trim();
  const carNew = document.querySelector("#new-postcar:checked") ? true : false;
  console.log(Img);

  console.log(
    carMileage +
      carMake +
      carModel +
      carYear +
      carColor +
      carPrice +
      carNew +
      Img
  );

  console.log(
    JSON.stringify({
      carMake,
      carModel,
      carYear,
      carColor,
      carMileage,
      carPrice,
      carNew,
      Img,
    })
  );

  if (carMake && carModel && carYear && carColor && carMileage && carPrice) {
    const response = await fetch("/api/cars", {
      method: "Post",
      body: JSON.stringify({
        carMake,
        carModel,
        carYear,
        carColor,
        carMileage,
        carPrice,
        carNew,
        Img,
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    if (response.ok) {
      document.location.replace("/");
      console.log("You sucessfully submitted you car!");
    } else {
      alert("Failed to submit your car!");
    }
  }
};

var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "ddytkmu7p",
    uploadPreset: "mlj31vf2",
  },
  (error, result) => {
    if (error) {
      console.log(error);
    }
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info:" + result.info.url);
      Img = result.info.url;
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);

document.querySelector(".postCar-form").addEventListener("submit", postCar);
