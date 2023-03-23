import React from 'react'

export default function NewSingleField(props) {
    var s=props.to_find;
    const handleChange = e => {
      const { name, value } = e.target
      props.setcontent({
          ...props.content,
          [name]: value
      })
    }

    return (
     <div class="form__group field">
        <input  class="form__field" type="input"  placeholder={props.placeholder} name={s} value={props.content[s]} onChange={handleChange} required/>
        <label class="form__label" >{props.placeholder}</label>
    </div>
  )
}
