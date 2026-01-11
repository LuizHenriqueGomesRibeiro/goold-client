import { Box, Modal } from "@mui/material";

export default function GooldModal() {
  return <Modal open={true}>
    <Box width={375} height={500} tabIndex={-1} sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      borderRadius: 1,
      boxShadow: 24,

      "&:focus": {
        outline: "none",
      },
    }}>ddwdw</Box>  
  </Modal> 
}