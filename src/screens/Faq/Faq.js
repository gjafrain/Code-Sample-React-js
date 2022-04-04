import { useState } from "react";
import { Accordion, Icon } from 'semantic-ui-react';
//
import { TheContainer } from "../../components/molecules";
import './Style.scss';


export default function Faq() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        // const { activeIndex } = state
        const newIndex = activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }

    return (
        <TheContainer className="faq-container">
            <Accordion fluid styled>

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, i) => {
                    return (
                        <>
                            <Accordion.Title
                                key={i}
                                active={activeIndex === x}
                                index={x}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                What is a dog?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === x}>
                                <p>
                                    A dog is a type of domesticated animal. Known for its loyalty and
                                    faithfulness, it can be found as a welcome guest in many households
                                    across the world.
                                </p>
                            </Accordion.Content></>
                    )
                })}
            </Accordion>
        </TheContainer>
    )
}
