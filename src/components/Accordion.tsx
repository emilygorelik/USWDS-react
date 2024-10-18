import { ReactElement } from "react";

export default function Accordion(props: { title: string, id: string, children: ReactElement }) {
    return (
        <div className="usa-accordion usa-accordion--bordered">
            <h4 className="usa-accordion__heading">
                <button
                    type="button"
                    className="usa-accordion__button"
                    aria-expanded="true"
                    aria-controls={props.id}
                >
                    {props.title}
                </button>
            </h4>
            <div id={props.id} className="usa-accordion__content usa-prose">
                {props.children}
            </div>
        </div>
    );
}