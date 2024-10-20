const passwordButton = document.querySelector('button');
const input = document.querySelector('input');
const faCopy = document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alertContainer');
const alertText = document.querySelector('.alertText');


passwordButton.addEventListener('click', createPassword)
faCopy.addEventListener('click', copyPassword)


function createPassword(){
    const passwordLength=14;
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}|;:,.<>?/~z'
    
    let password = '';

    for(let index=0;index<passwordLength;index++)
    {
        const randomNum = Math.floor(Math.random()*characters.length)
        password += characters[randomNum];
    }
    
    input.value=password;
    alertText.textContent = `${password}  copied!`;
}

function copyPassword(){
    if(input.value)
    {
        input.select();
        navigator.clipboard.writeText(input.value);
        alertContainer.classList.remove('active');
        setTimeout(()=>{
            alertContainer.classList.add('active');
        },2000);
    }
}