import axios from 'axios';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { ADD_PERSON, REMOVE_PERSON } from '../store/actions';

function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.replace(word[0], word[0].toUpperCase()))
        .join(' ');
}

class Persons extends Component {
    addPerson = async () => {
        try {
            const { data } = await axios('https://randomuser.me/api/');
            const person = data.results[0];
            const { name: { first, last }, id: { value: id }, dob } = person;

            if (!id) return this.addPerson();

            this.props.onAddPerson({ name: titleCase(`${first} ${last}`), id, age: moment().diff(dob, 'years') });
        } catch (err) {
            console.error(err);
        }
    };

    removePerson = person => {
        console.log(person);
    };

    render() {
        console.log(this.props.people);
        return (
            <div>
                <AddPerson personAdded={this.addPerson} />
                {this.props.people.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onRemovePerson(person.id)}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = ({ people: { people } }) => ({ people });

const mapDispatchToProps = dispatch => ({
    onAddPerson: person => dispatch({ type: ADD_PERSON, payload: { person } }),
    onRemovePerson: id => dispatch({ type: REMOVE_PERSON, payload: { id } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
