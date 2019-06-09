import React, {Component} from 'react';
import moment from 'moment';
import {seeHobbies, deleteUser} from '../../services/services';
import swal from '@sweetalert/with-react';
import HobbiesUser from './HobbiesUser';
import CreateHobbie from './CreateHobbie';

class User extends Component {
    state= {
        isOpen:false
    }
    hobbies = async (id) => {
        let allHobbies = await seeHobbies(id);
        if(allHobbies.hobbies.length === 0){
            swal(
                <h1>No se han encontrado hobbies</h1>
            )    
        }else{
            swal(
                <HobbiesUser hobbies={allHobbies.hobbies} />
            )
        }
        
    }

    deleteOne = async (id, removeUser) => {
        const willDelete = await swal({
            text: "Esta seguro que desea eliminar el usuario?",
            icon: "warning",
            dangerMode: true,
        });
           
        if (willDelete) {
            let data = await deleteUser(id);
            if(data.success){
                swal("Usuario eliminado con exito")
                removeUser(id);
            }else{
                swal("El usuario no fue eliminado con exito")
            }
            
        }
    }

    addHobbies = async (id) => {
        
    }

    setOpen = () => {
        const isOpen = !this.state.isOpen;
        this.setState({isOpen});
    }

    render(){
        const {user, removeUser} = this.props;
        return (
        
            <div>
                <div>
                    <span>Nombre</span>
                    <p>{user.firstName} {user.lastName}</p>
                </div>
                <div>
                    <span>Documento</span>
                    <p>{user.documentId}</p>
                </div>
                <div>
                    <span>Fecha Nacimiento</span>
                    <p>{moment(user.birthDay).format('DD-MM-YYYY')}</p>
                </div>
                <button onClick={() => this.hobbies(user._id)}>Ver hobbies</button>
                <button onClick={() => this.setOpen()}>Agregar hobbies</button>
                <button onClick={() => this.deleteOne(user._id, removeUser)}>Eliminar usuario</button>
                {
                    this.state.isOpen ?  <CreateHobbie id={user._id}/> : ''
                }
                
            </div>
        );
    }
};

export default User;