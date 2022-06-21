import { Footer } from "nhsuk-react-components";
import React from "react";

const ServiceFooter: React.FC = () => (
    <Footer>
        <Footer.List>
            <Footer.ListItem href="/frontend">
                Home
            </Footer.ListItem>
            <Footer.ListItem
                href="/frontend/accessibility-statement"
                target="_blank"
                rel="noopener noreferrer"
            >
                Accessibility
                <span className="nhsuk-u-visually-hidden">
                    Opens in new window
                </span>
            </Footer.ListItem>
            <Footer.ListItem
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Privacy notice
                <span className="nhsuk-u-visually-hidden">
                    Opens in new window
                </span>
            </Footer.ListItem>
            <Footer.ListItem
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Terms and conditions
                <span className="nhsuk-u-visually-hidden">
                    Opens in new window
                </span>
            </Footer.ListItem>
            <Footer.ListItem
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Cookie policy
                <span className="nhsuk-u-visually-hidden">
                    Opens in new window
                </span>
            </Footer.ListItem>
            <Footer.ListItem href="/">
                Environments
            </Footer.ListItem>
        </Footer.List>
        <Footer.Copyright>NHS Digital 2022</Footer.Copyright>
    </Footer>
);

export default ServiceFooter;
