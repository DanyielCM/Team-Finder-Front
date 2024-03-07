
import React, { useState } from "react";

import "./login-dropdown.css";

export default function LoginDropdown(){

return(
<>
<details class="dropdown">
    <summary role="button">
      <a class="button">Login</a>
    </summary>
    <ul>
      <li><a href="/sign-in">Login as Organisation</a></li>
      <li><a href="/sign-in-user">Login as Employee</a></li>
      
  </ul>
</details>

</>


);


};



