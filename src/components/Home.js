import React from 'react'
import NavBar from './NavBar'
import InputGroup from "react-bootstrap/InputGroup"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import FormControl from "react-bootstrap/FormControl"


class Home extends React.Component {
    render() {
        return (
            <div>
                
                <h1>Urban Grind</h1>
                <InputGroup className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="Filter"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-describedby="basic-addon1" />
                </InputGroup>
                <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2017/09/jonas-jacobsson-338014-e1515700628791.jpg" className="background-img"></img>
            </div>
        )
    }
}

export default Home