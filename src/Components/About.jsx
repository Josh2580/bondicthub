import React from "react";
import styled from "styled-components";
import { Card } from "../styles/Card";

const About = () => {
  return (
    <Card
      id="about"
      paddingTop="70px"
      flexDirection="column"
      alignItems="center"
      gap="1rem"
    >
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nobis
        deserunt impedit fugit numquam cumque sit doloremque repellat dolores
        aut!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        laboriosam, similique a enim esse, tempore dignissimos placeat commodi
        optio nesciunt nam fuga pariatur praesentium. Optio officia ipsam
        inventore commodi aspernatur!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        laboriosam, similique a enim esse, tempore dignissimos placeat commodi
        optio nesciunt nam fuga pariatur praesentium. Optio officia ipsam
        inventore commodi aspernatur! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Fuga atque rem aspernatur quo eligendi unde quos
        aperiam consectetur asperiores. Praesentium quo fugiat optio doloribus
        nostrum eligendi excepturi temporibus officiis alias minima, aperiam
        dolor est dolorum commodi cum aut atque nulla libero quidem rem porro,
        quod illum incidunt natus? Eius dolor ipsa qui veritatis. Pariatur odio
        in nisi consequuntur tempora, asperiores quis iste dolore. Ab esse
        deserunt blanditiis repellat a quasi rerum illum dolor accusamus
        voluptas, dolorum expedita quod consectetur dolores. Molestiae,
        praesentium? Sit dolor laudantium facere rerum atque quibusdam itaque
        nemo, error, iure at officia architecto. Qui molestias doloribus
        recusandae!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        laboriosam, similique a enim esse, tempore dignissimos placeat commodi
        optio nesciunt nam fuga pariatur praesentium. Optio officia ipsam
        inventore commodi aspernatur!
      </p>
    </Card>
  );
};

const head2 = styled.h2`
  text-align: center;
`;

export default About;
