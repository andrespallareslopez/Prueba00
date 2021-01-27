import React,{useEffect} from 'react'


import {UXKeyForm} from '../../src/componentsImports/UXKeyform.js'
import {MyInput} from '../../src/WebComponents/MyInput.js' 
import {MyCalendar} from '../../src/WebComponents/MyCalendar.js'
import {MyCombo} from '../../src/WebComponents/MyCombo.js'
import {MyComboSearch} from '../../src/WebComponents/MyComboSearch.js'
import {MyInputNum} from '../../src/WebComponents/MyInputNum.js'
import {MyInputDecimal} from '../../src/WebComponents/MyInputDecimal.js'
import {MyInputDate} from '../../src/WebComponents/MyInputDate.js'
import {MyInputDateTime} from '../../src/WebComponents/MyInputDateTime.js'
import {MyInputMask} from '../../src/WebComponents/MyInputMask.js'
import {MyInputCurrency} from '../../src/WebComponents/MyInputCurrency.js'
import {MyInputCreditCard} from '../../src/WebComponents/MyInputCreditCard.js'

import '../../src/components/forms/03form-fix-basic-01.css'

import {datos,mesas,categorias,articulos} from '../../src/listInMemory.js'


export const MyForm = (props) => {
  //console.log(props.id)
    useEffect(() => {
      var keys= new UXKeyForm({
        id: props.id
      });
    },[]);
    
     return (
        <form id={props.id } className="form-fix-basic-01 " >
          
          <MyInput id="text1" name="nombre" msgText="Nombre" msgPlaceHolder="Introduce nombre"></MyInput>
          <MyCalendar id="cal1" name="fecha" msgText="Introduce Fecha"></MyCalendar>
          <MyCombo id="combo2" name="mesa" data={mesas} msgText="Introduce mesas" nameField="descripcion" ></MyCombo>
          <MyCombo id="combo1" name="articulos"data={articulos} msgText="Introduce familia" nameField="descripcion" ></MyCombo>
          <MyComboSearch id="search01" name="categoria" data={datos} msgPlaceHolder="Introduce busqueda" nameField="description" ></MyComboSearch>
          <MyInputNum required id="num01" name="numero" msgText="Numero" msgWarning="Numero Obligatorio" msgPlaceHolder="Introduce numero"></MyInputNum>  
          <MyInputDecimal id="decimal01" msgPlaceHolder="Decimal" scale="4" />
          <MyInputDate id="date01" msgPlaceHolder="Fecha" />
          <MyInputDateTime id="datetime01" msgPlaceHolder="fecha tiempo" />
          <MyInputMask id="mask01" mask="(000) 00 00 00" />
          <MyInputMask id="numero01" mask={Number} />
          <MyInputCurrency id="currency01" scale="3" />
          <MyInputCurrency id="currency02" />
          <MyInputCreditCard id="credit01" />
           
        </form>
    );
}


export default MyForm;