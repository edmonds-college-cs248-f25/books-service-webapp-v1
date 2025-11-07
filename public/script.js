

window.onload = function() {
  
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const now = new Date().toLocaleString();
  msg.textContent = `Button clicked at ${now}`;
});
   
// returns the response JSON if the status is in the 200s
// otherwise rejects the promise with a message including the status
function checkStatus(response) {  
        if (response.status >= 200 && response.status < 300) {  
            return response.json();
        } else if (response.status == 404) {
            // sends back a different error when we have a 404 than when we have
            // a different error
            return Promise.reject(new Error("Sorry, we couldn't find that page")); 
        } else {  
            return Promise.reject(new Error(response.status + ": " + response.statusText)); 
        } 
    }


   const BASE_URL = "https://legendary-succotash-v6qggjrw6q27qg-3000.app.github.dev/"; // REPLACE WITH PUBLIC URL TO YOUR CODESPACE OF BOOKS-SERVICE

          fetch(BASE_URL)
            .then(checkStatus)
            .then(function(json) {
                console.log(json); 
                // add a radio button and text label for category 
            })
            .catch(function(error) {
                console.log(error);
            });


}

