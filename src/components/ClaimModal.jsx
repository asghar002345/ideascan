// import React, { useState } from "react";
// import { Button, Dialog, DialogContent, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme: any) => {
//   return {
//     paper: {
//       minWidth: "600px",
//       borderRadius: "6px",
//       overflowY: "hidden",
//       [theme.breakpoints.down("sm")]: {
//         minWidth: "300px",
//       },
//     },
//     bgBlackColor: {
//       background: "#fff",
//       padding: "30px",
//       color: "black",
//     },
//     flexing: {
//       display: "flex",
//       justifyContent: "space-between",
//       [theme.breakpoints.down("sm")]: {
//         flexDirection: "column",
//         textAlign: "center",
//       },
//     },
//     buttonStyle: {
//       border: "none",
//       backgroundColor: "#1e2027",
//       color: "red",
//       fontSize: "20px",
//       cursor: "pointer",
//       paddingLeft: "12px",
//       paddingRight: "12px",
//     },
//     btnOk: {
//       width: "30%",
//       background: "#0C71BC",
//       color: "#fff",
//       float: "right",
//       marginTop: "15px",
//       padding: "8px 8px",
//       fontSize: "15px",
//       "&:hover": {
//         backgroundColor: "#084F83",
//         color: "#fff",
//       },
//     },
//     bigText: {
//       fontSize: "30px",
//     },
//   };
// });

// const ClaimModal = (props: any) => {
//   const classes: any = useStyles();
//   const { openClaimPopup, setOpenClaimPopup, hashNumberClaim } = props;
//   return (
//     <Dialog open={openClaimPopup} classes={{ paper: classes.paper }}>
//       <DialogContent className={classes.bgBlackColor}>
//         <div className={classes.bigText}>Congratulations!</div>
//         <div>You have claimed your reward</div>
//         <div>Your hash ID: {hashNumberClaim}</div>
//         <Button
//           onClick={() => setOpenClaimPopup(false)}
//           className={classes.btnOk}
//         >
//           Ok
//         </Button>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ClaimModal;
