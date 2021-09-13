const deleteCar = async (event) => {  
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/cars/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
  document.location.replace("/dashboard/myCars") } 

  }
  
  
}

document.querySelector("#deletebutton").addEventListener('click', deleteCar)