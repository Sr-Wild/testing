(
function validations(d) {
    const form = d.getElementById('formulario');
    const inputs = d.querySelectorAll('#formulario input');

    const exp = {
        name:/^[a-zA-ZÀ-ÿ\s]{4,16}$/,
        lastname:/^[a-zA-ZÀ-ÿ\s]{4,16}$/,
        id:/^\d{3,9}$/,
        email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        tlf:/^\d{7,14}$/,
        dire:/^[a-zA-Z0-9\-\s]{4,40}$/
    }
    const camps ={
        name:false,
        lastname:false,
        id:false,
        email:false,
        tlf:false,
        dire:false
    }
    const ValdForm = (e) => {
        switch (e.target.name) {
            case "name":
                ValdCamps(exp.name, e.target, 'name');
                break;
        
            case "lastname":
                ValdCamps(exp.lastname, e.target, 'lastname');
                break;

            case "id":
                ValdCamps(exp.id, e.target, 'id');
                break;
                
            case "email":
                ValdCamps(exp.email, e.target, 'email');
                break;

            case "tlf":
                ValdCamps(exp.tlf, e.target, 'tlf');
                break;
                
            case "dire":
                ValdCamps(exp.dire,e.target, 'dire');
                break;
            
        }
    }

    const ValdCamps =(exp, input, camp) =>{
        if (exp.test(input.value)){
            d.getElementById(`grup-${camp}`).classList.remove('grup-wrong');
            d.getElementById(`grup-${camp}`).classList.add('grup-right');
            d.querySelector(`#grup-${camp} .error`).classList.remove('error-act');
            d.querySelector(`#grup-${camp} .vald-est`).classList.remove('fa-times-circle');
            d.querySelector(`#grup-${camp} .vald-est`).classList.add('fa-check-circle');
            //tamples string
            camps[camp]=true;
        } else {
            d.getElementById(`grup-${camp}`).classList.add('grup-wrong');
            d.getElementById(`grup-${camp}`).classList.remove('grup-right');
            d.querySelector(`#grup-${camp} .error`).classList.add('error-act');
            d.querySelector(`#grup-${camp} .vald-est`).classList.add('fa-times-circle');
            d.querySelector(`#grup-${camp} .vald-est`).classList.remove('fa-check-circle');
            camps[camp]=false
        }
    }

    inputs.forEach((input)=>{
        input.addEventListener('keyup', ValdForm);
        input.addEventListener('blue', ValdForm);
    })
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        if (camps.name && camps.lastname && camps.id && camps.email && camps.tlf && camps.dire) {
                let name = d.querySelector('#name').value ;
                let lastname = d.querySelector('#lastname').value;
                let id = d.querySelector('#id').value;
                let email = d.querySelector('#email').value;
                let tlf = d.querySelector('#tlf').value;
                let dire = d.querySelector('#dire').value;
                let url = "https://wa.me/584245611215?text=*From*%0A%0A*Name*%0A"+name+"%0A*Lastname*%0A"+lastname+"%0A*ID*%0A"+id+"%0A*Email*%0A"+email+"%0A*Phone Number*%0A"+ tlf +"%0A*Diretion*%0A"+ dire;
                window.open(url);
            form.reset();
            d.getElementById('messg-exi').classList.add('messg-exi-act');
            setTimeout(()=>{
                d.getElementById('messg-exi').classList.remove('messg-exi-act');
            },5000);
            
            d.querySelectorAll('.grup-right').forEach((icon)=>{
                icon.classList.remove('grup-right');
            });
            d.getElementById('from-message').classList.remove('from-message-act');
        } else {
            d.getElementById('from-message').classList.add('from-message-act');}
    })
    //para que el usuario no la cage por gafo
}
)(document);
