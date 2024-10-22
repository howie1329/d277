import React from "react";
import trn1 from "../trenton/images/trn1.jpeg";
import trn2 from "../trenton/images/trn2.jpeg";
import trn3 from "../trenton/images/trn3.jpeg";
import trn4 from "../trenton/images/tren4.jpeg";
import trn5 from "../trenton/images/tren5.jpg";
import trn6 from "../trenton/images/tren6.jpg";
import Image from "next/image";
import styles from "../trenton/trenton.module.css";

function Page() {
  return (
    <>
      <head>
        <title>Trenton</title>
      </head>
      <div className={styles.pageDiv}>
        <section>
          <h2>Trenton New Jersey</h2>
          <div className={styles.gridContainer}>
            <Image src={trn1} width="300" height="300" alt="capital building" />
            <Image
              src={trn2}
              width="300"
              height="300"
              alt="high view of capital building"
            />
            <Image
              src={trn3}
              width="300"
              height="300"
              alt="high view of capital building"
            />
          </div>
          <div className={styles.gridContainer}>
            <Image
              src={trn4}
              width="300"
              height="300"
              alt="view of capital building across lake"
            />
            <Image
              src={trn5}
              width="300"
              height="300"
              alt="new jersey state museum"
            />
            <Image
              src={trn6}
              width="300"
              height="300"
              alt="picture of historic building"
            />
          </div>
        </section>
        <div className={styles.textDiv}>
          <aside className={styles.infoDiv}>
            <ol>
              <li>The Citys Population is 89,327 </li>
              <li>The Year The City Was Incorporated was 1792</li>
              <li>
                The region of the state in which the city is located is called
                Central Jersey
              </li>
              <li>The classification of the city is urban</li>
              <li>
                The average income level of the city is $44,444 which is lower
                then the state median income of $96,346
              </li>
            </ol>
          </aside>
        </div>
      </div>
      <footer>
        <p>
          “Trenton, NJ | Data USA.” Datausa.io,
          datausa.io/profile/geo/trenton-nj/. ‌
        </p>
      </footer>
    </>
  );
}
export default Page;
