
function ins_client() {
  let client_rec = {
    
  };
  client_rec.numclient = document.getElementById("numclient").value;
  client_rec.nom = document.getElementById("nom").value;

const cl_ul = document.getElementById("client");
const url = "http://localhost:8080/ords/restscott/client";


  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client_rec),
  })
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}
