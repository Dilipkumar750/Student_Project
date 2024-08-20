import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import View from "../../components/View";
import { useParams } from "react-router-dom";

function InformationDetails() {
    const { title } = useParams();
    const [array, setArray] = useState([]);

    // Define your data
    const Goverment_Grants = [
        [
            "Government Grants",
            [
                "Offered by government departments or ministries at the central, state, and local levels.",
                "Aimed at supporting various educational initiatives, including infrastructure development, scholarships, and teacher training programs.",
            ],
        ],
        [
            "Eligibility Criteria",
            [
                "Residency: Applicants must be residents of rural areas as defined by the grant provider.",
                "Institution Type: Grants may be available for schools, colleges, NGOs, community-based organizations, and individuals.",
                "Project Scope: Eligibility criteria may vary depending on the focus area of the grant, such as infrastructure development, teacher training, or student scholarships.",
                "Compliance: Applicants must adhere to any specific requirements or guidelines outlined by the grant provider.",
            ],
        ],
    ];

    const Student_Education_Loans = [
        [
            "Student Education Loan",
            [
                "Offered by banks and financial institutions to students for higher education in India and abroad.",
                "Cover tuition fees, books, equipment, and sometimes living expenses",
            ],
        ],
        [
            "Eligibility Criteria",
            [
                "Applicant should be an Indian citizen.",
                "Secured admission to a recognized course in India or abroad through an entrance test or a merit-based selection process.",
            ],
        ],
        [
            "Application Process",
            [
                ["Research",
                [
                    "Identify the loan scheme that fits your educational needs.",
                    "Compare offerings from different banks and financial institutions.",
                ]],
                ["Prepare Documentation",
                [
                    "Academic records, admission letters, and course details.",
                    "Financial documents, including income proof, tax returns, and collateral (if required).",
                ]],
                ["Application Submission",
                [
                    "Fill out the loan application form provided by the bank or financial institution.",
                    "Submit the form along with all required documents.",
                ]],
                ["Loan Processing",
                [
                    "The bank will review the application, perform the necessary due diligence, and may conduct an interview or site visit.",
                    "Once approved, the loan agreement is signed, and the loan amount is disbursed as per the terms.",
                ]],
            ],
        ],
    ];

    // Other categories (ensure they are filled with similar structure if needed)
    const otherCategories = {
        NGO_Grants: [],
        CSR: [],
        Foundation_Grants: [],
        Internships: [],
        Skill_Development_Loans: [],
        Educational_Infrastructure_Loans: [],
        Scholarships: [],
        Teacher: [],
        Infrastructure: [],
        Technology: [],
    };

    useEffect(() => {
        switch (title) {
            case "Goverment_Grants":
                setArray(Goverment_Grants);
                break;
            case "Student_Education_Loans":
                setArray(Student_Education_Loans);
                break;
            // Handle other categories if needed
            default:
                setArray([]);
        }
    }, [title]);

    return (
        <>
            <HeaderComponent page="More Information" title="Employment And Fees" />
            <div>
                <View>
                    <View style={{ width: "80%", margin: "20px auto" }}>
                        {array.map(([header, points], index) => (
                            <View key={index} style={{ marginBottom: "20px" }}>
                                <View
                                    style={{
                                        backgroundColor: "#F0F0F0",
                                        padding: "10px",
                                        border: "1px solid black",
                                        borderRadius: "5px",
                                    }}
                                >
                                    {header}
                                </View>
                                <View
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        padding: "10px",
                                        border: "1px solid black",
                                        borderRadius: "5px",
                                        marginTop: "5px",
                                    }}
                                >
                                    <ul>
                                        {points.map((point, pointIndex) => {
                                            // Handle cases where point is an array or a string
                                            if (Array.isArray(point)) {
                                                // Nested array handling
                                                return (
                                                    <li key={pointIndex}>
                                                        <strong>{point[0]}</strong>
                                                        <ul>
                                                            {point.map((subPoint, subPointIndex) => (
                                                                <li key={subPointIndex}>{subPoint}</li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                );
                                            } else {
                                                // Normal point
                                                return <li key={pointIndex}>{point}</li>;
                                            }
                                        })}
                                    </ul>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </div>
        </>
    );
}

export default InformationDetails;
