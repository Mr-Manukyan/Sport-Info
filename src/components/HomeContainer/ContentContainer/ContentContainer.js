import React, { useContext } from "react";
import style from "./ContentContainer.module.css";
import Content from "./Content/Content";
import { LanguageContext } from "../../Common/LanguageProvider/LanguageProvider";
import contentData from "./Content/contentData";
import FooterContainer from "../../FooterContainer/FooterContainer";




const ContentContainer = () => {
  const { dictionary } = useContext(LanguageContext);
  const contents = dictionary.contents;
  const contentsParagraph = dictionary.contentsParagraph

 

  return (
    <section className={style.contentContainer}>
      <h3 className={style.paragraph}>{contentsParagraph}</h3>
      <div className={style.contentWrapper}>
        {contents.map((contnet, index) => {
          const image = contentData[index];
          return (
            <Content
              url={image}
              text={contnet.title}
              alt={contnet.alt}
              key={contnet.id}
              index = {index + 1}
            />
          );
        })}
      </div>
      <FooterContainer/>
    </section>
  );
};

export default ContentContainer;
