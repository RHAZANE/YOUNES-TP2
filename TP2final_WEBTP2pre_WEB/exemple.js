function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const cl_ul = document.getElementById("tabBody");
const url = "http://localhost:8080/ords/restscott/client";
//const url =
 // "https://uv0ncfhhdwwjeyx-db202001241215.adb.ca-toronto-1.oraclecloudapps.com/ords/restscott/client";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let client = data.items; //.results;
    return client.map(function (client) {
      let tr = createNode("tr");
      tr.innerHTML = `<td>${client.numclient}</td> <td> ${client.nom}</td> <td>${client.adresse_client}</td> </td>${client.ville_client}</td> <td>${client.pays}</td> <td>${client.telephone}</td>`;
      
        
		
        append(cl_ul, tr);
    });
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  });
