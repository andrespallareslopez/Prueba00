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

export const MyForm01 = (props) => {
    
    var nameControl;
    var controls = props.controls;

    const inputControls = {
        input: MyInput,
        calendar: MyCalendar,
        combo: MyCombo,
        combosearch: MyComboSearch,
        inputnum: MyInputNum,
        inputdecimal: MyInputDecimal,
        inputdate: MyInputDate,
        inputdatetime: MyInputDateTime,
        inputmask: MyInputMask,
        inputcurrency: MyInputCurrency,
        inputcreditcard: MyInputCreditCard
    }
    
    
    
    var createControl = function(params,key){
        console.dir(params);
        const TagInput = inputControls[params.nameControl];
        return <TagInput key={key} {...params}/>
    }
    
    var createControls = function(listaControles){
       return listaControles.map(createControl);     
    }
    
    useEffect(() => {
        var keys= new UXKeyForm({
          id: props.id
        });
    },[]);
       
    return (
      <form id={props.id } className="form-fix-basic-01 " >
         { (controls!==undefined) ? createControls(controls) : ''}
      </form>
    );

}

export default MyForm01;





