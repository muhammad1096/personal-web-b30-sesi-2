function submitData(){
    
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let inputkerja = document.getElementById('input-kerja').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    // Bisa menggunaakan cara ini
    // let skillHtml = document.querySelector('#html:checked').value 
    // let skillCss = document.querySelector('#css:checked').value

    // Bisa menggunakan cara ini juga
    // variabel untuk menampung tag checkbox yang di ceklis
    let developer =  document.getElementById('developer').checked
    let it_support =  document.getElementById('it_support').checked
    
    // kondisi untuk mengecek apakah checkbox di ceklis, kalau di ceklis maka tampilkan/ambil valuenya
    if (developer) {
        developer = (document.getElementById('developer').value);
        
    // jika tidak di ceklis maka tampilkan string kosong 
    } else {
        developer = ""
    } 
    
    if (it_support) {
       it_support= (document.getElementById('it_support').value);
    } else {
        it_support = ""
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(inputkerja);
    console.log(subject);
    console.log(message);
    console.log(developer);
    console.log(it_support);




    // condition

    if (name == ''){
        return alert("Nama wajib diisi")
    } else if (email == '') {
        return alert("Email wajib diisi")
    } else if (phone == '') {
        return alert("Phone Wajib diisi")
    } else if (subject == '') {
        return alert("Subject Wajib diisi")
    } else if (message == '') {
        return alert("Message Wajib diisi")
    } 
    else if (inputkerja == '') {
        return alert("pengalamann kerja Wajib diisi")
    } 
    else if (it_support == '') {
        return alert("skill Wajib diisi")
    } 

    let emailReceiver = 'sbajahitam25@gmail.com'

    let a = document.createElement('a')

    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo my name ${name} ${message} contact me ${phone} send CV ${email} requirment skill ${developer} ${it_support} pengalaman kerja ${inputkerja}`
    a.click()

    // <a href="mailto:samsul@mail.com?subject=Test Subject&body=Hallo B30">Send Mail</a>

    // if (name == '' || email == '' || phone == '' || subject == '' || message == '') {
    //     alert("Semuanya wajib diisi")
    // }

    let dataObject = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
        developer: developer,
        it_support: it_support,
        inputkerja: inputkerja
    }

    console.log(dataObject);

}