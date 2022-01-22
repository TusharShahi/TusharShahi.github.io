import Image from "next/image";
import React, { useContext, memo } from "react";
import { socialMediaIconLink } from "../../tools/constants";
import { Context } from "../../tools/context";
import styles from "./ContactArea.module.css";

const SocialMediaLink = memo((props) => {
  const { theme } = useContext(Context);

  let socialMediaIconLinkWordsArray = socialMediaIconLink.split("-");
  socialMediaIconLinkWordsArray[1] = props.website + ".svg";
  const componentSocialMediaIconLink =
    socialMediaIconLinkWordsArray[0] + "-" + socialMediaIconLinkWordsArray[1];

  const altText = props.website + " link";
  const socialMediaLink = props.link;
  let imageLinkTagCode;
  imageLinkTagCode = (
    <a href={socialMediaLink} rel="noopener noreferrer" target="_blank">
      <Image
        loader={({ src }) => src}
        width="21"
        height="21"
        src={componentSocialMediaIconLink}
        alt={altText}
        priority
        unoptimized
      ></Image>
    </a>
  );
  return (
    <div className={`${styles.SocialMediaLink} ${styles[theme]}`}>
      <div className={styles.MediaIconBox}>{imageLinkTagCode}</div>
    </div>
  );
});

SocialMediaLink.type.displayName = "SOCIALMEDIALINK";
export default SocialMediaLink;
