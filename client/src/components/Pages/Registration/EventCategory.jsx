import React from 'react'

export default function EventCategory(props) {
    const handleChange = e => {
        const { name, value } = e.target
          props.setcategory(e.target.value);
      }
  return (
    <div class="form__group field" style={{ display: "flex", justifyContent: "center" }}>
        <select class="form__field"  name="" value={props.category} onChange={handleChange} required>
        <option class="form__label" value="">Select Category</option>
        <option class="form__label" value="sports">Sports Events</option>
        <option class="form__label" value="cultural">Cultural Events</option>
        <option class="form__label" value="techno">Techno Mgmt.</option>
        <option class="form__label" value="night">Night Events</option>
        </select>
    </div>
    )
}
