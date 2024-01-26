import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ConfirmationDialog = ({ open, onClose, onConfirm, title, content }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {/* <Button variant="outlined" onClick={onClose} color="primary">
          Cancel
        </Button> */}
        <Button variant="contained" onClick={onConfirm} color="primary">
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
