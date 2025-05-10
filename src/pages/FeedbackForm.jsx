import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primeflex/themes/primeone-light.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useState } from 'react';



const Feedbackform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!name || !email || !comentario) {
      alert('Por favor preencha os campos antes de enviar');
      return;
      
    }
    alert(`Name: ${name}\nEmail: ${email}\nComentario: ${comentario}`);

    setName('');
    setEmail('');
    setComentario('');

  }
    return (
      <>
       <div 
       className='bg-pink-100 h-screen flex align-items-center justify-content-center'>
        
        <form 
        onSubmit={handleSubmit}
        className='surface-50 p-5 border-round-lg shadow-5' >
          <div 
          className='flex align-items-center justify-content-center '>
            <h3 className='text-center'>Formulário de Feedback
              </h3>
              </div>
          <div >
          <div>
            <label>Nome</label>
           <InputText 
           type='text' 
           value={name} 
           onChange={(e) => setName(e.target.value)}
           className='block mb-3 w-full hover:shadow-5'
            placeholder='Nome' />
          </div>
          <div >
            <label>Emai</label>
            <InputText 
            type='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className='block overflow-auto mb-3 w-full hover:shadow-5' 
            placeholder="email@email.com"  />
          </div>
          </div>
          <div>
            <label>Comentário</label>
            <InputTextarea 
            value={comentario} 
            onChange={(e) =>setComentario(e.target.value)}
            className='block mb-3 w-full hover:shadow-5' 
            placeholder='Escreva aqui seu comentário'/>
          </div>
          <div className='flex align-items-center justify-content-center'>
           <Button 
           type='submite' 
           className='hover:shadow-5'  
           label="Enviar" 
           icon="pi pi-check" />
          </div>
        </form>
       </div>
      </>
    );
}
 
export default Feedbackform;