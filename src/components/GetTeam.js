import React, { Component } from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// import TokenAutocomplete from 'react-token-autocomplete';

class GetTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      fullName: this.props.teams["fullName"]
    }
  };

  render() {


    return (

      <div>
        <Form>
          <FormGroup>
            <Label for="teamSelect">Choose Your Team</Label>
          <Select
            id="teamSelect"
            placeholder="Type or click to choose"
            valueKey="teamId"
            valueLabel="fullName"
            options={this.props.teams}
           />
           </FormGroup>
        </Form>
      </div>

    )
  };
}

export default GetTeam;
