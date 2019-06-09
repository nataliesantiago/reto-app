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
            swal("", "No se han encontrado hobbies", "error")    
        }else{
            swal(
                <HobbiesUser hobbies={allHobbies.hobbies} />
            )
        }
        
    }

    deleteOne = async (id, removeUser) => {
        const willDelete = await swal({
            text: "¿Está seguro que desea eliminar el usuario? ",
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
        
            <div className="row justify-content-md-center space-padding container-users">
                <div className="col col-lg-2">
                    <span>Nombre y Apellido</span>
                    <p>{user.firstName} {user.lastName}</p>
                </div>
                <div className="col col-lg-2">
                    <span>Documento</span>
                    <p>{user.documentId}</p>
                </div>
                <div className="col col-lg-2">
                    <span>Fecha Nacimiento</span>
                    <p>{moment(user.birthDay).format('DD-MM-YYYY')}</p>
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-primary" onClick={() => this.hobbies(user._id)}>Ver hobbies</button>
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-success" onClick={() => this.setOpen()}>Agregar hobbies</button>
                </div>
                <div className="col-md-auto">
                    <button className="btn btn-danger" onClick={() => this.deleteOne(user._id, removeUser)}>Eliminar usuario</button>
                </div>
                {
                    this.state.isOpen ?  <CreateHobbie id={user._id}/> : ''
                }
                
            </div>
        );
    }
};

export default User;