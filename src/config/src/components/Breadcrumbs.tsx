
import { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "rsuite";
import BreadcrumbItem from "rsuite/esm/Breadcrumb/BreadcrumbItem";

function Breadcrumbs(props:any) {
    
    
    const addCrumb = (crumb:any) => {
        
    }
    function islast(index:number) {
        return (
            index === props.crumbs.length - 1
        )
    }
    return(
        <Breadcrumb separator=' > '>
        {props.crumbs.map((key:any,index:number) => {
                //const disabled = islast(ci) ? 'disabled' : '';
                return (
                    <BreadcrumbItem href={key.path}  > 

                        {key.name}


                    </BreadcrumbItem>
                );

            }
        
        )}

        </Breadcrumb>
    )  
    
}

export default Breadcrumbs;