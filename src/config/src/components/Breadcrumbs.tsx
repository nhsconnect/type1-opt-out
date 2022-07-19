
import { useState } from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { Breadcrumb } from "nhsuk-react-components";

function Breadcrumbs(props: any) {


    const addCrumb = (crumb: any) => {

    }
    function islast(index: number) {
        return (
            index === props.crumbs.length - 1
        )
    }
    return (

        <Breadcrumb>
            {
                props.crumbs.map((key: any, index: number) => {
                    const disabled = islast(index) ? true : false;
                    console.log(disabled)
                    if (disabled) {
                        return (

                            <Breadcrumb.Item style={{ textDecoration: 'none', pointerEvents: 'none', color: "grey" }} href={disabled ? 'hi' : key.path}>
                                {
                                    key.name
                                }
                            </Breadcrumb.Item>

                        )
                    }
                    else {
                        return (
                            <Breadcrumb.Item href={key.path}>
                                {
                                    key.name
                                }

                            </Breadcrumb.Item>

                        )
                    }

                }

                )
            }

        </Breadcrumb>
    )

}

export default Breadcrumbs;