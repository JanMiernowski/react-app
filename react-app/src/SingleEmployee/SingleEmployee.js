import React from "react";



const SingleEmployee = (props) => {

    /*
    id: null,
                employee_name: '',
                employee_salary: 0,
                employee_age: 0,
                profile_image: '',
     */


    return(
      <div>
          <p>{props.id}</p>
          <p>{props.employee_name}</p>
          <p>{props.employee_salary}</p>
          <p>{props.employee_age}</p>
          <p>{props.profile_image}</p>
      </div>
    );
}

export default SingleEmployee;
