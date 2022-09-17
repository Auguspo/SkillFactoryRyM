const URL_USERS = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USERS)
  .then((response) => response.json())
  .then((data) => userTable(data));

function userTable(json){
      let body = ``;
      json.forEach(({ id, name, email, address, phone, website }) => {
        body+= `
        <div class="container" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
                <div class="row row-cols-8">                               
                    <div class="col">
                        <label>${name}</label>
                    </div>
                                                
                    <div class="col">
                        <label>${id}</label>
                    </div>  
                                                
                    <div class="col">
                        <label>${email}</label>
                    </div> 
                                                
                    <div class="col">
                        <label>${phone}</label>
                    </div>     
                                            
                    <div class="col">
                        <label>${address.city}</label>
                    </div>
                    <div class="col">
                        <label>${website}</label>
                    </div>
                </div>   
        </div>`
    ;});
        
    
    document.getElementById("usersTable").innerHTML= body ;
}
   

