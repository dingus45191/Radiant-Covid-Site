import React from "react";
import Image from 'next/image'

const Creators = () => {
  return (
    <div className="Creators">
      <h1 className="Creators__header">Creators</h1>
      <p className="Creators__tech__lead">
        <strong>Mohammed Mubashir Hasan</strong>
      </p>
      <Image
        src="/images/mubashir.jpeg"
        height={350}
        width={300}
        alt="Mubashir"
        className={"Creators__image"}
      />
      <p className={"Creators__something"}>
        I am a tech geek who likes doing everything tech.
      </p>
      <p className="Creators__other__tech__guy">
        <strong>Madhav Anand</strong>
      </p>
      <Image
        className={"Creators__image"}
        src="https://media.discordapp.net/attachments/716852614179848193/843463071095455784/biden.jpeg"
        alt="Madhav"
        height={350}
        width={300}
      />
      <p className={"Creators__something"}>I have fun with tech.</p>
      <p className={"Creators__dev"}>
        Want to contribute? Here's the link to the{" "}
        <a href="https://shortnner.tech/Sic9ag-Nn">
          <strong>repo</strong>
        </a>
          <br/>
          <br/>
          <p><a href="https://www.radiantcovid.in/"><strong>Back to Home page</strong></a></p>
      </p>
    </div>
  );
};

export default Creators;
