import React from "react";



const SingleEnterprise = (props) => {

    /*
    enterpriseName: '',
            email: '',
            bank: '',
            address: '',
            taxNumber: ''
     */


    return(
      <div>
          <p>{props.enterpriseName}</p>
          <p>{props.email}</p>
          <p>{props.address}</p>
          <p>{props.taxNumber}</p>
      </div>
    );
}

export default SingleEnterprise;
