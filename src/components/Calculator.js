import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";

var convert = require("convert-units");

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthValue: 0,
      lengthUnit: "cm",
      widthValue: 0,
      widthUnit: "cm",
      areaUnit: "cm",
      areaValue: 0,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value }, this.reCalc);
  }
  reCalc() {
    let convertedLength = this.state.lengthValue;
    let convertedWidth = this.state.widthValue;

    // convert all values converted to area unit
    if (
      this.state.lengthUnit !== this.state.areaUnit &&
      this.state.lengthValue !== 0
    ) {
      convertedLength = convert(this.state.lengthValue)
        .from(this.state.lengthUnit)
        .to(this.state.areaUnit);
    }

    if (
      this.state.widthUnit !== this.state.areaUnit &&
      this.state.widthValue !== 0
    ) {
      convertedWidth = convert(this.state.widthValue)
        .from(this.state.widthUnit)
        .to(this.state.areaUnit);
    }

    this.setState({
      areaValue: Math.round(convertedLength * convertedWidth * 100) / 100,
    });
  }
  render() {
    return (
      <Form>
        <Form.Group controlId="formLength">
          <div className="row justify-content-md-center">
            <div className="col-lg-3">
              <Form.Label>Length </Form.Label>
              <InputGroup>
                <FormControl
                  type="number"
                  placeholder="Enter Length"
                  name="lengthValue"
                  value={this.state.lengthValue}
                  onChange={this.handleValueChange}
                />

                <DropdownButton
                  as={InputGroup.Append}
                  variant="outline-light"
                  title={this.state.lengthUnit}
                >
                  <Dropdown.Item
                    onSelect={() =>
                      this.handleValueChange({
                        target: { name: "lengthUnit", value: "cm" },
                      })
                    }
                  >
                    centimeter (cm)
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() =>
                      this.handleValueChange({
                        target: { name: "lengthUnit", value: "m" },
                      })
                    }
                  >
                    meter (m)
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() =>
                      this.handleValueChange({
                        target: { name: "lengthUnit", value: "in" },
                      })
                    }
                  >
                    inch (in)
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() =>
                      this.handleValueChange({
                        target: { name: "lengthUnit", value: "ft" },
                      })
                    }
                  >
                    foot (ft)
                  </Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="formWidth">
          <div className="row justify-content-md-center">
            <div className="col-lg-3">
              <Form.Label>Width</Form.Label>
              <InputGroup>
                <FormControl
                  placeholder="Enter Width"
                  name="widthValue"
                  value={this.state.widthValue}
                  onChange={this.handleValueChange}
                />

                <DropdownButton
                  as={InputGroup.Append}
                  variant="outline-light"
                  title={this.state.widthUnit}
                >
                  <Dropdown.Item
                    onSelect={() =>
                      this.handleValueChange({
                        target: { name: "widthUnit", value: "cm" },
                      })
                    }
                  >
                    centimeter (cm)
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() =>
                      this.handleValueChange({
                        target: { name: "widthUnit", value: "m" },
                      })
                    }
                  >
                    meter (m)
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() =>
                      this.handleValueChange({
                        target: { name: "widthUnit", value: "in" },
                      })
                    }
                  >
                    inch (in)
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() =>
                      this.handleValueChange({
                        target: { name: "widthUnit", value: "ft" },
                      })
                    }
                  >
                    foot (ft)
                  </Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </div>
          </div>
        </Form.Group>
        <Form.Group controlId="formArea">
          <br />
          <div className="row justify-content-md-center">
            <div className="col text-right">
              <h3>
                Area = {this.state.areaValue} {this.state.areaUnit}
              </h3>
            </div>
            <div className="col-lg-1">
              <DropdownButton
                className=" text-right "
                variant="outline-light"
                title={this.state.areaUnit}
              >
                <Dropdown.Item
                  onSelect={() =>
                    this.handleValueChange({
                      target: { name: "areaUnit", value: "cm" },
                    })
                  }
                >
                  centimeter squared (cm^2)
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() =>
                    this.handleValueChange({
                      target: { name: "areaUnit", value: "m" },
                    })
                  }
                >
                  meter squared (m^2)
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() =>
                    this.handleValueChange({
                      target: { name: "areaUnit", value: "in" },
                    })
                  }
                >
                  inch squared (in^2)
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={() =>
                    this.handleValueChange({
                      target: { name: "areaUnit", value: "ft" },
                    })
                  }
                >
                  foot squared (ft^2)
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </Form.Group>
      </Form>
    );
  }
}
