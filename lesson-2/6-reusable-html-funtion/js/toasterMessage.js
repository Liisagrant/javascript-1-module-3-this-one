
   
function createToaster(type = "", message = "") {
    return `<div class="toaster ${type}"> 
                <span>${type}</span>
                <span>${message}</span>
            </div>`;
}