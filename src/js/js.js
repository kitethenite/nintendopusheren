// trying to add display: none on the ones that are out of stock, going so so

fetch("https://thryhwcrvlzlnuucxhqk.supabase.co/rest/v1/products", {
    method: "GET",
    headers: {
      "apikey":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocnlod2Nydmx6bG51dWN4aHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMTIxNzUsImV4cCI6MjAzMTc4ODE3NX0.qe83qKHMa9-0Tc3HFWEqgvYa_LKMiI267dutJ7DxWs0",
    }
})
.then((res) => res.json())
.then((products) => {
    products.forEach(product => {
        if (product.in_stock === 0) {
            document.querySelector(".card").classList.add("out-of-stock");
        }
    })

})


   
