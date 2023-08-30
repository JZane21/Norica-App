export const NewHomePage = () => {
  return (
    <>
      <div className={cn(styles.root, "untitled-page")}>
        <h1 className={styles.title}>
          {`"Forjamos visiones a través del diseño y la construcción excepcional."`}
          <br />
          <br />
        </h1>
        <div className={styles.box}>
          <h4 className={styles.highlight}>Mensaje</h4>
          <img
            className={styles.image}
            src={require("assets/70c66977e7e82656d60a9fe40ec0217d.png")}
            alt="alt text"
          />
        </div>
        <div className={styles.box1}>
          <div className={styles.rect1} />
          <div className={styles.rect2} />
          <div className={styles.rect3} />
          <img
            className={styles.image1}
            src={require("assets/ebb7b08f4024f7585703265603387ff9.png")}
            alt="alt text"
          />
          <img
            className={styles.image2}
            src={require("assets/cace544759f42ae7da74a133a9d421f2.png")}
            alt="alt text"
          />
          <img
            className={styles.image3}
            src={require("assets/a6ede870b136f2a0dfa23557ed3dffd3.png")}
            alt="alt text"
          />
          <img
            className={styles.image4}
            src={require("assets/3e926fba79ffbb2fa39eb81ca8cdfe83.png")}
            alt="alt text"
          />
          <img
            className={styles.image5}
            src={require("assets/8d5443cced303fb27d3b42d68b440dd6.png")}
            alt="alt text"
          />
          <h4 className={styles.highlight1}>Contacto</h4>
        </div>
        <h5 className={styles.highlight2}>
          Contratanos
          <br />
        </h5>
        <h5 className={styles.highlight21}>Trabajos</h5>
        <h5 className={styles.highlight22}>Compra</h5>
        <h5 className={styles.highlight23}>Contacto</h5>
        <div className={styles.line} />
        <div className={styles.rect5} />
        <img
          className={styles.image6}
          src={require("assets/26a951d445bd94469b23800dc58262ab.png")}
          alt="alt text"
        />
        <div className={styles.line1} />
        <img
          className={styles.icon}
          src={require("assets/84d37b34ce1eb838fe724a9234d95f9b.png")}
          alt="alt text"
        />
        <div className={styles.box2}>
          <img
            className={styles.image7}
            src={require("assets/690016ed3a69c6aff5ab62657043ea4a.png")}
            alt="alt text"
          />
          <img
            className={styles.image8}
            src={require("assets/0781c49b050cd79acb8ebd7cf69d156f.png")}
            alt="alt text"
          />
        </div>
      </div>
    </>
  );
};
