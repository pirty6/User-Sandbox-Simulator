import React from "react";
import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    backgroundColor: tokens.colorNeutralBackgroundInverted,
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  },
});

export const ProfilePicture = React.memo((props) => {
  const styles = useStyles();

  return <div className={styles.root} />;
});
