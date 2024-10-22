import styles from "./page.module.css";
import nj1 from "../app/images/nj1.jpeg";
import nj2 from "../app/images/nj2.jpeg";
import nj3 from "../app/images/nj3.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <div>
          <h1>New Jersey</h1>
          <table>
            <tr>
              <th>Cities</th>
              <th>Pop</th>
              <th>Income</th>
            </tr>
            <tr>
              <td>Trenton</td>
              <td>89,327</td>
              <td>$44,444</td>
            </tr>
            <tr>
              <td>Newark</td>
              <td>314,147</td>
              <td>$41,638</td>
            </tr>
            <tr>
              <td>Atlantic City</td>
              <td>38,499</td>
              <td>$96,346</td>
            </tr>
          </table>
          <div className={styles.gridContainer}>
            <Image
              src={nj1}
              width="300"
              height="300"
              alt="picture of ammusment park"
            />
            <Image
              src={nj2}
              width="300"
              height="300"
              alt="picture of a city across a river"
            />
            <Image src={nj3} width="300" height="300" alt="" />
          </div>
        </div>
        <div className={styles.pageDiv}>
          <section>
            <ol>
              <li>The population of New Jersey is 9.2 million people</li>
              <li>New Jersey became a state in 1787</li>
              <li>
                New Jersey is located in the Northeastern region of the United
                States
              </li>
              <li>The Average Income in New Jersey is $91,000</li>
            </ol>
          </section>
        </div>
      </div>
      <footer>
        <p>
          “New Jersey Population 2024 (Demographics, Maps, Graphs).”
          Worldpopulationreview.com, 2024,
          worldpopulationreview.com/states/new-jersey. ‌
        </p>
      </footer>
    </>
  );
}
