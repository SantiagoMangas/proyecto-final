import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d5f12f6d-5f49-4497-838a-b0ffed94a7a4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensaje enviado con exito!");
      event.target.reset();
      Swal.fire({
        title: "Muchas gracias!",
        text: "Mensaje enviado con exito!",
        icon: "success"
      });
    } else {
      console.log("Error al enviar el mensaje", data);
      setResult(data.message);
    }
  };

  return (
    <section className='contact'>
        <form onSubmit={onSubmit}>
          <h2>Formulario de Contacto!</h2>
            <div className="mapbox" data-mapbox>
              <figure>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199222.78702965836!2d-62.42117904732346!3d-38.721113871790955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcabdc1302bd%3A0x76d1d88d241e7a11!2sBah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1729116244554!5m2!1ses-419!2sar" width="600" height="450"></iframe>
              </figure>
            </div>
            <div className='input-box'>
                <label>Nombre Completo: </label>
                <input type='text' className='field' placeholder ='Nombre' name = 'name' required />
            </div>
            <div className='input-box'>
                <label>Correo Electrónico: </label>
                <input type='email' className='field' placeholder ='Correo Electrónico' name = 'email' required />
            </div>
            <div className='input-box'>
                <label>Mensaje: </label>
                <textarea name='message'  className='field mess' placeholder ='Deja tu mensaje' required ></textarea>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </section>
  )
}

export default Contact