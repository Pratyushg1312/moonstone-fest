import React from 'react'

export default function Checkbox(props) {
  const handleChange = e => {
    const { name, value } = e.target
    props.setmediclg(e.target.value);
    if(e.target.value=="true"){
      props.setmediclg(true)
      props.setcontent({
        ...props.content,
        ["college"]: "Medi-Caps University"});
    }
    else{
      props.setmediclg(false)
      props.setcontent({
        ...props.content,
        ["college"]: ""});
    }

  }

  return (
    <div class="form__group field" style={{ display: "flex", justifyContent: "center" }}>
    <select class="form__field"  name={""} value={props.mediclg} onChange={handleChange} required>
       <option class="form__label" value="">Select College</option>
      <option class="form__label" value="true">Medicaps University</option>
      <option class="form__label" value="false">Other</option>

    </select>
    
  </div>
  //   <div class="form__group field">
  // <select class="form__field" name="" onChange={handleChange}/>
  // <option class="form__label" value="">Select College</option>
  // <option class="form__label" value="true">Medicaps University</option>
  // <option class="form__label" value="false">Other</option>
  //   </div>
  )
}
