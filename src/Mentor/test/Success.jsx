import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import List from '../../components/List'
import test from "../../assets/test.png";
import { Image } from '../../components/Image';
import View from '../../components/View';
import success from "../../assets/SUCCESS.png";

function Success() {
    return (
        <>
            <HeaderComponent page="Progress Chart" title="Check Progress" />

            <div style={{ height: '70vh', display: 'grid', justifyItems: 'center', alignItems: 'center' }}>
                <div>
                    <View style={{
                        border: "1px solid rgba(0, 0, 0, 0.16)",
                        boxShadow: "rgba(0, 0, 0, 0.15) 4px 4px 2.6px",
                        padding: '0.4rem',
                        margin: "1rem",
                        position: 'relative',
                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: '1rem',
                            minHeight: '200px'
                        }}>
                            <Image src={success} alt="Success" style={{ width: "50px", margin: "0 auto" }} />
                            <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '1rem' }}>
                                Thank You For Submitting The Form Please check your progress level by clicking below
                            </p>
                        </View>
                    </View>
                    <a href=""><p style={{ textAlign: 'center'}}>Click here for progress checking</p></a>
                </div>
            </div>
        </>
    )
}

export default Success