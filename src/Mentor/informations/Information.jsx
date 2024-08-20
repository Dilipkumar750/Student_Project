import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import View from "../../components/View";
import { Button } from "react-bootstrap";
import List from "../../components/List";
import { HiChevronRight } from "react-icons/hi";
import grantsImg from '../../assets/IMG-20240819-WA0007.jpg'
import paymentImg from '../../assets/payment.jpg'
import IncentivesImg from '../../assets/IMG-20240819-WA0008.jpg'
import hiringImg from '../../assets/hiring.jpg'
import internImg from '../../assets/IMG-20240819-WA0012.jpg'
import { Image } from "../../components/Image";

function Information() {
    return (
        <>
            <HeaderComponent page="More Information" title="Empolyment And Fees" />
            <div style={{padding:'1rem',display:'grid',gap:'2rem'}}>
                <List>
                    <Image src={grantsImg} alt="open book" style={{ width: '80%' }} />
                    <span>Grants</span>
                    <HiChevronRight style={{ height: '100%', width: '100%' }} />
                </List>
                <List>
                    <Image src={paymentImg} alt="open book" style={{ width: '80%' }} />
                    <span>Loans</span>
                    <HiChevronRight style={{ height: '100%', width: '100%' }} />
                </List>
                <List>
                    <Image src={IncentivesImg} alt="open book" style={{ width: '80%' }} />
                    <span>Incentives</span>
                    <HiChevronRight style={{ height: '100%', width: '100%' }} />
                </List>
                <List>
                    <Image src={hiringImg} alt="open book" style={{ width: '80%' }} />
                    <span>Jobs</span>
                    <HiChevronRight style={{ height: '100%', width: '100%' }} />
                </List>
                <List>
                    <Image src={internImg} alt="open book" style={{ width: '80%' }} />
                    <span>Internships</span>
                    <HiChevronRight style={{ height: '100%', width: '100%' }} />
                </List>
            </div>
        </>
    )
}

export default Information