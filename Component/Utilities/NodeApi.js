let NodeApi = {
  getCustomers() {
    let url = "http://localhost:5050/api/customer";
    //return axiom.get(url).then(res=>res.json());
    return fetch(url).then(res => res.text);
  }
};

module.exports = NodeApi;
