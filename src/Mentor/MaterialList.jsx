import React from 'react'
import HeaderComponent from "../components/HeaderComponent";
import List from '../components/List';
import { Image } from '../components/Image';
import { HiDownload } from "react-icons/hi";
import openBookImg from "../assets/openBook.png";
import View from "../components/View"; 

export default function MaterialList() {
    return (
        <>
            <HeaderComponent page="Study Material" title="Access Your Material" />
            <View style={{ padding: '1rem', display: 'grid', gap: '1rem' }}>
                <h1>Books:</h1>
                <List>
                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                    <span>Class-1st</span>
                    <HiDownload style={{ height: '100%', width: '100%' }} />
                </List>
                <List>
                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                    <span>Class-1st</span>
                    <HiDownload style={{ height: '100%', width: '100%' }} />
                </List>
                <List>
                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                    <span>Class-1st</span>
                    <HiDownload style={{ height: '100%', width: '100%' }} />
                </List>
                <List>
                    <Image src={openBookImg} alt="open book" style={{ width: '80%' }} />
                    <span>Class-1st</span>
                    <HiDownload style={{ height: '100%', width: '100%' }} />
                </List>
            </View>
        </>
    )
}
