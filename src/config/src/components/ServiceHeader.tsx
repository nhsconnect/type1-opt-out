import { Header } from "nhsuk-react-components";
import React from "react";

const ServiceHeader: React.FC = () => (
    <Header transactional>
        <Header.Container>
            <Header.Logo href="/" />
            <Header.ServiceName href="/" long>
                Type 1 Opt-Out
            </Header.ServiceName>
        </Header.Container>
    </Header>
);

export default ServiceHeader;
