function contactDetails() {
    //  get ids 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
    

    // Save into localStorage
    if(name && email && phone && subject && message){

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('subject', subject);
        localStorage.setItem('message', message);
        
        alert("Your Details is submited");
    }
    else{
        alert("Your Details is not submited");

    }
    
}

// submit button
document.getElementById('submit').addEventListener('click',contactDetails);



