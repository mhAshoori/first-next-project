import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div >
      <Navbar />
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus
        ipsam voluptas provident, dolorem optio itaque nesciunt similique
        adipisci. Voluptates fugit voluptate alias, beatae eos magni inventore
        unde ipsum incidunt?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus
        ipsam voluptas provident, dolorem optio itaque nesciunt similique
        adipisci. Voluptates fugit voluptate alias, beatae eos magni inventore
        unde ipsum incidunt?
      </p>
      <Footer/>
    </div>
  );
}
