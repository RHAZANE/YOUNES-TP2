function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const cl_ul = document.getElementById("tabBody");
const url = "http://localhost:8080/ords/restscott/details_commande";
//const url =
 // "https://uv0ncfhhdwwjeyx-db202001241215.adb.ca-toronto-1.oraclecloudapps.com/ords/restscott/details_commande";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let details_commande = data.items; //.results;
    return details_commande.map(function (details_commande) {
      let tr = createNode("tr");
      tr.innerHTML = `<td>${details_commande. num_commande}</td> <td>${details_commande.qte_commande}</td> <td>${details_commande.commande_num_commande}</td>  <td>${details_commande. produit_ref_produit}<td>`;
     
        
		
        append(cl_ul, tr);
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });

