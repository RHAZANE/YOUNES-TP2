function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const cl_ul = document.getElementById("tabBody");
const url = "http://localhost:8080/ords/restscott/produit";
//const url =
 // "https://uv0ncfhhdwwjeyx-db202001241215.adb.ca-toronto-1.oraclecloudapps.com/ords/restscott/produit";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let produit = data.items; //.results;
    return produit.map(function (produit) {
      let tr = createNode("tr");
      tr.innerHTML = `<td>${produit. ref_produit}</td> <td>${produit.nom_produit}</td> <td>${produit.prix_unitaire}</td> <td>${produit.qte_stocke}</td> <td>${produit.disponible}</td> <td>${produit.remise_numero_remise}</td> <td>${produit.details_commande_num_commande}</td>`;
       append(cl_ul, tr);
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });