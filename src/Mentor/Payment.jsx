import HeaderComponent from "../components/HeaderComponent";
import SmallBox from "../components/SmallBox";
import View from "../components/View";
import gpay from "../assets/Gpay.png";
import paytm from "../assets/paytm.png";
import phonepe from "../assets/phonepe.png";
import vector from "../assets/bhim.png";
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import bank from "../assets/bank.png";
import { BsCreditCardFill } from "react-icons/bs";
import { Image } from "../components/Image";

function Payment() {
  return (
    <>
      <HeaderComponent page="Mentor Access" title="Book Your Mentor" />
      <View
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <h5 style={{ textAlign: "center", color: "#89AA04" }}>
          PAYMENT INFORMAATION
        </h5>
        <View
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
        >
          <br />
          <View style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Registration Amount</span>
            <span>₹500</span>
          </View>
          <View style={{ display: "flex", justifyContent: "space-between" }}>
            <span>GST (18%)</span>
            <span>₹9</span>
          </View>
          <br />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#89AA04",
          }}
        >
          <span>Payable Amount</span>
          <span>₹509</span>
        </View>
      </View>
      <View
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <p style={{ fontSize: "12px", fontWeight: "600", color: "#89AA04" }}>
          Pay directly with your favourite UPI apps{" "}
        </p>
        <View
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "1rem",
          }}
        >
          <View style={{ height: "65px" }}>
            <SmallBox image={gpay} title="GPay" />
          </View>
          <View style={{ height: "65px" }}>
            <SmallBox image={phonepe} title="PhonePe" />
          </View>
          <View style={{ height: "65px" }}>
            <SmallBox image={vector} title="BHIM" />
          </View>
          <View style={{ height: "65px" }}>
            <SmallBox image={paytm} title="Paytm" />
          </View>
        </View>
      </View>
      <View
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <p style={{ fontSize: "12px", fontWeight: "600", color: "#89AA04" }}>
          <BsCreditCardFill /> Debit / Credit Card
        </p>
        <View
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            padding: "0 2rem",
          }}
        >
          <View style={{ height: "70px" }}>
            <SmallBox image={mastercard} title="Mastercard" />
          </View>
          <View style={{ height: "70px" }}>
            <SmallBox image={visa} title="Visa" />
          </View>
        </View>
      </View>
      <View
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <p style={{ fontSize: "12px", fontWeight: "600", color: "#89AA04" }}>
          <Image src={bank} width={"12px"} /> NET BANKING
        </p>
      </View>
    </>
  );
}
export default Payment;
