import { SetStateAction, Dispatch } from "react";

import getEntries from "./getEntries";
import getEntry from "./getEntry";

interface SocialURLS {
  logoURL: string;
  URL: string;
}
interface Socials {
  [key: string]: SocialURLS;
}

async function getSocials(
  setSocials: Dispatch<SetStateAction<Socials>>,
  socials: Socials
): Promise<void> {
  const socialsArray = await getEntries("socials").then(
    (json: any) => json.items
  );
  const socialIds = await socialsArray.map((object: any) => object.sys.id);
  const updatedSocials: Socials = { ...socials };
  await socialIds.forEach(async (entryId: any) => {
    const entryJSON: any = await getEntry(entryId).then((json: any) => json);
    const socialTitle = entryJSON.items[0].fields.logoTitle;
    const socialUrl = entryJSON.items[0].fields.logoLink;
    const socialImg = entryJSON.includes.Asset[0].fields.file.url;
    const socialObject = {
      logoURL: socialImg,
      URL: socialUrl,
    };
    updatedSocials[socialTitle] = socialObject;
    console.log("UPDATED SOCIALS 🤗", updatedSocials);
    setSocials(updatedSocials);
  });

  // return {
  //   skill: entryJSON.items[0].fields.skillName,
  //   level: entryJSON.items[0].fields.skillLevel,
  //   img: entryJSON.includes?.Asset[0].fields.file.url
  //     ? entryJSON.includes.Asset[0].fields.file.url
  //     : null,
  // };
  // });
  // const socialList = await Promise.all(socialObjects);

  // setSkillData(skillList);

  // client
  //   .getEntries({
  //     content_type: "socials",
  //   })
  //   .then((entry: any) => {
  //     const updatedSocials: Socials = { ...socials };
  //     const items: any[] = entry.items;
  //     // //console.log(items);
  //     items.forEach((element) => {
  //       const title: string = element.fields.logoTitle;
  //       updatedSocials[title] = {
  //         logoURL: element.fields.logoGraphics[0].fields.file.url,
  //         URL: element.fields.logoLink,
  //       };
  //     });
  //     setSocials(updatedSocials);
  //   })
  //   .catch((err) => console.error("ERROR:", err));
}

export default getSocials;
