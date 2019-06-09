import React, {Component} from 'react';
import { checkedHobbies, addHobbies } from './../../services/services';
import swal from '@sweetalert/with-react';

class CreateHobbie extends Component {
    state = {
        hobbies: [],
        selectedHobbies: []
    }

    async componentDidMount(){
        let hobbies = await checkedHobbies(this.props.id);
        hobbies.hobbies = hobbies.hobbies.map(hobbie => hobbie._id);
        this.setState({hobbies: hobbies.allHobbies, selectedHobbies: hobbies.hobbies });
    }

    handleInputChange = (event) => {
        const target = event.target;
        let selectHobbie = [...this.state.selectedHobbies]
        if(target.checked){
            selectHobbie.push(target.value);
            this.setState({
                selectedHobbies: selectHobbie
            });
        }else{
            selectHobbie = selectHobbie.filter(hobbie => {
                return hobbie !== target.value
            });

            this.setState({
                selectedHobbies: selectHobbie
            });
        }
        this.updateCheck(target.value);
    }

    updateCheck = (id) => {
        let hobbies = [...this.state.hobbies];
        hobbies = hobbies.map(hobbie => {
            if(hobbie._id === id){
                hobbie.checked = !hobbie.checked; 
            }
            return hobbie
        });
        this.setState({
            hobbies: hobbies
        });     

    }

    addHobbie = async e => {
        e.preventDefault();
        
        let data  = await addHobbies(this.props.id, this.state.selectedHobbies);
        if(data.success){
            swal("Hobbies seleccionados con exito")
        }else{
            swal("Hobbies no seleccionados con exito")
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.addHobbie}>
                    {
                        this.state.hobbies.map((hobbie, key) => (
                            <div key={key}>
                                <input ref={this.selectedHobbies} onChange={this.handleInputChange} 
                                       checked={hobbie.checked}  type="checkbox" value={hobbie._id}></input>
                                <label>
                                    {hobbie.name}
                                </label>
                                <p>
                                    {hobbie.description}
                                </p>
                            </div>
                        ))
                    }
                    <button>Guardar</button>
                </form>
            </div>
        );
    }
   
};

export default CreateHobbie;