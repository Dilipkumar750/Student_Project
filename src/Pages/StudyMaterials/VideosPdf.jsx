import React from 'react';
import addclass from "../../assets/ADDCLASS.png";
import videos from "../../assets/videos.png";
import HeaderComponent from '../../components/HeaderComponent';
import View from '../../components/View';
import SmallBox from '../../components/SmallBox';

function VideosPdf() {
  return (
    <>
      <HeaderComponent page="Add study Materials" title="Books" />
      <div>
        <View
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            padding: "0 0.6rem",
            marginTop: '100px', // Corrected property
            alignItems: 'center', // Corrected property
            justifyContent: 'center', // Corrected property
          }}
        >
          <View style={{ height: '100px' }}>
            <SmallBox image={addclass} title="add books " />
          </View>
          <View style={{ height: '100px' }}>
            <SmallBox image={videos} title="Maths.mpv4" />
          </View>
          <View style={{ height: '100px' }}>
            <SmallBox image={videos} title="Science.mpv4" />
          </View>
          <View style={{ height: '100px' }}>
            <SmallBox image={videos} title="English.mpv4" />
          </View>
        </View>
      </div>
    </>
  );
}

export default VideosPdf;
