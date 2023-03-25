import React from 'react'

export default function Genderdrtopdown(props) {
  const handleChange = e => {
    const { name, value } = e.target
      props.setcontent({
        ...props.content,
        [name]:value
    });

  }

  return (
    <div class="form__group field" style={{ display: "flex", justifyContent: "center" }}>
    <select class="form__field"  name="gender" value={props.content.gender} onChange={handleChange} required>
       <option class="form__label" value="">Select Gender</option>
      <option class="form__label" value="male">Male</option>
      <option class="form__label" value="female">Female</option>

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
