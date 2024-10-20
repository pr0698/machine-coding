import { CaretDownOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function FaqComponent({ data }) {
    const [visibleAnswers, setVisibleAnswers] = useState({}); // Track visibility per question

    function handleClick(index) {
        setVisibleAnswers((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle visibility for the clicked question
        }));
    }


    return (
        <center>
            <h1>Frequently Asked Questions</h1>
            <div>
                {data.map((item, index) => (
                    <div className="main-container" key={index}>
                        <CaretDownOutlined onClick={() => handleClick(index)} />
                        <strong>Q:</strong> {item.question} <br />
                        {visibleAnswers[index] && (
                            <div>
                                <strong>A:</strong> {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </center>
    );
}
