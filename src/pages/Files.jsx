import React from "react";
import uc_var from '../filecontent/UnicornsCode_Variablen.pdf';

function Files(){

    return(
        <>
        <a
            href={uc_var}
            download="UnicornsCode_Variablen"
            target="_blank"
            rel="noreferrer">
            Variablen
        </a>
        </>
    );
}

export default Files;