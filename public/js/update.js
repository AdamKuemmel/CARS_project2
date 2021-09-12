const updateCar = async (event) => {
    event.preventDefault();

    console.log('Testing if it goes in here')

    const carMake = document.querySelector('#make-updatecar').value.trim();
    const carModel = document.querySelector('#model-updatecar').value.trim();
    const carYear = document.querySelector('#year-updatecar').value.trim();
    const carColor = document.querySelector('#color-updatecar').value.trim();
    const carMileage = document.querySelector('#mileage-updatecar').value.trim();
    const carPrice = document.querySelector('#price-updatecar').value.trim();
    const carNew = document.querySelector('#new-updatecar:checked') ? true : false;

    console.log(carMileage + carMake + carModel + carYear + carColor + carPrice + carNew)

    if(carMake && carModel && carYear && carColor && carMileage && carPrice){
        const response = await fetch("/api/cars", {
            method: "PUT",
            body: JSON.stringify({carMake, carModel, carYear, carColor, carMileage, carPrice, carNew }),
            headers: {"Content-Type": "application/json"},


        });

        if(response.ok) {
            document.location.replace('/')
            console.log('You sucessfully submitted you car!')
        } else {
            alert("Failed to submit your car!")
        }

    }

}

document.querySelector("#updateCar-form").addEventListener('submit', updateCar)