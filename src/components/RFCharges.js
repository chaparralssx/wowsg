import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap/lib'

class RFCharges extends React.Component {

    render() {

        return (
            <div className="RFCharges">
                <FormGroup controlId="formControlsSelect" className="inputHr">
                    <FormControl componentClass="select" placeholder="">
                        <option value=""></option>                                        
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </FormControl>
                    <ControlLabel>hr</ControlLabel>
                </FormGroup>
                <FormGroup controlId="formControlsSelect" className="inputMin">
                    <FormControl componentClass="select" placeholder="">
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </FormControl>
                    <ControlLabel>m</ControlLabel>
                </FormGroup>
                <FormGroup controlId="formControlsSelect" className="inputChargeReason">
                    <FormControl componentClass="select" placeholder="">
                        <option value="" class="" selected="selected"></option>
                        <option label="Adding Pallet Packaging">Adding Pallet Packaging</option>
                        <option label="Banding" >Banding</option>
                        <option label="Breaking down pallets" >Breaking down pallets</option>
                        <option label="Cleaning Product">Cleaning Product</option>
                        <option label="Cleaning Trailer / Rail Car">Cleaning Trailer / Rail Car</option>
                        <option label="Customer Escort">Customer Escort</option>
                        <option label="Downgrade">Downgrade</option>
                        <option label="Dunnage">Dunnage</option>
                        <option label="FirmaLoads">FirmaLoads</option>
                        <option label="Floor Loading">Floor Loading</option>
                        <option label="Hourly Customer">Hourly Customer</option>
                        <option label="Inspection">Inspection</option>
                        <option label="Labeling">Labeling</option>
                        <option label="Ownership Transfer">Ownership Transfer</option>
                        <option label="Picking Cases / Bags">Picking Cases / Bags</option>
                        <option label="Pictures">Pictures</option>
                        <option label="Product Rework">Product Rework</option>
                        <option label="Reclass">Reclass</option>
                        <option label="Rehandling Damage">Rehandling Damage</option>
                        <option label="Removing Labels">Removing Labels</option>
                        <option label="Removing Pallet Packaging">Removing Pallet Packaging</option>
                        <option label="Repalletizing">Repalletizing</option>
                        <option label="Restacking Pallets">Restacking Pallets</option>
                        <option label="Samples">Samples</option>
                        <option label="Shrouding">Shrouding</option>
                        <option label="Sorting Product">Sorting Product</option>
                        <option label="Splitting Pallets">Splitting Pallets</option>
                        <option label="Ty Straps">Ty Straps</option>
                        <option label="UPS">UPS</option>
                        <option label="Vacuum Sealing">Vacuum Sealing</option>
                        <option label="Verify Load Info">Verify Load Info</option>
                    </FormControl>
                </FormGroup>
            </div>
        )
    }
}

export default RFCharges;