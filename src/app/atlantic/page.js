import Image from "next/image";
import React from "react";
import atc1 from "../atlantic/images/atc1.jpeg";
import atc2 from "../atlantic/images/atc2.jpg";
import atc3 from "../atlantic/images/atc3.jpeg";
import styles from "../atlantic/atlantic.module.css";
function Page() {
  return (
    <>
      <head>
        <title>Atlantic City</title>
      </head>
      <div className={styles.pageDiv}>
        <section>
          <h2>Atlantic City New Jersey</h2>
          <div className={styles.gridContainer}>
            <Image
              src={atc1}
              width="300"
              height="300"
              alt="far view of boardwalk"
            />
            <Image
              src={atc2}
              width="300"
              height="300"
              alt="close up of boardwalk"
            />
            <Image
              src={atc3}
              width="300"
              height="300"
              alt="view of beach and boardwalk"
            />
          </div>
          <div className={styles.gridContainer}>
            <Image src={atc1} width="300" height="300" />
            <Image src={atc2} width="300" height="300" />
            <Image src={atc3} width="300" height="300" />
          </div>
        </section>
        <div className={styles.textDiv}>
          <aside className={styles.infoDiv}>
            <ul>
              <li>The Citys Population is 38,499 </li>
              <li>The Year The City Was Incorporated was 1854</li>
              <li>
                The region of the state in which the city is located is called
                Southern Jersey
              </li>
              <li>The classification of the city is urban</li>
              <li>
                The average income level of the city is $35,188 which is lower
                then the state median income of $96,346
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <footer>
        <p>
          “Atlantic City, NJ | Data USA.” Datausa.io,
          datausa.io/profile/geo/atlantic-city-nj/.
        </p>
      </footer>
    </>
  );
}
export default Page;
