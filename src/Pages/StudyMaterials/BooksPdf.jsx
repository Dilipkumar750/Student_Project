import React from 'react';
import addclass from "../../assets/ADDCLASS.png";
import openbook from "../../assets/openBook.png";
import HeaderComponent from '../../components/HeaderComponent';
import View from '../../components/View';
import SmallBox from '../../components/SmallBox';

function BooksPdf() {
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
            <SmallBox image={openbook} title="Maths.pdf" />
          </View>
          <View style={{ height: '100px' }}>
            <SmallBox image={openbook} title="Science.pdf" />
          </View>
          <View style={{ height: '100px' }}>
            <SmallBox image={openbook} title="English.pdf" />
          </View>
        </View>
      </div>
    </>
  );
}

export default BooksPdf;
