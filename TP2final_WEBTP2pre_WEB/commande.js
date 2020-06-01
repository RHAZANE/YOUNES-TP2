function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const cl_ul = document.getElementById("tabBody");
const url = "http://localhost:8080/ords/restscott/commande";
//const url =
 // "https://uv0ncfhhdwwjeyx-db202001241215.adb.ca-toronto-1.oraclecloudapps.com/ords/restscott/commande";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let commande = data.items; //.results;
    return commande.map(function (commande) {

		let tr = createNode("tr");
        tr.innerHTML=`<td>${commande. num_commande}</td> <td>${commande.date_commande}</td><td> ${commande.client_numclient}</td>`;
		
        append(cl_ul, tr);
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
