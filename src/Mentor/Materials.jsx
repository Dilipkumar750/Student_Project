import HeaderComponent from "../components/HeaderComponent";
import SmallBox from "../components/SmallBox";
import View from "../components/View";
import book from "../assets/book.png";
import video from "../assets/video.png";


function Materials() {
    return (
        <>
            <HeaderComponent page="Study Material" title="Access Your Material" />
            <h2 style={{padding:'3rem 0 0 3rem'}}>Class-1st:</h2>
            <View style={{height:'70vh',display:'grid',justifyItems:'center',alignItems:'center'}}>
                <View style={{width:'50%',margin:'0 auto'}}><SmallBox image={book} />
                    <h4 style={{textAlign:'center',paddingTop:'1rem',fontSize:'2rem'}}>Book</h4></View>
                <View style={{width:'50%',margin:'0 auto'}}><SmallBox image={video} />
                    <h4 style={{textAlign:'center',paddingTop:'1rem',fontSize:'2rem'}}>Video</h4></View>
            </View>
        </>
    )
}

export default Materials